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
  const [title, settitle] = useState(sortsDatas.title[0]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });
  const [image, setImage] = useState(null);
  console.log('Image can enter');
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSaveChanges = async () => {
    if(!image?.file) {
      toast.error('No image selected.');
      return;
    }
    setLoading(true);
    try {
      const storageRef = ref(storage, `docimage/${image.file.name}`);
      const snapshot = await uploadBytes(storageRef, image.file);
      const imageUrl = await getDownloadURL(snapshot.ref);

      const docRef = await addDoc(collection(db, 'Doctors'), {
        title: title.name,
        ...formData,
        imageUrl
      });
      console.log('Document written with ID:', docRef.id);
      toast.success('Doctor added successfully');
      closeModal();
    } catch(error) {
      console.error('Error saving changes:', error);
      toast.error('An unexpected error occured');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const onSubmit = async () => {
  //   try {
  //     await addDoc(collection(db, 'Doctors'), {
  //       fullName: fullName,
  //       title: title.name,
  //       email: email,
  //       phoneNumber: phoneNumber
  //     });
  //     // toast.success('Doctor added successfully');
  //     // closeModal();
  //   } catch (error) {
  //     console.error('Error adding doctor: ', error);
  //     toast.error('Failed to add doctor');
  //   }
  // };

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title={doctor ? 'Add Doctor' : datas?.id ? 'Edit Stuff' : 'Add Stuff'}
      width={'max-w-3xl'}
    >
      <div className="flex gap-3 flex-col col-span-6 mb-6">
        <p className="text-sm">Profile Image</p>
        <Uploader setImage={setImage}/>
      </div>

      <div className="flex-colo gap-6">
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <Input label="Full Name" color={true} placeholder="John Doe" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />

          <div className="flex w-full flex-col gap-3">
            <p className="text-black text-sm">Title</p>
            <Select
              selectedPerson={title}
              setSelectedPerson={settitle}
              datas={sortsDatas.title}
            >
              <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
                {title.name} <BiChevronDown className="text-xl" />
              </div>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <Input label="Email" color={true} placeholder="johndoe@gmail.com" type="text" name="email" value={formData.email} onChange={handleChange} />
          <Input label="Phone Number" color={true} placeholder="123456789" type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>

        {/* buttons */}
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <button
            onClick={closeModal}
            className="bg-red-600 bg-opacity-5 text-red-600 text-sm p-4 rounded-lg font-light"
          >
            Cancel
          </button>
          <Button label="Save" Icon={HiOutlineCheckCircle} onClick={handleSaveChanges} />
        </div>
      </div>
    </Modal>
  );
}

export default AddDoctorModal;
