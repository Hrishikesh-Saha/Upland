"use client"
import React, { useState } from 'react'
import Logo from '../assests/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { BsPhone } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

const Dot = () => {
  return (
    <div className="dot w-1 h-1 rounded-full bg-white opacity-50 text-[12px] xl:body-text"></div>
  )
}

const Navbar = () => {

  let [show, setShow] = useState(false)

  return (
    <nav className='lg:py-2 py-4 bg-[#4631A6] lg:bg-transparent z-50 lg:mt-6 2xl:mt-10 extraLargeDesktop:mt-[50px] static lg:absolute w-full'>

        <div className="max-w-[1780px] mx-auto flex justify-between relative items-center px-10 extraLargeDesktop:px-0">

            <div className="logo">
                <Link href={'/'}><Image src={Logo} alt='missing' width={0} height={0}/></Link>
            </div>

            <div className='hidden lg:flex gap-x-24 xl:gap-x-[200px] 2xl:gap-x-[300px] extraLargeDesktop:gap-x-[497px] items-center'>

              <div className="menu">

                <ul className='flex items-center gap-x-4 xl:gap-x-[30px]'>

                  <li><Link href={'/'} className='text-white text-[12px] xl:text-[16px] xl:leading-[170%] font-Roboto'>Features</Link></li>
                  <li ><Dot/></li>
                  <li><Link href={'/'} className='text-white text-[12px] xl:text-[16px] xl:leading-[170%] font-Roboto'>Download app</Link></li>
                  <li><Dot/></li>
                  <li><Link href={'/'} className='text-white text-[12px] xl:text-[16px] xl:leading-[170%] font-Roboto'>UI screens</Link></li>
                  <li><Dot/></li>
                  <li><Link href={'/'} className='text-white text-[12px] xl:text-[16px] xl:leading-[170%] font-Roboto'>Testimonials</Link></li>
                  <li><Dot/></li>
                  <li><Link href={'/'} className='text-white text-[12px] xl:text-[16px] xl:leading-[170%] font-Roboto'>FAQ</Link></li>
                  <li><Dot/></li>
                  <li><button className='text-mainColor xl:text-[16px] text-[12px] border border-mainColor px-3 2xl:px-5 py-0.5 2xl:py-1 rounded-[20px]'>Free trial</button></li>

                </ul>


              </div>

              <div className="phone flex items-center gap-x-1.5">
                <span className='text-mainColor 2xl:text-lg extraLargeDesktop:text-xl'><BsPhone/></span>
                <p className='text-[14px] 2xl:text-[16px] extraLargeDesktop:text-[19px] font-Roboto text-white'>+1 742 65 84 122</p>
              </div>

            </div>

            <span onClick={()=> setShow(!show)} className='text-white lg:hidden cursor-pointer'><IoMdMenu/></span>

            <div className={`transition-all z-50 duration-200 w-full absolute left-0 top-full px-10 py-5 ${show ? "opacity-100 visible" : "opacity-0 invisible"} bg-[#4531a5] flex flex-col gap-3`}>

              <ul className='flex flex-col gap-y-0.5 z-50'>
                <li className='flex items-center gap-x-2 z-50'><Dot/> <Link href={'/'} className='text-white text-[14px] font-Roboto'>Features</Link></li>
                <li className='flex items-center gap-x-2 z-50'><Dot/> <Link href={'/'} className='text-white text-[14px] font-Roboto'>Download app</Link></li>
                <li className='flex items-center gap-x-2 z-50'><Dot/> <Link href={'/'} className='text-white text-[14px] font-Roboto'>UI screens</Link></li>
                <li className='flex items-center gap-x-2 z-50'><Dot/> <Link href={'/'} className='text-white text-[14px] font-Roboto'>Testimonials</Link></li>
                <li className='flex items-center gap-x-2 z-50'><Dot/> <Link href={'/'} className='text-white text-[14px] font-Roboto'>FAQ</Link></li>
              </ul>

              <div className="phone flex items-center z-50 gap-x-1.5">
                <span className='text-mainColor 2xl:text-xl z-50'><BsPhone/></span>
                <p className='text-[14px] 2xl:text-[19px] z-50 font-Roboto text-white'>+1 742 65 84 122</p>
              </div>

            </div>

        </div>

    </nav>
  )
}

export default Navbar
