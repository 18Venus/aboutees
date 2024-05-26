import React from 'react';
import LazyLoad from './lazyload';
import BannerCard from './bannercard'; // Ensure correct path

const BannerPrav = () => {
  return (
    <div className='px-4 lg:px-24 bg-yellow-100 flex items-center lg:h-3/4'>
      <div className='flex w-full flex-col lg:flex-row-reverse justify-between items-center gap-12 py-6 lg:py-20 lg:h-full'>
        {/* right side */}
        <div className="lg:w-1/3 md:w-4/5 order-2">
          <BannerCard/>
        </div>
        {/* left side*/}
        <div className='lg:w-2/3 md:w-full space-y-8 h-full order-1'>
          
            <h2 className='text-5xl font-bold leading-snug text-black'>
              ABOUT 
              <span className='text-yellow-500'> PRAVARDHAN</span>
            </h2>
          
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
          <LazyLoad>
            <p className='lg:w-6/7 '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam soluta earum quam tempore nisi dolorem deleniti, dignissimos, cum molestiae blanditiis necessitatibus accusamus quibusdam vel unde ipsa animi possimus non beatae.
            </p>
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}

export default BannerPrav;
