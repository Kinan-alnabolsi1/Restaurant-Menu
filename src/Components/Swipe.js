import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Updated import
import 'swiper/css';
import 'swiper/css/autoplay';
import image1 from '../assets/pexels-photo-2619970.jpeg';
import image2 from '../assets/pexels-photo-1640777.jpeg'; 
import image3 from '../assets/pexels-photo-2983099.jpeg'; 
import image4 from '../assets/pexels-photo-4109998.jpeg'; 

const Swipe = () => {
  return (
    <div className="">
    <div className=" flex justify-center items-center ">
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
        <div className="w-screen flex justify-center items-center"> 
    <div style={{
        backgroundImage: `url(${image1})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '95%',
        height: '100%', 
        minHeight: '300px',
        borderRadius:"10px"
    }}></div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" w-screen flex justify-center items-center"> 
    <div style={{
        backgroundImage: `url(${image2})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '95%',
        height: '100%', 
        minHeight: '300px',
        borderRadius:"10px"
    }}></div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" w-screen flex justify-center items-center"> 
    <div style={{
        backgroundImage: `url(${image3})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '95%',
        height: '100%', 
        minHeight: '300px',
        borderRadius:"10px"
    }}></div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-screen flex justify-center items-center">
        <div style={{
        backgroundImage: `url(${image4})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '95%',
        height: '100%', 
        minHeight: '300px',
        borderRadius:"10px"
    }}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Swipe;