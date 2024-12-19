import React from 'react'


const HeadingText = ({text, className, textClassName}) => {
  return (
    <div className={`w-full justify-center relative`}>
        <div className={`dots flex gap-x-1 ${className} justify-center`}>
            <div className="dot w-2.5 h-2.5 bg-mainColor rounded-full"></div>
            <div className="dot w-2.5 h-2.5 bg-mainColor rounded-full"></div>
        </div>

        <p className={`uppercase text-[#CCCCCC] text-[40px] font-CodyStar absolute text-center ${textClassName} w-full -z-10 top-2.5`}>{text}</p>

        <h1 className={`font-DarkerGrotesque capitalize font-semibold text-[50px] text-center leading-[100%] mt-3.5 ${textClassName}`}>{text}</h1>

    </div>
  )
}

export default HeadingText
