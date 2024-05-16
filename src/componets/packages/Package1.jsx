import React from 'react'

import rating from '../packages/Frame 4 sec-.png'

const Package1 = () => {
  return (
    <div className='w-full font-main md:shadow-md'>
        <div className='package-cover1 relative bg-cover bg-no-repeat px-3 py-5 s'>
            <div>
                <a href="/home" className='bg-[#E74040] px-3 py-1 rounded-lg text-sm shadow-md'>Sale</a>

                <div className='items-center gap-5 hidden'>
                    <a href="/home" className='rounded-full text-white text-2xl'>
                        <ion-icon name="heart-circle"></ion-icon>
                    </a>

                    <a href="/home" className='bg-white text-[#252B42] rounded-full px-1 py-[3px] text-center'>
                        <ion-icon name="cart"></ion-icon>
                    </a>
                </div>
            </div>
        </div>

        <div className='bg-white text-[#252B42] w-[300px] py-5 px-3'>
            <div className='flex justify-between'>
                <p className='text-[#8D5CF6] font-bold text-sm'>Welcome</p>
                <img src={rating} alt="" />
            </div>

            <div className='mt-3'>
                <p className='font-bold'>training courses</p>
                <p className='font-medium mt-2 text-[#737373] text-sm'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                <div className='flex gap-2 items-center text-[#737373] mt-4'>
                    <ion-icon name="pricetag"></ion-icon>
                    <p className='font-semibold'>15 Sales</p>
                </div>

                <div className='flex gap-2 mt-4'>
                    <p className='text-[#BDBDBD] font-bold line-through'>$16.48</p>
                    <p className='text-[#FF7B52] font-bold'>$6.48</p>
                </div>

                <div className='mt-5 mb-2'>
                    <a href="/home" className='border-[#8D5CF6] text-[#8D4CF6] flex items-center py-2 px-4 font-medium border-[1.5px] w-36 rounded-full hover:text-white hover:bg-[#8D5CF6] hover:border-[#6f4abf] duration-500'>
                        Learn More <ion-icon name="chevron-forward"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Package1