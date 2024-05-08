import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { BiSearch, BiPlus } from 'react-icons/bi';
import { RadioGroup } from '@headlessui/react';
import { Button } from '../Form';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../lib/firebase-config'; // Assuming you have a Firebase configuration file with a db export

function PatientMedicineServiceModal({ closeModal, isOpen, patient }) {
  const [selected, setSelected] = useState(null); // Change default selection to null
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Services'));
        const servicesList = querySnapshot.docs.map(doc => doc.data().name);
        setServices(servicesList);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []); // Run once on component mount

  // Filter services based on search query
  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title={patient ? 'Patients' : 'Services'}
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
                  key={service}
                  value={service}
                  className={({ active, checked }) =>
                    `
                    ${active ? 'border-subMain bg-subMain text-white' : ''}
                    rounded-xl border-[1px] border-border p-4 group hover:bg-subMain hover:text-white`
                  }
                >
                  {({ active, checked }) => (
                    <h6 className="text-sm">{service}</h6>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        {/* button */}
        <Button onClick={closeModal} label="Add" Icon={BiPlus} />
      </div>
    </Modal>
  );
}

export default PatientMedicineServiceModal;
