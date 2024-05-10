import React, { useEffect, useState } from 'react';
import { MdOutlineCloudDownload } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { BiPlus } from 'react-icons/bi';
import Layout from '../Layout';
import AddEditServiceModal from '../components/Modals/AddEditServiceModal';
import { db } from '../lib/firebase-config'; 
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions



function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const servicesRef = await getDocs(collection(db, 'Services'));
        const data = servicesRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setServicesData(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServicesData();
  }, []);

  const onCloseModal = () => {
    setIsOpen(false);
    setData({});
  };

  const onEdit = (datas) => {
    setIsOpen(true);
    setData(datas);
  };

  const addNewService = (newService) => {
    // Here you can implement adding/updating data to Firebase if needed
    onCloseModal();
  };

  return (
    <Layout>
      {isOpen && (
        <AddEditServiceModal
          datas={data}
          isOpen={isOpen}
          closeModal={onCloseModal}
          addService={addNewService}
        />
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="w-16 animate-bounce h-16 border border-border z-50 bg-subMain text-white rounded-full flex-colo fixed bottom-8 right-12 button-fb"
      >
        <BiPlus className="text-2xl" />
      </button>
      <h1 className="text-xl font-semibold">Services</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="bg-white my-8 rounded-xl border-[1px] border-border p-5"
      >
        <div className="mt-8 w-full overflow-x-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {servicesData.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{service.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
