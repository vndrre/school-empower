import React from 'react'

import icon from './icon cool-icon-l22.svg'

const Course2 = () => {
  return (
    <div className='bg-white p-5 px-10 w-full shadow-md md:rounded-none rounded-lg'>
        <div className='flex justify-center'>
            <div className='flex-col items-center'>
                <div className='flex justify-center mb-5'>
                    <img src={icon} alt="" />
                </div>
                <div className='mb-5'>
                    <p className='text-[#252B42] font-bold text-xl mb-3'>2,769 online courses</p>
                    <hr className='border-[1px] border-[#E74040] mb-5'/>
                    <p className='text-[#737373] text-center'>
                    The gradual <br/>
                    accumulation and <br/>
                    small-scale..
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course2