import React from 'react'
import InfoSquare  from './svg/InfoSquare.svg';

function Card( {title, content, icon}) {;

  return (
    <div className="card group  px-6 py-12 bg-gradient-to-bl from-[#293643] to-[#1D332C]/10 max-w-[29rem] relative space-y-2 rounded-md border border-transparent hover:border-green-300 max-h-max hover:bg-gradient-to-br transition-all shadow-lg">
      <svg className="w-[7rem] h-[7rem]  -top-8 absolute right-1 group-hover:scale-110  delay-150 transition-all">
        {icon}
      </svg>
        <h2 className='text-xl font-bold group-hover:text-green-300'>{title}</h2>
        <p className='text-sm text-slate-500 '>{content}</p>
    </div>
  )
}

export default Card