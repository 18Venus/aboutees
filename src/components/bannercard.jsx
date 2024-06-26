import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './bannercard.css';
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="banner-slide"></SwiperSlide>
        <SwiperSlide className="banner-slide"></SwiperSlide>
        <SwiperSlide className="banner-slide"></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default BannerCard;
