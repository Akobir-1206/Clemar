import React from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
import skidka1 from '../assets/skidka1.png';
import { NavLink } from 'react-router-dom';

export default function Skidka() {
  return (
    <div>
      <Navigate />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide px-4 sm:px-12 md:px-20 lg:px-40 py-4 sm:py-6 font-semibold text-center">
          Clemar kompaniyasidan mahsulotlar uchun rassrochka
        </h1>
        <div className="flex justify-center">
          <img className="rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 my-5" src={skidka1} alt="Skidka1 Image" />
        </div>
        <p className="px-4 sm:px-8 md:px-16 lg:px-24 text-sm sm:text-base md:text-lg text-gray-500 text-justify">
          Professional uskunani sotib olishni xohlaysiz, lekin bir yo‘la to‘lashga tayyor emasmisiz? Biz siz uchun yechim topdik! Uzum platformasi orqali biz qulay bo‘lib-bo‘lib to‘lash imkoniyatini taklif qilamiz. Mavjud to‘lov imkoniyatlari: Skrubber quritgichlar, Professional changyutgichlar, Yuvish vositalari, Qog‘oz mahsulotlari. Biznesingiz uchun kerak bo'lgan barcha tozalash uskunalarini moliyaviy cheklovlarsiz xarid qiling. Bo‘lib-bo‘lib to‘lash rejasi bilan darhol kerakli uskunani qo‘lga kiriting va asta-sekin to‘lang. Uzum orqali to‘lashning afzalliklari: Moslashuvchan to‘lov shartlari, Oson onlayn ro‘yxatdan o‘tish, Keraksiz hujjatlarsiz, Tez tasdiqlash. Clemar kompaniyasi bilan biznesingizni rivojlantirish imkoniyatini qo‘ldan boy bermang! Buyurtmani hoziroq joylashtiring. Yangiliklar va aksiyalarni kuzatib boring. Ijtimoiy tarmoqlarimizga obuna bo‘ling yoki salonimizga tashrif buyuring!
        </p>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-center py-3">
          Boshqa yangiliklar
        </h1>
        <div className="flex justify-center">
          <NavLink to="/skidka3">
            <button className="bg-white text-[#49c3f2] text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3 mt-5 rounded-lg transition-transform duration-200 transform hover:scale-105">
              Batafsil
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}
