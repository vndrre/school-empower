import React from 'react'
import Nav from './Nav'

import cover from '../assets/hero-cover-1.png'

const Landing = () => {
  return (
    <div className='relative overflow-hidden bg-cover bg-no-repeat md:p-12 text-center shapes font-main text-white bg-[#26335D] h-screen'>
        <Nav/>

        <div className='md:hidden md:justify-between flex flex-col px-5 md:mt-0 mt-16 md:items-center'>
          <div className='text-left mt-28 md:px-0 px-5 md:mt-0'>
            <p className='text-2xl font-semibold'>Join Us</p>
            <h1 className='md:text-6xl text-4xl font-bold md:mt-0 mt-3'>25K+ STUDENTS <br/> TRUST US</h1>
            <p className='md:mt-0 mt-3'>Every day brings with it a fresh set of learning possibilities.</p>
          </div>

          <div className='md:mt-0 mt-10'>
            <img src={cover} alt="" className='md:scale-100 scale-105' />
          </div>
        </div>

        <div className='hidden md:flex md:justify-center md:gap-20 md:mt-20 md:items-center'>
          <div className='grid grid-cols-1 gap-10'>
            <p className='text-2xl font-semibold md:text-left'>Join Us</p>
            <h1 className='md:text-6xl text-4xl font-bold md:text-left'>25K+ STUDENTS <br/> TRUST US</h1>
            <p className='md:text-left'>Every day brings with it a fresh set of <br/> learning possibilities.</p>

            <div className='flex gap-5'>
              <a href="/register" className='bg-[#8D5CF6] font-medium w-36 rounded-md py-4 px-5 hover:bg-[#854cff] duration-500'>Join Us</a>
              <a href="/register" className='border-[#8D5CF6] font-mediu border-[1.5px] w-36 rounded-md py-4 px-5 hover:bg-[#ffffff] hover:text-[#8D5CF6] hover:font-bold duration-500'>Learn More</a>
            </div>
          </div>

          <div>
            <img src={cover} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Landing