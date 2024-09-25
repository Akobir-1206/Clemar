import React from 'react';
import airways from '../assets/airways.png';
import akfa from '../assets/akfa.png';
import artel from '../assets/artel.png';
import byd from '../assets/byd.png';
import chorvoq from '../assets/chorvoq.png';
import city from '../assets/city.png';
import citymall from '../assets/cocacola.png';
import ecobozor from '../assets/ecobozor.png';
import imzo from '../assets/imzo.png';
import itpark from '../assets/itpark.png';
import kia from '../assets/kia.png';
import metro from '../assets/metro.png';
import pepsi from '../assets/pepsi.png';
import sag from '../assets/sag.png';
import uzauto from '../assets/uzauto.png';
import cocacola from '../assets/cocacola.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Sponsor() {
  return (
    <div className="container mx-auto py-8"> 
         <h1 className='text-4xl font-semibold mb-6 ml-12 tracking-wide'>Bizga ishonganlar</h1>
      <Swiper
        spaceBetween={5}  
        centeredSlides={false}
        slidesPerView={4}
        breakpoints={{
            
          640: {
            slidesPerView: 2, // Kichik ekranlar uchun 2 slayd
            spaceBetween: 10, // Kichik ekranlar uchun bo'shliqni biroz kattaroq qildik
          },
          768: {
            slidesPerView: 3, // O'rta ekranlar uchun 3 slayd
            spaceBetween: 8,  // O'rta ekranlar uchun bo'shliq
          },
          1024: {
            slidesPerView: 4, // Katta ekranlar uchun 4 slayd
            spaceBetween: 5,  // Katta ekranlar uchun bo'shliq minimal
          },
        }} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {/* Slaydlar */}
        <SwiperSlide>
          <img 
            src={akfa} 
            alt="Swipe 1" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={airways} 
            alt="Swipe 2" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={artel} 
            alt="Swipe 3" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={byd} 
            alt="Swipe 4" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={chorvoq} 
            alt="Swipe 5" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={city} 
            alt="Swipe 6" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={imzo} 
            alt="Swipe 7" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={sag} 
            alt="Swipe 8" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={metro} 
            alt="Swipe 9" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={citymall} 
            alt="Swipe 10" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={ecobozor} 
            alt="Swipe 11" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={kia} 
            alt="Swipe 12" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={itpark} 
            alt="Swipe 13" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={pepsi} 
            alt="Swipe 14" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={uzauto} 
            alt="Swipe 15" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={cocacola} 
            alt="Swipe 16" 
            className="w-64 h-36 object-contain bg-[#49c3f2] rounded-3xl p-5 mx-auto" 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
