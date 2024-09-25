import React from 'react'
import why1 from '../assets/why1.png'
import why2 from '../assets/why2.png'
import why3 from '../assets/why3.png'
import why4 from '../assets/why4.png'

export default function Whyus() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-semibold text-center ">Nega bizni tanlashadi?</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xl font-bold">
          <li className="flex flex-col items-center gap-2">
            <img className="w-32 h-16" src={why1} alt="Servis xizmati" />
            <p className="text-center">Servis xizmati</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <img className="w-32 h-16" src={why2} alt="Tovarlarning ehtiyot qismlari" />
            <p className="text-center">Tovarlarning ehtiyot qismlari</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <img className="w-32 h-16" src={why3} alt="Tovarlarni ijaraga berish" />
            <p className="text-center">Tovarlarni ijaraga berish</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <img className="w-32 h-16" src={why4} alt="Chang yutgich aksessuarlari" />
            <p className="text-center">Chang yutgich aksessuarlari</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
