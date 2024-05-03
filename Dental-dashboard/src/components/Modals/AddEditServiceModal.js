import React, { useState } from 'react';
import Modal from './Modal';
import { Button, Input } from '../Form';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import { db, addDoc, collection } from '../lib/firebase-config'; // Import Firestore functions

function AddEditServiceModal({ closeModal, isOpen, datas }) {
  const [serviceName, setServiceName] = useState(datas?.name || '');
  const [price, setPrice] = useState(datas?.price || '');

  const handleSave = async () => {
    try {
      // Save data to Firebase
      await addDoc(collection(db, 'Services'), {
        name: serviceName,
        price: parseFloat(price) // Convert to number
      });
      toast.success('Service saved successfully!');
      closeModal();
    } catch (error) {
      console.error('Error saving service:', error);
      toast.error('Failed to save service. Please try again later.');
    }
  };

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title={datas?.name ? 'Edit Service' : 'New Service'}
      width={'max-w-3xl'}
    >
      <div className="flex-colo gap-6">
        <Input
          label="Service Name"
          color={true}
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />

        <Input
          label="Price (Php)"
          type="number"
          color={true}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <button
            onClick={closeModal}
            className="bg-red-600 bg-opacity-5 text-red-600 text-sm p-4 rounded-lg font-light"
          >
            {datas?.name ? 'Discard' : 'Cancel'}
          </button>
          <Button
            label="Save"
            Icon={HiOutlineCheckCircle}
            onClick={handleSave} // Call handleSave function on click
          />
        </div>
      </div>
    </Modal>
  );
}

export default AddEditServiceModal;
