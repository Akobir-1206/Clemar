import React from 'react'
import foiz from '../assets/foiz.png'
import gift from '../assets/gift.png'
import { NavLink } from 'react-router-dom'
export default function News() {
  return (
    <div className=''>
        <div className="container ">
              <div className='ml-10'>
              <h1 className='text-4xl font-semibold mb-7 tracking-wide'>Bizning yangiliklar</h1>
              <div className=' flex gap-6'>
              <div className='bg-[#49c3f2] flex w-[90%] items-center rounded-2xl text-white  px-5 py-5 leading-5'>
                  <div>
                    <h1 className='text-2xl font-semibold w-96 mb-4'>Clemardan bo'lib to'lash rejasi</h1>
                    <p className='text-lg leading-6'>Siz professional uskunani sotib olishni xohlaysizmi, lekin to'liq miqdorni ajratishga tayyor emasmisiz? Bizda siz uchun yechim bor! Bizning qulay bo'lib to'lash tizimimiz haqida bilib oling, bu sizga kerakli uskunani hoziroq sotib olish va uni bosqichma-bosqich to'lash imkonini beradi. Barcha tafsilotlarni bilish va bugun buyurtma berish uchun “Toʻlov” boʻlimiga tashrif buyuring. Clemar bilan xaridingizni yanada arzonroq qiling!</p> 
                    <NavLink to="/skidka"><button className='bg-white text-[#49c3f2] text-xl px-8 py-3 mt-5 rounded-lg transition-transform duration-200 transform hover:scale-105'>Batafsil</button></NavLink>
                     
                     </div>
                 <div className=''>
                      <img className='' src={foiz} alt="" />
                  </div>
              </div>
              {/* 2 list  */}
              <div className='bg-[#072b3d] flex items-center rounded-2xl text-white w-2/3 px-5 py-5 '>
                 <div className=''>
                   <h1 className='text-2xl font-semibold w-96 mb-4 '>Clemardagi aktsiyalar</h1>
                   <p className='text-lg leading-6 w-96'>Bizning maxsus takliflarimiz va chegirmalarimiz haqida bilib oling! Clemarning barcha foydali imkoniyatlaridan xabardor bo'lish uchun Aktsiyalar bo'limiga tashrif buyuring. Xaridlarni tejang va qo'shimcha bonuslarga ega bo'ling. Sizni ijtimoiy tarmoqlarimizda bundanda kattaroq syurprizlar uchun kutamiz</p>
                   <NavLink to="/skidka2"><button className='bg-white text-[#49c3f2] text-xl px-8 py-3 mt-5 rounded-lg transition-transform duration-200 transform hover:scale-105'>Batafsil</button></NavLink>
                 </div>
                 <div>
                  <img className=''  src={gift} alt="" />
                 </div>
              </div>
              </div>
              </div>
        </div>
    </div>
  )
}
