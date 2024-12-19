import Link from 'next/link'
import Image from "next/image";
import BG from "./assests/ErrorBg.png";
import Bredcumbs from './components/Layers/Bredcumbs';
import Container from './components/Layers/Container';
import ErrorImage from './assests/ErrorImage.png'
import { IoMdSearch } from 'react-icons/io';
 
export default function NotFound() {
  return (
    <>
      <div className='z-10'>
        <Image src={BG} alt='missing' className='w-full'/>
        <div className={'absolute top-14 md:top-28 xl:top-40 w-full'}>
          <Container className={'px-10 extraLargeDesktop:px-0'}>
            <Bredcumbs path={'Home'} title={'Oops!'} subTitle={'404'}/>
          </Container>
        </div>
      </div>

      <Container className={'flex flex-wrap md:flex-nowrap justify-center items-center gap-[74px] px-10 extraLargeDesktop:px-0 mt-[58px]'}>
        <div className="text ">
          <h1 className='font-DarkerGrotesque text-[64px] lg:text-[88px] font-bold'>404</h1>
          <h4 className='lg:text-[50px] text-[32px] font-semibold font-DarkerGrotesque lg:mt-3'>Page not found</h4>
          <p className='lg:w-[458px] text-textColor leading-[110%] lg:text-[28px] mt-3 lg:mt-[30px] font-DarkerGrotesque'>It looks like nothing was found at this location. Maybe try a search?</p>
          <div className="input mt-5 relative">
            <input type="text" className='lg:w-[457px] w-full border py-2.5 lg:py-[18px] pl-[30px] rounded-[50px]' placeholder='Search' />
            <p className='absolute top-1/2 text-lg -translate-y-1/2 right-5 text-[#B3B1B7]'><IoMdSearch /></p>
          </div>
        </div>
        <div className="image">
          <Image src={ErrorImage} alt='missing' width={0} height={0}/>
        </div>
      </Container>
    </>
  )
}