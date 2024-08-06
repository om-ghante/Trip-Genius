import React from 'react';
import video2 from '../../assets/video2.mp4';
import { 
    List,
    ListItem,
    Card,
    Checkbox,
    Typography 
} from '@material-tailwind/react';

const WelcomePage = () => {
  return (
    <>
      <div className='mx-auto mt-4 md:mt-6 lg:mt-0 mb-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex-1 md:w-1/2 p-1'>
                <video src={video2} autoPlay loop muted  className='w-full h-auto rounded-lg' />
            </div>
            <div className='flex-1 md:w-1/2 rounded-lg p-1 ml-0 md:ml-4 ml-9'>
                <Typography variant="h1" color="gray" className="mt-4 md:mt-2 lg:mt-0 mb-2 uppercase text-left text-1xl md:text-2xl lg:text-2xl font-bold tracking-wide leading-tight">
                    Welcome To Trip Genius.
                </Typography>
                <Typography variant="h3" color="blue-gray" className="mb-1 md:mb-2 lg:mb-4 uppercase text-left text-1xl md:text-2xl lg:text-5xl font-bold tracking-wide leading-tight">
                    Your Perfect Trip Starts with Gemini ✨
                </Typography>
                <Typography color="gray" variant="paragraph" className="mb-2 text-left text-sm md:text-base lg:text-lg">
                    Experience the ultimate in travel planning with Gemini. Our service is designed to help you enjoy your trip without any disturbances. Whether you're dreaming of a relaxing getaway or an adventurous escape, Gemini ensures your travel is seamless and stress-free.
                </Typography>
                <div className="w-full flex justify-start p-4">
                    <ul className="">
                        <li className="flex items-center space-x-2">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph'>AI driven recommendations.</Typography>
                        </li>
                        <li className="flex items-center space-x-2">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph'>Real time travel updates.</Typography>
                        </li>
                        <li className="flex items-center space-x-2 ">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph'>Budget tracking.</Typography>
                        </li>
                        <li className="flex items-center space-x-2 ">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph'>Route Planner.</Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
