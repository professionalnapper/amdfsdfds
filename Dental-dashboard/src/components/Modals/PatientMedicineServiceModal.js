import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { BiSearch, BiPlus } from 'react-icons/bi';
import { RadioGroup } from '@headlessui/react';
import { Button } from '../Form';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../lib/firebase-config'; // Assuming you have a Firebase configuration file with a db export

function PatientMedicineServiceModal({ closeModal, isOpen, patient, onSelectService }) {
  const [selected, setSelected] = useState(null); // Change default selection to null
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Services'));
        const servicesList = querySnapshot.docs.map(doc => doc.data());
        setServices(servicesList);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []); // Run once on component mount

  // Filter services based on search query
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddService = () => {
    if (selected) {
      onSelectService(selected);
      closeModal(); // Close the modal after selecting a service
    }
  };

  // Function to handle selection of a service
  const handleServiceSelection = (service, event) => {
    event.stopPropagation(); // Stop event propagation to prevent modal from closing
    setSelected(service); // Update selected state with the selected service
  };

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title={patient ? 'Services' : 'Services'}
      width={'max-w-xl'}
    >
      <div className="flex-colo gap-6">
        {/* search */}
        <div className="flex items-center gap-4 w-full border border-border rounded-lg p-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <BiSearch className=" text-xl" />
        </div>
        {/* data */}
        <div className="w-full h-[500px] overflow-y-scroll">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="space-y-2">
              {filteredServices.map(service => (
                <RadioGroup.Option
                  key={service.name}
                  value={service}
                  className={({ active, checked }) =>
                    `
                    ${active ? 'border-subMain bg-subMain text-white' : ''}
                    rounded-xl border-[1px] border-border p-4 group hover:bg-subMain hover:text-white cursor-pointer`
                  }
                  onClick={event => handleServiceSelection(service, event)} // Call handleServiceSelection on click
                >
                  {({ active, checked }) => (
                    <h6 className="text-sm">{service.name}</h6>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        {/* button */} 
        <Button onClick={handleAddService} label="Add" Icon={BiPlus} />
      </div>
    </Modal>
  );
}

export default PatientMedicineServiceModal;
