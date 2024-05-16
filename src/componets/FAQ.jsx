import React from 'react'
import FaqCard from './FAQ/FaqCard'

const FAQ = () => {
  return (
    <div className='bg-[#26335D] text-white p-10 md:py-28 md:pt-36 font-main'>
        <div className='grid grid-cols-1 gap-3'>
            <h1 className='font-bold text-4xl md:text-6xl text-center'>FAQ</h1>
            <p className='font-light text-sm md:text-xl text-center'>Problems trying to resolve the conflict between <br className='md:flex hidden'/> the two major realms of Classical physics: Newtonian mechanics </p>
        
            <div className='mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ