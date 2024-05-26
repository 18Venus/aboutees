import React from 'react';
import BannerCard from './bannercard'; // Ensure correct path
import LazyLoad from './lazyload';

const BannerAbout = () => {
  return (
   
    <div className='px-4 lg:px-24 bg-yellow-100 flex items-center h-3/4 lg:h-auto'>
      <div className='flex w-full flex-col lg:flex-row justify-between items-center gap-12 py-6 lg:py-10 lg:h-full'>
        {/* left side*/}
        <div className='lg:w-2/3 md:w-full space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            ABOUT 
            <span className='text-yellow-500'> EES</span>
          </h2>
          <LazyLoad>
          <p className='lg:w-6/7  '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam soluta earum quam tempore nisi dolorem deleniti, dignissimos, cum molestiae blanditiis necessitatibus accusamus quibusdam vel unde ipsa animi possimus non beatae.
          </p>
          </LazyLoad>
          <LazyLoad>
          <p className='lg:w-6/7 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam soluta earum quam tempore nisi dolorem deleniti, dignissimos, cum molestiae blanditiis necessitatibus accusamus quibusdam vel unde ipsa animi possimus non beatae.
          </p>
          </LazyLoad>
          <LazyLoad>
          <p className='lg:w-6/7 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam soluta earum quam tempore nisi dolorem deleniti, dignissimos, cum molestiae blanditiis necessitatibus accusamus quibusdam vel unde ipsa animi possimus non beatae.
          </p>
         </LazyLoad>
         
        </div>
        {/*right side */}
        <div className="lg:w-1/3 md:w-4/5">
          <BannerCard/>
        </div>
      </div>
    </div>
    
  )
}

export default BannerAbout;
