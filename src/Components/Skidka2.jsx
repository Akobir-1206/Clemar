import React from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
import skidka2 from '../assets/skidka2.png';

export default function Skidka2() {
  return (
    <div>
      <Navigate />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold p-4 sm:p-6 md:p-8 ml-2 sm:ml-12 md:ml-24">
          Clemardan maxsus aksiyalar
        </h1>
        <div className="flex justify-center">
          <img className="rounded-2xl w-full sm:w-3/4 md:w-2/3 my-5" src={skidka2} alt="Skidka Image" />
        </div>
        <p className="px-4 sm:px-12 md:px-24 text-sm sm:text-base md:text-lg text-gray-500">
          Maxsus Chegirma Faqat Siz Uchun! "Siz izlayotgan barcha texnika mahsulotlari endi maxsus chegirmalarda! Bugun xarid qiling va katta tejash imkoniyatini qo‘ldan boy bermang. Cheklangan miqdordagi mahsulotlar, shoshiling! 🛒💥 Tez orada yetkazib berish va moslashuvchan to‘lov shartlari bilan, sizning qoniqishingiz biz uchun muhim!
        </p>
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide pl-4 sm:pl-12 md:pl-24 py-3">
          Boshqa yangiliklar
        </h1>
      </div>
      <Footer />
    </div>
  );
}
