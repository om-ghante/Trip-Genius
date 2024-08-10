import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import { handleError, handleSuccess } from '../phase-zero/utils';
import { 
    Input,
    Typography,
    Button
} from '@material-tailwind/react';
import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';
import { 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

const Register = ({ closePopup, openPopup }) => {
    const server_api = import.meta.env.VITE_SERVER_API;
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        phone: '',
        pass: '',
        password: ''
    })

    const switchpage = () => {
        closePopup();
        openPopup();
    };

    const navigate = useNavigate();

    const responseGoogle = async (authResult) => {
        try {
            if (authResult.code) {
                
                const result = await googleAuth(authResult.code); 
                const { userCredentialsResult } = result.data;
                localStorage.setItem('userCredentials', JSON.stringify(userCredentialsResult));
                handleSuccess('Welcome To Trip Genius!');
                setTimeout(() => {
                    navigate('/dashboard/*')
                }, 2000)

            }
        } catch (err) {
            console.error('Error while requesting Google code', err);
        }
    };
  
    const googleAuth = async (code) => {
      try {
        const url = `${server_api}/auth/google`;
        const response = await axios.get(url, { params: { code } }); 
        return response;
      } catch (error) {
        console.error('Error during server-side Google authentication', error);
        throw error;
      }
    };
    
  
  
    const googlelogin = useGoogleLogin({
      onSuccess: responseGoogle,
      onError: responseGoogle,
      flow: 'auth-code',
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, pass, password } = signupInfo;
        if (!name || !email || !phone || !password) {
            return handleError('name, email and password are required')
        }
        if (pass !== password) {
            return handleError('Passwords do not match');
        }        
        try {
            const url = `${server_api}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, password })
            });
            const result = await response.json();
            const { success, message, userCredentialsResult } = result;
            if (success) {
                handleSuccess(message);

                localStorage.setItem('userCredentials', JSON.stringify(userCredentialsResult));
                setTimeout(() => {
                    navigate('/dashboard/*')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                <div className='absolute top-4 right-5 bottom-2 cursor-pointer' onClick={closePopup}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className='w-27 mt-20 mb-20'>
                    <Typography className='uppercase' variant='h3'>
                        Register
                    </Typography>
                </div>
                <div className='flex w-27 flex-col item-end gap-4 mt-5 mb-40'>
                    <Input label='Full Name' name='name' value={signupInfo.name} onChange={handleChange} />

                    <Input label='Email' name='email' value={signupInfo.email} onChange={handleChange}/>

                    <Input label='Phone' name='phone' value={signupInfo.phone} onChange={handleChange}/>

                    <Input label='Create Password' type='password' name='pass'value={signupInfo.pass} onChange={handleChange}/> {/*value={signupInfo.createdpass}*/}

                    <Input label='Re-Enter Password' type='password' name='password' value={signupInfo.password} onChange={handleChange}/>

                    <Button className='mt-4' onClick={handleSubmit}>Register</Button>
                    <Button onClick={googlelogin}>Login With Google</Button>
                    <Typography variant='small' className='mt-4 flex justify-center'>
                        <p>Already have an account?</p>
                        <Typography variant='small' className='ml-1 font-bold cursor-pointer' onClick={switchpage}>Log In</Typography>
                    </Typography>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
