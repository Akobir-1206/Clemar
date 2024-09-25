import React from 'react';
import swipe1 from '../assets/swipe1.png';
import swipe2 from '../assets/swipe2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SwiperCom() {
  return (
    <div className='p-7 mt-5'>
      <div className="container mx-auto py-4 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Slaydlar */}
          <SwiperSlide>
            <img 
              src={swipe1} 
              alt="Swipe 1" 
              className="w-[80%] mx-auto" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src={swipe2} 
              alt="Swipe 2" 
              className="w-[80%] mx-auto" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src={swipe1} 
              alt="Swipe 1" 
              className="w-[80%] mx-auto" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src={swipe2} 
              alt="Swipe 2" 
              className="w-[80%]  mx-auto" 
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
