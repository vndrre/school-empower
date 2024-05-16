import React from 'react'
import Package1 from './packages/Package1'
import Review from './Review'

const Packages = () => {
  return (
    <div className='bg-[#26335D] text-white p-10 font-main' id='pricing'>
        <div className='text-center mb-10 grid grid-cols-1 gap-5'>
            <p className='font-semibold text-[#8D5CF6]'>Practicle Advice</p>
            <h1 className='font-bold text-5xl'>Approdable Packages</h1>
            <p className='font-light'>Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className='flex-col md:hidden'>
            <Package1/>
            <div className='mt-16'>
                <Package1/>
            </div>
        </div>

        <div className='hidden md:flex md:justify-center md:gap-16 mt-20 mb-20'>
            <div>
                <Package1/>
            </div>

            <div>
                <Package1/>
            </div>
        </div>

        <div className='mt-40'>
            <div className='text-center mb-10 grid grid-cols-1 gap-5'>
                <p className='font-semibold text-[#8D5CF6]'>Practicle Advice</p>
                <h1 className='font-bold text-5xl'>Approdable Packages</h1>
                <p className='font-light'>Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
        </div>

        <div className='mt-16 mb-10 md:hidden flex-col'>
            <div className='mt-5 mb-5'>
                <Review/>
            </div>

            <div className='mb-10 mt-10'>
                <Review/>
            </div>
        </div>

        <div className='hidden md:grid grid-cols-2 gap-20 px-20'>
            <div>
                <Review/>
            </div>

            <div>
                <Review/>
            </div>
        </div>
    </div>
  )
}

export default Packages