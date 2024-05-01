import React, { useState } from 'react';
import { Button, Input } from '../components/Form';
import { BiLogInCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { db, collection, addDoc } from '../lib/firebase-config'; // Import your Firebase configuration

function SignUp() {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add a new document with the form data to the "Users" collection
      const docRef = await addDoc(collection(db, "Users"), formData);
      console.log("Document written with ID: ", docRef.id);
      // Redirect to the login page after form submission
      navigate("/login");
    } catch (error) {
      console.error("Error adding document: ", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="w-full h-screen flex-colo bg-dry">
      <form className="w-2/5 p-8 rounded-2xl mx-auto bg-white flex-colo" onSubmit={handleSubmit}>
        <img
          src="/images/healthflow-logo.png"
          alt="healthflow"
          className="w-48 h-16 object-contain"
        />
        <div className="flex flex-col gap-4 w-full mb-6">
          <Input
            label="Name"
            type="text"
            color={true}
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
          />
          <Input
            label="Username"
            type="text"
            color={true}
            placeholder="Your username"
            value={formData.username}
            onChange={handleInputChange}
            name="username"
          />
          <Input
            label="Password"
            type="password"
            color={true}
            placeholder="*******"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />
          <Input
            label="Confirm Password"
            type="password"
            color={true}
            placeholder="*******"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />
          <Input
            label="Email"
            type="email"
            color={true}
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />
          <Input
            label="Phone Number"
            type="tel"
            color={true}
            placeholder="Your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            name="phoneNumber"
          />
        </div>
        <Button
          type="submit"
          label="Register"
          Icon={BiLogInCircle}
        />
      </form>
    </div>
  );
}

export default SignUp;