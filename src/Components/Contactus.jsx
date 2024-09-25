import React from 'react';

export default function Contactus() {
  return (
    <div className="py-8 ">
      <div className="container mx-auto px-4 flex  lg:flex-row justify-around items-center lg:items-start">
        {/* Matn bo'limi */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">Biz bilan bog'lanish</h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-md">
            Telefon raqamingizni qoldiring va menejerlarimiz tez orada siz bilan bog'lanadi.
          </p>
        </div>

        {/* Forma bo'limi */}
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-5">
            <input
              className="w-full p-4 text-xl rounded-xl bg-gray-100"
              type="text"
              placeholder="Ismingiz"
              required
            />
            <input
              className="w-full p-4 text-xl rounded-xl bg-gray-100"
              type="text"
              placeholder="Telefon raqamingiz"
              required
            />
            <input
              className="w-full p-4 text-xl rounded-xl bg-gray-100"
              type="text"
              placeholder="Sizning raqamingiz"
            />
            <button
              className="w-full p-4 text-xl font-semibold text-white bg-[#49c3f2] rounded-xl hover:bg-[#38b0e2] transition-all duration-300"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
