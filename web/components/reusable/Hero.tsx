import Image from 'next/image'
import React from 'react'
import { HoverBorderGradient } from '../border-btn'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='lg:text-center mt-[8.5rem] flex flex-col lg:items-center '>
      <h1 className='text-[3.5rem] '>Turn Ideas<br/> Into <span className='text-indigo-600'>Software</span></h1>
      <h3 className='text-sm font-light mb-[2rem]'>Deploy ideas to scalable softwares. Transform ideas into seamless user experiences. <br/> Need a website?</h3>
      <HoverBorderGradient
        containerClassName="rounded-[1.5rem]"
        as="button"
        className="bg-indigo-500/30 text-white flex items-center space-x-2"
      >
        <Link href='/sign-up'>Join the space</Link>
        </HoverBorderGradient>
      <Image src={require('@/assets/images/globe.jpg')} className='w-60 hover:scale-105 transition-all absolute z-0 lg:left-[20rem] left-[10rem] top-[20rem]'/>
      <Image src={require('@/assets/animal.jpg')} className='animate-pulse w-60 hover:scale-105 transition-all absolute z-0 lg:right-[20rem] right-[10rem] lg:top-[20rem]'/>
    </div>
  )
}

export default Hero