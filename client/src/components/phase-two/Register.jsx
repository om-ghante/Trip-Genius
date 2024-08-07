import React, { useState } from 'react'
import { 
    Input,
    Typography,
    Button
 } from '@material-tailwind/react'

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

const Register = ({ closePopup, openPopup }) => {
    const [ error, setError] = useState('');
    const [ frmData, setfrmData] = useState({
        uerfullname: '',
        useremail: '',
        userphone: '',
        usercreatedpass: '',
        userfinalpass: '',
    });

    const switchpage = () => {
        closePopup();
        openPopup();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setfrmData({
            ...frmData,
            [name]: value
        });
    };

    const output = frmData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(output);
        setError();
    };
    
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
            <div className='absolute top-4 right-5 bottom-2 cursor-pointer' onClick={closePopup} variant='text'>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className='w-27 mt-20 mb-20'>
                <Typography className='uppercase' variant='h3'>
                    Register
                </Typography>
            </div>
            <div className='flex w-27 flex-col item-end gap-4 mt-5 mb-40'>
                <Input label='Full Name' name='uerfullname' value={frmData.uerfullname} onChange={handleChange} />
                <Input label='Email' name='useremail' value={frmData.useremail} onChange={handleChange}/>
                <Input label='Phone' name='userphone' value={frmData.userphone} onChange={handleChange}/>
                <Input label='Create Password' name='usercreatedpass' value={frmData.usercreatedpass} onChange={handleChange}/>
                <Input label='Re-Enter Password' name='userfinalpass' value={frmData.userfinalpass} onChange={handleChange}/>

                <Button className='mt-4' onClick={handleSubmit}>Register</Button>

                <Typography variant='small' className='mt-4 flex justify-center'>
                    Already have an account?
                    <Typography variant='small' className='ml-1 font-bold cursor-pointer' onClick={switchpage}>Log In</Typography>
                </Typography>
            </div>
        </div>
    </div>
  )
}

export default Register
