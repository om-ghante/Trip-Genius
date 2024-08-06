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
      title: 'Another Check',
      description: 'This card has different content but is similar in style.',
      imageUrl: 'https://via.placeholder.com/400x300'  // Add image URL if needed
    },
    {
      title: 'Yet Another Check',
      description: 'Here is another card with unique content for demonstration.',
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
    <div className='mx-auto mt-4 md:mt-6 lg:mt-0 mb-8'>
      <div className='text-center'>
        <div className='mb-8'>
          <Typography variant="h1" color="blue-gray" className="mb-2 md:mb-2 lg:mb-1 uppercase text-left text-sm md:text-2xl lg:text-3xl font-bold tracking-wide leading-tight text-center">
            How It Works!?
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2 md:mb-2 lg:mb-1 md:mb-2 lg:mb-4 uppercase text-xl md:text-2xl lg:text-3xl font-bold tracking-wide leading-tight">
            It's more than easy to get involved
          </Typography>
          <Typography color="gray" variant="paragraph" className="mb-2 md:mb-2 lg:mb-6 text-left text-sm md:text-base lg:text-lg text-center">
            It takes just 4 simple steps to join TripG and organize your trip all from your phone, in just a few minutes.
          </Typography>
        </div>
        <div className='relative flex items-center justify-center'>
          <button 
            className='absolute left-0 ml-4 z-20 bg-white p-2 rounded-full shadow-md'
            onClick={handlePrev}
          >
            <ArrowLeft />
          </button>
          <div className="relative w-full h-64 overflow-hidden">
            <div className="relative flex">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  className={`transition-transform duration-500 ease-in-out absolute top-1/2 transform -translate-y-1/2 mt-8 ${
                    index === currentIndex ? 'z-10 scale-100' : 'z-0 scale-90 blur-sm'
                  }`}
                  style={{ left: `${(index - currentIndex) * 100}%` }}
                >
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <button 
            className='absolute right-0 mr-4 z-20 bg-white p-2 rounded-full shadow-md'
            onClick={handleNext}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
