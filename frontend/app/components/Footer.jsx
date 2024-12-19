import React from 'react'
import BG from '../assests/BG.png'
import Image from 'next/image'
import Container from './Layers/Container'
import mail from '../assests/VectorObject.png'
import Link from 'next/link'
import Text from './Layers/Text'

const Dot = () => {
  return (
    <div className="dot w-1 h-1 rounded-full bg-white opacity-50 text-[12px] xl:body-text"></div>
  )
}


const Footer = () => {
  return (
    <footer className='relative mt-[150px]'>

      <Container className={'bg-white rounded-[20px] extraLargeDesktop:w-[1140px] w-[350px] md:w-[580px] 2xl:w-[920px] h-[180px] 2xl:h-[250px] extraLargeDesktop:h-[350px] relative shadow-lg flex justify-center md:justify-normal items-center md:pl-[250px] 2xl:pl-[380px] extraLargeDesktop:pl-[450px]'}>

        <Image src={mail} alt='missing' width={0} height={0} className='absolute w-[220px] h-[260px] 2xl:w-[330px] 2xl:h-[390px] extraLargeDesktop:w-[373px] extraLargeDesktop:h-[425px] bottom-2 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-4 md:left-4 2xl:bottom-4 2xl:left-4 extraLargeDesktop:bottom-10 extraLargeDesktop:left-10 z-10 opacity-20 md:opacity-100'/>
        
        <div className="text z-20">

          <Text innerText={'Newsletter'}/>

          <h3 className='2xl:text-[36px] 2xl:font-DarkerGrotesque 2xl:font-semibold font-semibold font-DarkerGrotesque text-[20px]'>Be aware of new features</h3>

          <p className='2xl:w-[438px] w-[300px] text-[10px] 2xl:text-[16px] 2xl:leading-[170%] text-textColor extraLargeDesktop:mt-3'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>

          <div className="subscribe flex items-center gap-2 2xl:gap-5 mt-3 2xl:mt-4 extraLargeDesktop:mt-[26px]">
            <input type="text" className='extraLargeDesktop:w-[435px] w-[200px] 2xl:w-[350px] extraLargeDesktop:py-4 text-[12px] 2xl:text-[16px] py-2 2xl:py-3 pl-[30px] border rounded-[50px]' placeholder='Email'/>
            <button className='text-white py-2 2xl:py-3 extraLargeDesktop:py-4 px-4 2xl:px-7 extraLargeDesktop:px-[35px] bg-gradient-to-l from-[#FFA979] to-[#FF6231] font-Roboto leading-[170%] rounded-[30px] text-[12px] 2xl:text-[16px]'>Subscribe</button>
          </div>
        </div>

      </Container>


        <div className='w-full -z-10 absolute bottom-0'>
          <Image src={BG} alt="Missing" width={0} height={0} className= 'w-full h-[250px] md:h-auto'/>
        </div>

        <p className='text-center text-[20px] lg:text-[24px] 2xl:text-[40px] font-CodyStar leading-[170%] text-white opacity-20 extraLargeDesktop:mt-9 mt-2 lg:mt-4'>upland</p>

        <div className="menu flex justify-center lg:mt-1 2xl:mt-3">

        <ul className='flex flex-wrap px-2 md:px-0 justify-center md:flex-nowrap items-center gap-x-4 xl:gap-x-[30px]'>

          <li><Link href={'/'} className='text-white lg:text-[12px] text-[10px] xl:text-[16px] font-Roboto xl:leading-[170%]'>Features</Link></li>
          <li ><Dot/></li>
          <li><Link href={'/'} className='text-white lg:text-[12px] text-[10px] xl:text-[16px] font-Roboto xl:leading-[170%]'>Download app</Link></li>
          <li><Dot/></li>
          <li><Link href={'/'} className='text-white lg:text-[12px] text-[10px] xl:text-[16px] font-Roboto xl:leading-[170%]'>UI screens</Link></li>
          <li><Dot/></li>
          <li><Link href={'/'} className='text-white lg:text-[12px] text-[10px] xl:text-[16px] font-Roboto xl:leading-[170%]'>Testimonials</Link></li>
          <li><Dot/></li>
          <li><Link href={'/'} className='text-white lg:text-[12px] text-[10px] xl:text-[16px] font-Roboto xl:leading-[170%]'>FAQ</Link></li>
          <li><Dot/></li>
          <li><button className='text-mainColor xl:text-[16px] text-[10px] lg:text-[12px] border border-mainColor px-3 2xl:px-5 py-0.5 2xl:py-1 rounded-[20px]'>Free trial</button></li>

        </ul>


      </div>

      <div className='extraLargeDesktop:py-8 py-2 lg:py-3 2xl:py-5 extraLargeDesktop:mt-12 mt-2 lg:mt-3 2xl:mt-6 border-t'>
        <p className='text-[#B3B1B7] font-Roboto text-[10px] lg:text-[12px] 2xl:text-[14px] text-center leading-[170%]'>© All rights reserved. Upland 2020</p>
      </div>

    </footer>
  )
}

export default Footer
