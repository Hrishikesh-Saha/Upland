import React from 'react'

import Image from 'next/image'
import HomeBG from '../assests/HomeBG.png'
import Container from '../components/Layers/Container'
import Text from '../components/Layers/Text'
import Button from '../components/Layers/Button'
import Phone from '../assests/phone.png'
import Like from '../assests/like.png'
import Plane from '../assests/plane.png'
import Chat from '../assests/chat.png'
import Mail from '../assests/mail.png'
import Twitter from '../assests/twitter.png'
import Heart from '../assests/heart.png'
import BigLeaf1 from '../assests/BigLeaf1.png'
import BigLeaf2 from '../assests/BigLeaf2.png'
import MediumLeaf from '../assests/MediumLeaf.png'
import SmallLeaf1 from '../assests/SmallLeaf1.png'
import SmallLeaf2 from '../assests/SmallLeaf2.png'
import SmallLeaf3 from '../assests/SmallLeaf3.png'
import SmallLeaf4 from '../assests/SmallLeaf4.png'

import "../css/animation.css";

const Banner = () => {
  return (
    <>
      <div className='z-10'>
        <Image src={HomeBG} alt='missing' className='w-full'/>
        <div className={'absolute top-[88px] xl:top-[100px] 2xl:top-[117px] w-full'}>
          <Container className={'extraLargeDesktop:px-0 px-20 items-center flex'}>
            <div className="left w-1/2 items-center">
              
              <div className="text">
                <Text innerText={'TRENDY APPLICATION'}/>
                <h1 className='font-extrabold capitalize extraLargeDesktop:text-[80px] text-[38px] 2xl:text-[70px] leading-[90%] font-DarkerGrotesque text-white'>work faster with powerful tools</h1>
                <p className='2xl:w-[530px] font-DarkerGrotesque font-medium extraLargeDesktop:text-[28px] 2xl:text-[26px] text-white leading-[110%] mt-4 2xl:mt-[30px]'>Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                <Button className={'mt-6 2xl:mt-[50px]'} btnText={'Learn more'}/>
              </div>

            </div>

            <div className="right w-1/2 2xl:hidden flex justify-center">

              <Image src={Phone} alt='missing' width={0} height={0} className='h-[380px] w-auto'/>

            </div>

            <div className="right w-1/2 extraLargeDesktop:h-[690px] h-[345px] hidden 2xl:block 2xl:h-[552px] relative">

              <div className='scale-75 extraLargeDesktop:scale-100'>
                <Image src={Phone} alt='missing' width={0} height={0} className='absolute left-11 top-0 z-20'/>

                <Image src={Plane} alt='missing' width={0} height={0} className='absolute plane left-[34px] top-[220px] z-20'/>
                <Image src={Heart} alt='missing' width={0} height={0} className='absolute heart left-[109px] top-[128px] z-20'/>
                <Image src={Like} alt='missing' width={0} height={0} className='absolute like -right-[9px] top-[229px] z-20'/>
                <Image src={Chat} alt='missing' width={0} height={0} className='absolute chat left-full translate-x-[59px] top-[161px] z-20'/>
                <Image src={Mail} alt='missing' width={0} height={0} className='absolute left-full mail translate-x-[61px] top-[496px] z-20'/>
                <Image src={Twitter} alt='missing' width={0} height={0} className='absolute twitter rounded-full left-full translate-x-[45px] top-[361px] z-20'/>

                <Image src={BigLeaf1} alt='missing' width={0} height={0} className='absolute top-[176px] -left-[120px] leaf2'/>
                <Image src={BigLeaf2} alt='missing' width={0} height={0} className='absolute top-[115px] left-[364px] leaf'/>
                <Image src={MediumLeaf} alt='missing' width={0} height={0} className='absolute top-[362px] left-[374px] z-10 leaf'/>

                <Image src={SmallLeaf1} alt='missing' width={0} height={0} className='absolute top-[353px] left-[430px] z-10 leaf'/>
                <Image src={SmallLeaf2} alt='missing' width={0} height={0} className='absolute top-[554px] left-[398px] z-10 leaf'/>
                <Image src={SmallLeaf3} alt='missing' width={0} height={0} className='absolute top-[482px] -left-[50px] z-10 leaf2'/>
                <Image src={SmallLeaf4} alt='missing' width={0} height={0} className='absolute top-[462px] left-[20px] z-10 leaf2'/>

              </div>


            </div>



          </Container>
        </div>
      </div>
    </>
  )
}

export default Banner