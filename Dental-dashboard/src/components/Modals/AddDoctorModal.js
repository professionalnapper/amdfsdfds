import React, { useState } from 'react';
import Modal from './Modal';
import Uploader from '../Uploader';
import { Button, Input, Select } from '../Form';
import { BiChevronDown } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { sortsDatas } from '../Datas';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { db, collection, addDoc } from '../lib/firebase-config'; // Import Firestore functions
import { storage } from '../lib/firebase-config'; // Ensure this path is correct for Firebase storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';



function AddDoctorModal({ closeModal, isOpen, doctor, datas }) {
  const [instraction, setInstraction] = useState(sortsDatas.title[0]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = async () => {
    try {
      await addDoc(collection(db, 'Doctors'), {
        fullName: fullName,
        title: instraction.name,
        email: email,
        phoneNumber: phoneNumber
      });
      toast.success('Doctor added successfully');
      closeModal();
    } catch (error) {
      console.error('Error adding doctor: ', error);
      toast.error('Failed to add doctor');
    }
  };

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title={doctor ? 'Add Doctor' : datas?.id ? 'Edit Stuff' : 'Add Stuff'}
      width={'max-w-3xl'}
    >
      <div className="flex gap-3 flex-col col-span-6 mb-6">
        <p className="text-sm">Profile Image</p>
        <Uploader />
      </div>

      <div className="flex-colo gap-6">
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <Input label="Full Name" color={true} placeholder="John Doe" onChange={(e) => setFullName(e.target.value)} />

          <div className="flex w-full flex-col gap-3">
            <p className="text-black text-sm">Title</p>
            <Select
              selectedPerson={instraction}
              setSelectedPerson={setInstraction}
              datas={sortsDatas.title}
            >
              <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
                {instraction.name} <BiChevronDown className="text-xl" />
              </div>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <Input label="Email" color={true} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Phone Number" color={true} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        {/* buttons */}
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <button
            onClick={closeModal}
            className="bg-red-600 bg-opacity-5 text-red-600 text-sm p-4 rounded-lg font-light"
          >
            Cancel
          </button>
          <Button label="Save" Icon={HiOutlineCheckCircle} onClick={onSubmit} />
        </div>
      </div>
    </Modal>
  );
}

export default AddDoctorModal;
