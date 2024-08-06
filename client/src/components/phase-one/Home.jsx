import React from 'react';
import video1 from '../../assets/video1.mp4';
import { 
    Button,
    Typography 
} from '@material-tailwind/react';

const Home = () => {
  return (
    <>
      <div className='mx-auto mt-4 md:mt-6 lg:mt-0 mb-8 p-2 md:p-4 lg:p-8 mt-10 mb-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex-1 md:w-1/2 rounded-lg p-1 ml-0 md:ml-0 lg:ml-9 '>
            <Typography variant="h1" color="blue-gray" className="mb-1 uppercase text-left text-4xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight">
                Time to Explore, Travel, and Enjoy!
            </Typography>
            <Typography variant="h3" color="blue-gray" className="mb-1 md:mb-2 lg:mb-4 uppercase text-left text-2xl md:text-4xl lg:text-3xl font-lg tracking-wide leading-tight">
                Organize Your Trip with Gemini ✨
            </Typography>
            <Typography variant="h1" color="blue-gray" className="mb-0 uppercase text-left text-2xl md:text-2xl lg:text-4xl font-bold  tracking-wide leading-tight">
                No Hefty Cost.
            </Typography>
            <Typography variant="h1" color="blue-gray" className="mb-1 md:mb-2 lg:mb-4 uppercase text-left text-2xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-tight">
                No Stress.
            </Typography>
            <Typography color="gray" variant="paragraph" className="mb-6 text-left text-lg md:text-base lg:text-lg">
                Let Gemini handle the details while you focus on making unforgettable memories. Start your journey today!
            </Typography>
            <a href="#" className="mt-4 flex justify-start">
                <Button size='lg'>
                    Get Started!
                </Button>
            </a>
        </div>
          <div className='flex-1 md:w-1/2 mt-8 md:mt-6 lg:mt-0 md:p-1 lg:p-1'>
            <video src={video1} autoPlay loop muted  className='w-full h-auto rounded-lg' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
