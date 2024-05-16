import React from 'react'

const FaqCard = () => {
  return (
    <div className='bg-white rounded-lg p-4 shadow-md md:hover:scale-105 duration-500'>
        <div className='flex gap-3'>
            <a className='text-[#8D5CF6] text-xl' href='/home'>
                <ion-icon name="chevron-forward"></ion-icon>
            </a>

            <div>
                <h1 className='text-[#252B42] font-semibold'>the quick fox jumps over the lazy dog</h1>
                <p className='text-[#737373] font-medium text-[14px] mt-1'>Things on a very small scale behave like nothing </p>
            </div>
        </div>
    </div>
  )
}

export default FaqCard