import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#26335D] text-white p-10 md:py-28 pb-20 font-main' id='contact'>
        <div className='text-center mb-10 grid grid-cols-1 gap-5'>
            <p className='font-semibold text-[#8D5CF6]'>Newsletter</p>
            <h1 className='font-bold text-5xl'>Get Quality Education</h1>
            <p className='font-light'>Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <form class="max-w-md mx-auto">   
            <div class="relative">
                <input type="text" class="block w-full p-4 ps-5 text-sm text-[#737373] border border-gray-300 rounded-lg" placeholder="Your Email" required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#8D5CF6] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default NewsLetter