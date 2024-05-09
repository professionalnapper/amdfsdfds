import React, { useState } from 'react';
import Uploader from '../Uploader'; // Ensure the path to Uploader is correct
import { sortsDatas } from '../Datas';
import { Button, DatePickerComp, Input, Select } from '../Form';
import { BiChevronDown } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { db, collection, addDoc } from '../lib/firebase-config';
import { storage } from '../lib/firebase-config'; // Ensure this path is correct for Firebase storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function PersonalInfo({ titles, hideInsuranceUpload }) {
  const [title, setTitle] = useState(sortsDatas.title[0]);
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState(sortsDatas.genderFilter[0]);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    emergencyContact: '',
    address: ''
  });
  const [image, setImage] = useState(null); // For patient image
  const [insuranceImage, setInsuranceImage] = useState(null); // For insurance image
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDeleteAccount = () => {
    toast.error('Deleting account is not available yet');
  };

  const handleSaveChanges = async () => {
    if (!image?.file) {
      toast.error('No image selected.');
      return;
    }
    setLoading(true);
    try { 
      const storageRef = ref(storage, `patientimage/${image.file.name}`);
      const snapshot = await uploadBytes(storageRef, image.file);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Handling insurance image upload
      let insuranceImageUrl = '';
      if (insuranceImage?.file) {
        const insuranceStorageRef = ref(storage, `insuranceimage/${insuranceImage.file.name}`);
        const insuranceSnapshot = await uploadBytes(insuranceStorageRef, insuranceImage.file);
        insuranceImageUrl = await getDownloadURL(insuranceSnapshot.ref);
      }

      const docRef = await addDoc(collection(db, 'Patients'), {
        title: title.name,
        dateOfBirth: date,
        gender: gender.name,
        ...formData,
        imageUrl, // Include the URL of the uploaded patient image
        insuranceImageUrl // Include the URL of the uploaded insurance image
      });

      console.log('Document written with ID:', docRef.id);
      toast.success('Changes saved successfully');
      setShowSuccessMessage(true);
    } catch (error) {
      console.error('Error saving changes:', error);
      toast.error('An unexpected error occurred');
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

  const handleConfirmSuccess = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      emergencyContact: '',
      address: ''
    });
    setShowSuccessMessage(false);
  };

  return (
    <div className="flex-colo gap-4">
      {/* uploader */}
      <div className="flex gap-3 flex-col w-full col-span-6">
        <p className="text-sm">Profile Image</p>
        <Uploader setImage={setImage} />
      </div>
      {/* uploader for insurance image */}
      {!hideInsuranceUpload && (
        <div className="flex gap-3 flex-col w-full col-span-6">
          <p className="text-sm">Insurance Image</p>
          <Uploader setImage={setInsuranceImage} />
        </div>
      )}
      {/* select */}
      {titles && (
        <div className="flex w-full flex-col gap-3">
          <p className="text-black text-sm">Title</p>
          <Select
            selectedPerson={title}
            setSelectedPerson={setTitle}
            datas={sortsDatas.title}
          >
            <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
              {title?.name} <BiChevronDown className="text-xl" />
            </div>
          </Select>
        </div>
      )}
      {/* Inputs for personal details */}
      <Input label="Full Name" color={true} type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      <Input label="Phone Number" color={true} type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      <Input label="Email" color={true} type="email" name="email" value={formData.email} onChange={handleChange} />
      {!titles && (
        <>
          <div className="flex w-full flex-col gap-3">
            <p className="text-black text-sm">Gender</p>
            <Select
              selectedPerson={gender}
              setSelectedPerson={setGender}
              datas={sortsDatas.genderFilter}
            >
              <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
                {gender?.name} <BiChevronDown className="text-xl" />
              </div>
            </Select>
          </div>
          <Input label="Emergency Contact" color={true} type="number" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
          <DatePickerComp label="Date of Birth" startDate={date} onChange={setDate} />
          <Input label="Address" color={true} type="text" name="address" value={formData.address} onChange={handleChange} />
        </>
      )}
      {/* Action buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <Button label="Delete Account" Icon={RiDeleteBin5Line} onClick={handleDeleteAccount} />
        <Button label="Save Changes" Icon={HiOutlineCheckCircle} onClick={handleSaveChanges} />
      </div>
      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="mb-4">Changes saved successfully!</p>
            <Button label="Confirm" onClick={handleConfirmSuccess} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
