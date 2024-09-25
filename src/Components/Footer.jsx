import React from 'react';
import loc from '../assets/loc.svg';
import insta from '../assets/instaf.svg';
import facef from '../assets/facef.svg';
import youtube from '../assets/youtube.svg';
import telegf from '../assets/telegf.svg';
import map from '../assets/map.jpg';
import sms from '../assets/sms.svg';

export default function Footer() {
  return (
    <div className="bg-[#1b3a5b] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1 LIST */}
          <ul className="space-y-3">
            <li>
              <h1 className="text-xl leading-tight">Clemar - O'zbekistonda 25 dan ortiq jahon brendlarining distribyutori</h1>
            </li>
            <li>
              <p>Aloqa uchun</p>
            </li>
            <li className="text-lg font-semibold">
              <a href="tel:998935531206">+998 99 008 14 11</a>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px] h-[25px]" src={loc} alt="Location" />
              <p className="text-sm sm:text-base">
                <u>Bizning manzil</u>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px] h-[25px]" src={sms} alt="Email" />
              <p className="text-sm sm:text-base">
                <u>Info@clemar.uz</u>
              </p>
            </li>
            <li className="flex gap-3">
              <a href=""><img className="w-7 h-7" src={insta} alt="Instagram" /></a>
              <a href=""><img className="w-7 h-7" src={facef} alt="Facebook" /></a>
              <a href=""><img className="w-7 h-7" src={youtube} alt="YouTube" /></a>
              <a href=""><img className="w-7 h-7" src={telegf} alt="Telegram" /></a>
            </li>
          </ul>
          {/* 2 LIST */}
          <ul className="space-y-2">
            <li><h1 className="text-xl">Mahsulotlar</h1></li>
            <li><p>Qog'oz mahsulotlari</p></li>
            <li><p>Professional changyutgichlar</p></li>
            <li><p>Pol yuvish mashinalari</p></li>
            <li><p>Yuvish vositalari</p></li>
          </ul>
          {/* 3 LIST */}
          <ul className="space-y-2">
            <li><h1 className="text-xl">Ma'lumot</h1></li>
            <li><p>Biz haqimizda</p></li>
            <li><p>Kategoriyalar</p></li>
            <li><p>Nega bizni tanlashadi?</p></li>
            <li><p>F.A.Q.</p></li>
          </ul>
          {/* 4 LIST */}
          <ul className="space-y-4">
            <li><h1>Toshkent shahar, Bunyodkor shoh ko'chasi</h1></li>
            <li><h1>Xaritada ko’rish uchun shu yerga bosing</h1></li>
            <li>
              <a href=""><img className="w-48 h-24 rounded-md" src={map} alt="Map" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
