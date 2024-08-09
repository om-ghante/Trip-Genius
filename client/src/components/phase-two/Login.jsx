import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../phase-zero/utils';
import { useNavigate } from 'react-router-dom';
import { Input, Typography, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Login = ({ closePopup, openrPopup, openfPopup }) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const switchToForgotPass = () => {
        closePopup();
        openfPopup();
    };

    const switchToRegister = () => {
        closePopup();
        openrPopup();
    };

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const server_api = import.meta.env.VITE_SERVER_API;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = `${server_api}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
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
                <div className='absolute top-4 right-5 bottom-2 cursor-pointer' onClick={closePopup} variant='text'>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className='w-27 mt-20 mb-20'>
                    <Typography className='uppercase' variant='h3'>
                        Login
                    </Typography>
                </div>
                <div className='flex w-27 flex-col gap-4 mt-5 mb-40'>
                    <Input 
                        label='Email, Phone or username' 
                        type='email'
                        name='email'
                        value={loginInfo.email}
                        onChange={handleChange}
                    />
                    <Input 
                        label='Password'
                        type='password'
                        name='password'
                        value={loginInfo.password}
                        onChange={handleChange} 
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
            <ToastContainer />
        </div>
    );
};

export default Login;
