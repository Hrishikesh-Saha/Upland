import React from 'react'

const Bredcumbs = ({title, subTitle, path, className}) => {
  return (
    <div className={`${className}`}>
        <h1 className='2xl:text-[60px] xl:text-[48px] text-[32px] font-DarkerGrotesque font-semibold leading-[100%] text-white'>{title}</h1>
        <div className='flex items-center gap-3 xl:mt-4 mt-2 2xl:mt-[30px]'>
            <p className='text-[#B3B1B7] text-[7px] 2xl:text-[14px] xl:text-[10px] font-Roboto leading-[170%]'>{path}</p>
            <div className="dot w-0.5 h-0.5 bg-[#B3B1B7] rounded-full"></div>
            <p className='text-[#B3B1B7] text-[7px] 2xl:text-[14px] xl:text-[10px] font-Roboto leading-[170%]'>{subTitle}</p>
        </div>
    </div>
  )
}

export default Bredcumbs
