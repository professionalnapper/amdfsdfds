import React, { useState } from 'react';
import Uploder from '../Uploader';
import { sortsDatas } from '../Datas';
import { Button, DatePickerComp, Input, Select } from '../Form';
import { BiChevronDown } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { db, collection, addDoc } from '../UsedComp/firebase-config';

function PersonalInfo({ titles }) {
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDeleteAccount = () => {
    // Implement delete account functionality here
    toast.error('Deleting account is not available yet');
  };

  const handleSaveChanges = async () => {
    try {
      // Add patient information to Firestore
      const docRef = await addDoc(collection(db, 'Patients'), {
        title: title.name,
        dateOfBirth: date,
        gender: gender.name,
        ...formData // Spread formData object to include fullName, phoneNumber, email, emergencyContact, address
      });
      console.log('Document written with ID: ', docRef.id);
      toast.success('Changes saved successfully');
      setShowSuccessMessage(true);
    } catch (error) {
      console.error('Error saving changes:', error);
      toast.error('An unexpected error occurred');
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
        <Uploder />
      </div>
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

      {/* fullName */}
      <Input
        label="Full Name"
        color={true}
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      {/* phone */}
      <Input
        label="Phone Number"
        color={true}
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      {/* email */}
      <Input
        label="Email"
        color={true}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {!titles && (
        <>
          {/* gender */}
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
          {/* emergency contact */}
          <Input
            label="Emergency Contact"
            color={true}
            type="number"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
          />
          {/* date */}
          <DatePickerComp
            label="Date of Birth"
            startDate={date}
            onChange={(date) => setDate(date)}
          />
          {/* address */}
          <Input
            label="Address"
            color={true}
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </>
      )}
      {/* submit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <Button
          label={'Delete Account'}
          Icon={RiDeleteBin5Line}
          onClick={handleDeleteAccount}
        />
        <Button
          label={'Save Changes'}
          Icon={HiOutlineCheckCircle}
          onClick={handleSaveChanges}
        />
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
