import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <button className={`font-Roboto ${className} text-white rounded-[30px] py-4 leading-[170%] bg-gradient-to-r to-[#FFA979] from-[#FF6231] w-[152px]`}>{btnText}</button>
  )
}

export default Button
