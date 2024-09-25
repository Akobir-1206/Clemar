import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi'; // Search icon qo'shish
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import like from '../assets/like.png'; // Like ikonkasi import qilingan

export default function Navigate() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className='bg-[#f8f8f8] '>
      <div className="container mx-auto py-4">
        <div className='flex items-center  gap-8'>

          {/* Burger Menu */}
          <button
            onClick={toggleMenu}
            className='flex items-center gap-1 px-3 py-2 text-xl rounded-lg text-white bg-[#49c3f2]'
          >
            {open ? <MdClose className='text-white h-6 w-8 ' /> : <GiHamburgerMenu className='text-white w-8 h-6' />}
            <p className='text-2xl font-normal'>Katalog</p>
          </button>

          {/* Logo va Qidiruv input */}
          <div className='flex items-center gap-10'>
            <Link to="/"><img className='w-50 h-11' src={logo} alt="Logo" /></Link>
            <div className='relative'>
              <input
                type="text"
                placeholder="Qidiruv..."
                className='pl-4 pr-96 py-2 border-2 border-[#49c3f2] rounded-md focus:outline-none'
              />
              {/* Lupa (search) icon */}
              <button className='absolute h-10 top-1/2 transform -translate-y-1/2 bg-[#49c3f2] w-16 rounded-r-[6px] right-0'>
                <FiSearch className='text-white w-6 h-full mx-auto' />
              </button>
            </div>
          </div>

          {/* NavLink menyusi */}
          <div className='font-medium flex gap-6'>
            <NavLink to="/about">Biz haqimizda</NavLink>
            <NavLink to="/korzinka" className='flex items-center gap-1'>
              <img src={like} alt="Sevimlilar" className='w-6 h-5 ' />
              Sevimlilar
            </NavLink>
          </div>
        </div>

        {/* Pastdan chiqadigan menyu */}
        {open && (
          <div className=' mt-4 p-4 bg-white rounded-lg shadow-lg absolute'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente!</p>
          </div>
        )}
      </div>
    </div>
  );
}
