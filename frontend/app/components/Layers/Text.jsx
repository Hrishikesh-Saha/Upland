import React from 'react'

const Text = ({innerText}) => {
  return (
    <div className='flex items-center gap-4'>

        <div className="dots flex items-center gap-1">
            <div className='w-1.5 h-1.5 rounded-full bg-mainColor'></div>
            <div className='w-1.5 h-1.5 rounded-full bg-mainColor'></div>
        </div>

        <p className='text-[12px] font-Roboto text-mainColor leading-[170%]'>{innerText}</p>

    </div>
  )
}

export default Text
