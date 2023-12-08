import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import "./First.css";
import Image2 from "../../images/First/7.jfif";



export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 1000 }}
      loop={true}
    >
      <SwiperSlide><img src={Image2} alt="" className="slider-img" /></SwiperSlide>
    </Swiper>
  );
};