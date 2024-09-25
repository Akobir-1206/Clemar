import React from 'react';
import loc from '../assets/loc.svg';
import insta from '../assets/insta.svg';
import tg from '../assets/tg.svg';

export default function Header() {
    return (
        <div className='bg-[#49c3f2]'>
            <div className='container mx-auto'>
                <ul className='flex flex-wrap justify-between items-center'>
                    {/* Location qismi */}
                    <li className='flex gap-2 text-white items-center sm:justify-center'>
                        <img className='w-[20px] h-[25px]' src={loc} alt="Location" />
                        <p className='text-gray-400 text-sm sm:text-base'>Manzil:</p>
                        <a className='text-white text-sm sm:text-base' href="https://yandex.uz/navi/10335/tashkent/?ll=69.220719%2C41.290161&panorama%5Bdirection%5D=227.914276%2C-0.865454&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=69.220719%2C41.290161&panorama%5Bspan%5D=124.226694%2C60.000000&z=10">Toshkent</a>
                    </li>

                    {/* Boshqa elementlar */}
                    <li className='flex flex-wrap text-white gap-3 sm:gap-5 items-center'>
                        {/* 855px dan kichik ekranlarda Instagram va Telegram yashiriladi */}
                        <div className='hidden lg:flex gap-3 items-center'>
                            <img className='w-[20px] h-[20px]' src={insta} alt="Instagram" />
                            <p className='text-sm sm:text-base'><a href="https://www.instagram.com/_akob1r_/">Instagram</a></p>
                            <img className='w-[21px] h-[20px]' src={tg} alt="Telegram" />
                            <p className='text-sm sm:text-base'><a href="https://web.telegram.org/k/">Telegram</a></p>
                        </div>

                        {/* Telefon raqami barcha ekranlarda ko'rinadi */}
                        <a className='text-sm sm:text-lg font-bold' href="tel:998935531206">+998 55 500 14 11</a>

                        {/* Til tanlash select */}
                        <select className='bg-[#49c3f2] text-sm sm:text-base' name="UZ" id="">
                            <option value="">UZ</option>
                            <option value="">RU</option>
                            <option value="">EN</option>
                        </select>

                        {/* 760px dan kichik ekranlarda button yashiriladi */}
                        <button className='hidden md:inline-block lg:inline-block rounded-lg p-2 bg-white text-sm sm:text-xl font-medium text-[#49c3f2]'>
                            Bonusni olish
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
