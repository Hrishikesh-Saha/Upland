import React from 'react'
import Container from './Layers/Container'
import HeadingText from './Layers/HeadingText';
import Card1 from '../assests/Card1.png'
import Card2 from '../assests/Card2.png'
import Card3 from '../assests/Card3.png'
import Image from 'next/image';

const Card = ({src, heading, description}) => {
    return (

        <div className="px-8 pb-[50px] pt-[24px] shadow-lg rounded-[20px]">
            <div className="image">
                <Image src={src} alt='missing'/>
            </div>
            <div className="text mt-9">
                <h5 className='text-[28px] font-semibold font-DarkerGrotesque leading-[110%]'>{heading}</h5>
                <p className='w-[280px] text-textColor mt-4 leading-[170%] font-Roboto'>{description}</p>
            </div>
        </div>

    );
}

const Service = () => {
  return (
    <section className='pt-[130px] pb-40'>
        <Container>
            <div className="heading">
                <HeadingText text={'See what you will get with us'}/>
            </div>

            <div className="cards flex justify-between mt-[50px]">
                <Card src={Card1} heading={'Development courses'} description={'Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.'}/>
                <Card src={Card2} heading={'Money saving services'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}/>
                <Card src={Card3} heading={'Usability interface'} description={'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.'}/>
            </div>
        </Container>
    </section>
  )
}

export default Service
