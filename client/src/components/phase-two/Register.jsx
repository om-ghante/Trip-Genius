import React, { useState } from 'react';
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
    import { useNavigate } from 'react-router-dom';
    import { useUser } from '../context/useContext';
    import axios from 'axios';

const Register = ({ closePopup, openPopup }) => {
    const { setUser } = useUser();
    const [formData, setFormData] = useState({
        userfullname: '',
        useremail: '',
        userphone: '',
        usercreatedpass: '',
        userfinalpass: '',
    });
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const switchpage = () => {
        closePopup();
        openPopup();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
    
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.useremail)) {
            newErrors.useremail = 'Invalid email format';
        }
    
        if (formData.usercreatedpass !== formData.userfinalpass) {
            newErrors.userfinalpass = 'Passwords do not match';
        }
    
        const apiurl = import.meta.env.VITE_SERVER_API;
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(
                    `${apiurl}/auth/register`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                const { user, token } = response.data; 
                console.log('User Data:', user);
                setUser(user);
                console.log('Response:', response);
                localStorage.setItem('jwtToken', token); 
                setError('Registration Successful!');
                navigate('/sample'); 
            } catch (error) {
                console.error('Error:', error);
                setError('Registration Failed');
            }
        }
    };

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
                    <Input label='Full Name' name='userfullname' value={formData.userfullname} onChange={handleChange} />
                    {errors.userfullname && <Typography variant='small' className='text-red-500'>{errors.userfullname}</Typography>}
                    <Input label='Email' name='useremail' value={formData.useremail} onChange={handleChange}/>
                    {errors.useremail && <Typography variant='small' className='text-red-500'>{errors.useremail}</Typography>}
                    <Input label='Phone' name='userphone' value={formData.userphone} onChange={handleChange}/>
                    {errors.userphone && <Typography variant='small' className='text-red-500'>{errors.userphone}</Typography>}
                    <Input label='Create Password' type='password' name='usercreatedpass' value={formData.usercreatedpass} onChange={handleChange}/>
                    {errors.usercreatedpass && <Typography variant='small' className='text-red-500'>{errors.usercreatedpass}</Typography>}
                    <Input label='Re-Enter Password' type='password' name='userfinalpass' value={formData.userfinalpass} onChange={handleChange}/>
                    {errors.userfinalpass && <Typography variant='small' className='text-red-500'>{errors.userfinalpass}</Typography>}

                    <Button className='mt-4' onClick={handleSubmit}>Register</Button>

                    <Typography variant='small' className='mt-4 flex justify-center'>
                        <p>Already have an account?</p>
                        <Typography variant='small' className='ml-1 font-bold cursor-pointer' onClick={switchpage}>Log In</Typography>
                    </Typography>
                    {error && <Typography variant='small' className='text-red-500 text-center mt-4'>{error}</Typography>}
                </div>
            </div>
        </div>
    );
};

export default Register;
