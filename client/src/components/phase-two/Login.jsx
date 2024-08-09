import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/useContext';
import { Input, Typography, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Login = ({ closePopup, openrPopup, openfPopup }) => {
    const { setUser } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const switchToForgotPass = () => {
        closePopup();
        openfPopup();
    };

    const switchToRegister = () => {
        closePopup();
        openrPopup();
    };

    const apiurl = import.meta.env.VITE_SERVER_API;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${apiurl}/auth/login`, {
                useremail: email,
                usercreatedpass: password,
            });            
            
            if (response.data.success) {
                setUser(response.data.user);
                navigate('/sample');
            } else {
                setError(response.data.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login.');
        }
    };    

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                <div className='absolute top-4 right-5 bottom-2 cursor-pointer' onClick={closePopup} variant='text'>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className='w-27 mt-20 mb-20'>
                    <Typography className='uppercase' variant='h3'>
                        Login
                    </Typography>
                    {error && <Typography color="red" className="mt-4 text-center font-normal">{error}</Typography>}
                </div>
                <div className='flex w-27 flex-col gap-4 mt-5 mb-40'>
                    <Input 
                        label='Email, Phone or username' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Input 
                        label='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none"
                            />
                            <Typography variant="small" className="ml-2">
                                Remember Me
                            </Typography>
                        </div>
                        <Typography variant="small" className="ml-1 font-bold cursor-pointer" onClick={switchToForgotPass}>
                            Forgot Password?
                        </Typography>
                    </div>

                    <Button onClick={handleSubmit}>Log In</Button>

                    <Typography variant='small' className='mt-4 flex justify-center'>
                        Don't have an account?
                        <Typography variant='small' className='ml-1 font-bold cursor-pointer' onClick={switchToRegister}>Register</Typography>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Login;
