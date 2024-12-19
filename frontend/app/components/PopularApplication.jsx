import React from 'react'
import Container from './Layers/Container'
import Image from 'next/image'
import LikeImage from '../assests/img.png'
import HeadingText from './Layers/HeadingText'
import { TiTick } from "react-icons/ti";

const PopularApplication = () => {
  return (
    <section className='pt-40 pb-[90px]'>
        <Container className={'flex justify-between items-center'}>

            <div className="left">
                <Image src={LikeImage} alt='missing' width={0} height={0} className=''/>
            </div>

            <div className="right">
                <HeadingText text={'The most popular application 2021'} className={'!justify-start'} textClassName={'!text-left w-[457px]'}/>
                
                <p className='text-textColor text-[28px] font-medium font-DarkerGrotesque leading-[110%] mt-[30px] w-[457px]'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum.</p>

                <ul className='w-[457px] mt-[30px] flex flex-col gap-5'>
                    <li className='w-full flex gap-x-5'><p className='w-5 h-5 flex justify-center items-center text-mainColor border-2 border-mainColor rounded-full'><TiTick /></p><p className='font-Roboto leading-[170%] text-textColor'>Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit.</p></li>
                    <li className='w-full flex gap-x-5'><p className='w-5 h-5 flex justify-center items-center text-mainColor border-2 border-mainColor rounded-full'><TiTick /></p><p className='font-Roboto leading-[170%] text-textColor'>Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut. </p></li>
                    <li className='w-full flex gap-x-5'><p className='w-5 h-5 flex justify-center items-center text-mainColor border-2 border-mainColor rounded-full'><TiTick /></p><p className='font-Roboto leading-[170%] text-textColor'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p></li>
                </ul>
            </div>

        </Container>
    </section>
  )
}

export default PopularApplication
