import React from 'react';
import Navigate from './Navigate';
import Footer from './Footer';
import about from '../assets/about.png';

export default function About() {
  return (
    <div>
      <Navigate />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold pt-5 pb-5 pl-4 lg:pl-7 text-center lg:text-left">
          Biz haqimizda
        </h1>
        <img className="w-full lg:w-3/4 h-auto pl-4 lg:pl-7 " src={about} alt="About us" />
        <p className="px-4 lg:px-9 text-base sm:text-lg lg:text-xl text-gray-500 font-serif pt-3">
          Professional tozalash sohasidagi ishonchli hamkoringiz - Clemarning yangi veb-saytiga xush kelibsiz! 
          Ilgari 10 yildan ortiq tajribaga ega toza bozor sifatida tanilgan, biz sizni yangilangan va qayta 
          ishlangan identifikatorimiz - Clemar bilan tanishtirishdan mamnunmiz. Biz bilan siz nafaqat mahsulotlarga, 
          balki har bir detalda kafolatlangan sifat va professionallikka ega bo'lasiz. Clemar O'zbekistonda tozalash 
          uskunalariga ixtisoslashgan 25 dan ortiq jahon brendlarining yetakchi distribyutori hisoblanadi. Bizning 
          assortimentimiz quruq va nam tozalash uchun professional changyutgichlar, shuningdek, yuqori sifatli qog'oz, 
          salfetkalar va qog'oz sochiqlarni o'z ichiga oladi. Lekin, albatta, bizning asosiy e'tiborimiz skrubber 
          quritgichlardir. Clemar-da siz butun dunyo bo'ylab mashhur brendlarning simsiz va shnurli quritgichlarning 
          keng tanlovini topasiz. Bizning tajribamiz va professionalligimiz sizga har qanday muhitda tozalikni saqlash 
          uchun faqat eng yaxshi echimlarni taklif qilish imkonini beradi. Biz allaqachon taniqli kompaniyalar bilan 
          hamkorlik qilayotganimizdan faxrlanamiz va O‘zbekistondagi obro‘-e’tiborimiz eng yaxshilar qatoridagi o‘rnimizni 
          tasdiqlaydi. Clemar shunchaki yetkazib beruvchi emas, u tozalik va tartib uchun kurashda sizning ishonchli 
          hamkoringizdir. Bizga qo'shiling, Clemar-ni tanlang va biznesingizni tozalash va gigienaning eng yuqori standarti 
          bilan ta'minlang.
        </p>
      </div>
      <Footer />
    </div>
  );
}
