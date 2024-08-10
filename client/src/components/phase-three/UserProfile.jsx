import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Input } from '@material-tailwind/react';
import { handleError, handleSuccess } from '../phase-zero/utils';

const UserProfile = () => {
  const [isProfileOpen, setProfileOpen] = useState(true);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const type = localStorage.getItem('userCredentials');
  const info = JSON.parse(type);
  const navigate = useNavigate();

  useEffect(() => {
    setUser();
  }, []);

  const setUser = async () => {
    if (localStorage.getItem('loggedInUser') || localStorage.getItem('user-info')) {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_API}/auth/user/data`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        const data = await response.json();
        setLoggedInUser(data.user);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    }
  };

  const profiletoggle = () => {
    setProfileOpen(!isProfileOpen);
    setEditProfileOpen(!isEditProfileOpen);
  };

  const handleLogout = () => { 
        localStorage.removeItem('userCredentials');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/');
        }, 1000) 
  };

  const handleSubmitndUpdate = async () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_API}/auth/user/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: info.userCredentials.email, password: newPassword })
      });
      const result = await response.json();
      
      if (result.success) {
        alert('Profile updated successfully!');
        setProfileOpen(true);
        setEditProfileOpen(false);
        setUser();
      } else {
        alert('Failed to update profile!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className='mx-auto mt-4 md:mt-6 lg:mt-0 mb-8 p-2 md:p-4 lg:p-8 mt-10 mb-10'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6'>
          <div className='flex flex-col items-center'>
            {isProfileOpen && (
              <div>
                <Avatar src={info.userCredentials.image || ''} alt='Profile' className='w-24 h-24 rounded-full mb-4' />
                <Input className='text-xl font-semibold mb-2' value={info.userCredentials.name || ''} readOnly />
                <Input className='text-gray-600 mb-2' value={info.userCredentials.email || ''} readOnly />
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  value={info.userCredentials.password || '********'} 
                  placeholder='Phone Number' 
                  className='w-full p-2 border rounded mb-4'
                  readOnly 
                />
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  value={info.userCredentials.password || '********'} 
                  placeholder='Password' 
                  className='w-full p-2 border rounded mb-4'
                  readOnly 
                />
                <Button 
                  onClick={handleLogout} 
                  className='bg-red-500 text-white py-2 px-4 rounded mt-4'
                >
                  Log Out
                </Button>
                <Button 
                  onClick={profiletoggle}
                  className='bg-blue-500 text-white py-2 px-4 rounded mt-4'
                >
                  Edit Profile
                </Button>
              </div>
            )}
            {isEditProfileOpen && (
              <div>
                <Button onClick={() => {/* Logic to upload a new profile picture */}}>
                  <Avatar src={info.userCredentials.image || ''} alt='Profile' className='w-24 h-24 rounded-full mb-4' />
                </Button>
                <Input className='text-xl font-semibold mb-2' value={info.userCredentials.name || ''} readOnly />
                <Input className='text-gray-600 mb-2' value={info.userCredentials.email || ''} readOnly />
                <Input 
                  type='text' 
                  value={info.userCredentials.phone || ''} 
                  placeholder='Phone Number' 
                  className='w-full p-2 border rounded mb-4'
                  onChange={(e) => setLoggedInUser({ ...info.userCredentials, phone: e.target.value })}
                />
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  value={newPassword} 
                  placeholder='New Password' 
                  className='w-full p-2 border rounded mb-4'
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  value={confirmPassword} 
                  placeholder='Confirm Password' 
                  className='w-full p-2 border rounded mb-4'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button 
                  onClick={handleSubmitndUpdate} 
                  className='bg-green-500 text-white py-2 px-4 rounded mt-4'
                >
                  Save Changes
                </Button>
                <Button 
                  onClick={profiletoggle}
                  className='bg-gray-500 text-white py-2 px-4 rounded mt-4'
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
