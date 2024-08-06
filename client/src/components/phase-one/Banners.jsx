import React from 'react';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';

const Banners = () => {
  return (
    <div className='container mx-auto mt-4 md:mt-6 lg:mt-8 p-4'>
      <div className='flex flex-col space-y-4'>
        <img src={banner1} alt="Banner 1" className='w-full h-auto rounded-lg' />
        
        <img src={banner2} alt="Banner 2" className='w-full h-auto rounded-lg' />
        <img src={banner3} alt="Banner 3" className='w-full h-auto rounded-lg' />
        <img src={banner4} alt="Banner 4" className='w-full h-auto rounded-lg' />
      </div>
    </div>
  );
}

export default Banners;
