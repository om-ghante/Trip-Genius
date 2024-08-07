import React, { useState } from 'react'
import { 
    Typography,
    Input,
    Button,
    Radio
 } from '@material-tailwind/react'

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

const ForgotPass = ({ closePopup, openPopup }) => {
    const [ isinfoOpen, setInfoOpen ] = useState(true);
    const [ ischoiceOpen, setchoiceOpen ] = useState(false);
    const [ isotpOpen, setotpOpen ] = useState(false);
    const [ isresetpassOpen, setresetpassOpen ] = useState(false);
    const [ issuccessOpen, setsuccessOpen ] = useState(false);

    const switchpage = () => {
        closePopup();
        openPopup();
    };
    

    const moveNext = () => {
        if(isinfoOpen) {
            setInfoOpen(!isinfoOpen);
            setchoiceOpen(!ischoiceOpen);
        }
        else if(ischoiceOpen) {
            setchoiceOpen(!ischoiceOpen);
            setotpOpen(!isotpOpen);
        }
        else if(isotpOpen) {
            setotpOpen(!isotpOpen);
            setresetpassOpen(!isresetpassOpen);
        }
        else if(isresetpassOpen) {
            setresetpassOpen(!isresetpassOpen);
            setsuccessOpen(!issuccessOpen);
        }
        
    };

    const moveBack = () => {
        if(ischoiceOpen) {
            setchoiceOpen(!ischoiceOpen);
            setInfoOpen(!isinfoOpen);
        }
        else if(isotpOpen) {
            setotpOpen(!isotpOpen);
            setchoiceOpen(!ischoiceOpen);
        }
        else if(isresetpassOpen) {
            setresetpassOpen(!isresetpassOpen);
            setotpOpen(!isotpOpen);
        }
    };
    
    const formatEmail = (email) => {
        const parts = email.split('@');
        return `${parts[0][0]}******${parts[0].slice(-1)}@${parts[1]}`;
    };
    
    const formatPhone = (phone) => {
        return `+91 ******${phone.slice(-4)}`;
    };
    

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
            <div className='absolute top-4 right-5 bottom-2 cursor-pointer' onClick={closePopup} variant='text'>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            {isinfoOpen && (
                <div>
                    <div className='flex w-27 flex-col item-end gap-4 mt-20 mb-20'>
                        <Typography className='font-bold'>
                            Enter Ur Details!
                        </Typography>
                        <Input label='Usename, Email or Phone' name='fpinfo' />
                        
                        <div>
                            <Button className='mr-2' onClick={closePopup}>Close</Button>
                            <Button className='ml-5' onClick={moveNext}>Continue</Button>
                        </div>
                    </div>
                </div>
            )}
            {ischoiceOpen && (
                <div className='flex w-27 flex-col item-end gap-4 mt-20 mb-20'>
                    <Typography className='font-bold'>
                        Choose The Method we'll send You the OTP (One Time Password)
                    </Typography>

                    <Radio name="type" label={`Email (${formatEmail('example@gmail.com')})`} />
                    <Radio name="type" label={`Phone (${formatPhone('9876543210')})`} defaultChecked />
                    
                    <div>
                        <Button className='mr-2' onClick={moveBack}>Back</Button>
                        <Button className='ml-5' onClick={moveNext}>Continue</Button>
                    </div>
                </div>
            )}
            {isotpOpen && (
                <div className='flex w-27 flex-col item-end gap-4 mt-20 mb-20'>
                    <Typography className='font-bold'>
                        Enter Ur OTP (One Time Password)
                    </Typography>
                    <Input label='OTP' name='fotp' />
                    
                    <div>
                        <Button className='mr-2' onClick={moveBack}>Back</Button>
                        <Button className='ml-5' onClick={moveNext}>Continue</Button>
                    </div>
                </div>
            )}
            {isresetpassOpen && (
                <div className='flex w-27 flex-col item-end gap-4 mt-20 mb-20'> 
                    <Typography className='font-bold'>
                        Reset Your Password
                    </Typography>
                    <Input label='Create Password' name='fpcreatedpass' />
                    <Input label='Re-Enter Password' name='fpfinalpass'/>
                    
                    <div>
                        <Button className='mr-2' onClick={moveBack}>Back</Button>
                        <Button className='ml-5' onClick={moveNext}>Continue</Button>
                    </div>
                </div>
            )}
            {issuccessOpen && (
                <div className='flex w-27 flex-col item-end gap-4 mt-20 mb-20'> 
                    <Typography className='font-bold'>
                        Successfully Reset The Password! Return To Login
                    </Typography>
                    
                    <div>
                        <Button onClick={switchpage}>Return To Login</Button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ForgotPass
