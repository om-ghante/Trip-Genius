import React, { useState } from 'react';
import { 
    Typography, 
    Card,
    Button,
    CardBody,
    CardFooter,
} from '@material-tailwind/react';

// SVG Arrow Icons
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: 'UI/UX Review Check',
      description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      imageUrl: 'https://via.placeholder.com/400x300'  // Add image URL if needed
    },
    {
      title: 'UI/UX Review Check',
      description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      imageUrl: 'https://via.placeholder.com/400x300'  // Add image URL if needed
    },
    {
      title: 'UI/UX Review Check',
      description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      imageUrl: 'https://via.placeholder.com/400x300'  // Add image URL if needed
    },
    {
      title: 'UI/UX Review Check',
      description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      imageUrl: 'https://via.placeholder.com/400x300'  // Add image URL if needed
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className='mx-auto mt-4 md:mt-6 lg:mt-0 mb-10 mt-10'>
      <div className='text-center'>
        <div className='mb-8'>
          <Typography variant="h1" color="blue-gray" className="mb-2 md:mb-2 lg:mb-1 uppercase text-left text-2xl md:text-2xl lg:text-2xl font-bold tracking-wide leading-tight text-center">
            How It Works!?
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2 md:mb-2 lg:mb-1 md:mb-2 lg:mb-4 uppercase text-4xl md:text-4xl lg:text-3xl font-bold tracking-wide leading-tight">
            It's more than easy to get involved
          </Typography>
          <Typography color="gray" variant="paragraph" className="mb-2 md:mb-2 lg:mb-6 text-left text-lg md:text-lg lg:text-lg text-center">
            It takes just 4 simple steps to join TripG and organize your trip all from your phone, in just a few minutes.
          </Typography>
        </div>
        <div className='relative flex items-center justify-center'>
          <button 
            className='absolute left-0 ml-2 sm:ml-4 md:ml-6 lg:ml-8 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md'
            onClick={handlePrev}
          >
            <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </button>
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <div className="relative flex justify-center w-full h-full p-8 md:p-4">
            {cards.map((card, index) => (
              <Card
                key={index}
                className={`transition-transform duration-500 ease-in-out absolute top-1/2 left-0 md:left-1/2.8 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 mt-8 w-full md:w-100 lg:w-200 ${
                  index === currentIndex ? 'z-10 scale-100' : 'z-0 scale-90 blur-sm'
                }`}
                style={{ transform: `translateX(${(index - currentIndex) * 100}%) translateY(-50%)` }}
              >
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    {card.title}
                  </Typography>
                  <Typography className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {card.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button className="text-xs sm:text-sm md:text-base lg:text-lg">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <button 
            className='absolute right-0 mr-2 sm:mr-4 md:mr-6 lg:mr-8 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md'
            onClick={handleNext}
          >
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </button>

        </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
