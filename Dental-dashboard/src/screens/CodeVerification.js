import React, { useState } from 'react';
import { Button, Input } from '../components/Form';
import { BiLogInCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { db, collection, query, where, getDocs } from '../lib/firebase-config'; // Import Firebase configuration

function CodeVerification() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Get email or username and password from the form fields
    const identifier = e.target.elements.identifier.value;
    const password = e.target.elements.password.value;

    try {
      // Query the database to find a user with the entered email or username
      const usersRef = collection(db, 'Users');
      const q = query(usersRef, where('username', '==', identifier));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // User not found
        setError('Invalid username or password');
        return;
      }

      // Assuming email or username is unique, directly access the first user document
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      // Compare entered password with stored password
      if (userData.password !== password) {
        // Incorrect password
        setError('Invalid username or password');
        return;
      }

      // Login successful, navigate to the desired page
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-dry">
    <form className="w-2/5 p-8 rounded-2xl mx-auto bg-white flex flex-col" onSubmit={handleLogin}>
      <img
        src={process.env.PUBLIC_URL + '/images/healthflow-logo.png'}
        alt="logo"
        className="w-32 h-16 object-cover mb-0 mx-auto"
        />

        <div className="flex flex-col gap-4 w-full mb-6">
            
            <p style={{ fontSize: '24px', textAlign: 'center' }}>
        <b>Code Verification </b>
        </p>
        <Input
            //label="Email"
            type="text"
            color={true}
            placeholder={'Enter verification code...'}
            name="vCode"
          />
          </div>
        {error && <p className="text-red-500">{error}</p>}

        <Button
          label="Verify"
          Icon={BiLogInCircle}
          type="submit"
          onClick={() => {
            window.alert('Reset Instructions have been successfully sent through your e-mail.');
            navigate('/forgotpassword');
          }}
        />
        <div className="mt-2"></div>
        
        <div className="text-center text-sm text-gray-400 mt-4"style={{ fontSize: '12px' }}>
          
        © 2024 HealthFlow. All rights reserved
      </div>
      </form>
    </div>
  );
}

export default CodeVerification;
