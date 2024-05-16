import React from 'react'
import pfp from '../assets/testimonial-user-cover-103.png'

const Review = () => {
  return (
    <div className='bg-white w-full flex-col py-3 px-10 shadow-md'>
        <div className='flex justify-center'>
            <img src={pfp} alt="" className='rounded-full' />
        </div>
        <p className='text-[#737373] text-center mt-3'>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</p>

        <div className='text-[#F3CD03] flex justify-center text-2xl mt-3'>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
        </div>

        <div className='text-center mt-3'>
            <h1 className='font-semibold text-[#252B42]'>Regia Miles</h1>
            <h1 className='text-[#737373] font-semibold text-sm'>Designer</h1>
        </div>
    </div>
  )
}

export default Review