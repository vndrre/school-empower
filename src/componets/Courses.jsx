import React from 'react'
import Course1 from './courses/Course1'
import Course2 from './courses/Course2'

import person from './courses/thumb-concept-16.png'

const Courses = () => {
  return (
    <div className='bg-[#26335D] text-white p-10 pt-10 font-main' id='product'>
        <div className='text-center grid grid-cols-1 gap-3'>
            <p className='text-[#8D5CF6]'>Practical advice</p>
            <h1 className='font-semibold text-2xl md:text-5xl md:font-bold'>Most Popular Courses</h1>

            <p className='text-sm font-light md:mt-3 md:mb-3'>Problems trying to resolve the conflict between <br/> 
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-14 md:px-48'>
            <Course1/>
            <Course2/>
        </div>

        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:hidden'>
            <div className='text-center md:text-left'>
                <h1 className='font-bold text-2xl'>Our Popular Courses</h1>
                <p className='font-light mt-5 md:w-96'>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: 
                Newtonian mechanics </p>

                <div className='mt-5'>
                    <a href="/home" className='text-medium text-[#8D5CF6] hover:underline'>Learn More <ion-icon name="chevron-forward"></ion-icon></a>
                </div>
            </div>

            <div>
                <img src={person} alt="" />
            </div>
        </div>

        <div className='mt-20 py-5 px-20'>
            <div className='hidden md:flex md:justify-center items-center gap-20'>
                <div>
                    <img src={person} alt="" />
                </div>

                <div className=''>
                    <hr className='border-[2px] w-24 border-[#E74040] mb-5'/>
                    <h1 className='font-bold text-5xl mb-5'>Our Popular <br/> Courses</h1>
                    <p className='font-light mt-5 md:w-96'>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics </p>

                    <div className='mt-5'>
                        <a href="/home" className='text-medium text-[#8D5CF6] hover:underline'>Learn More <ion-icon name="chevron-forward"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses