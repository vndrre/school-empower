import React from 'react'
import Nav from '../componets/Nav'

const Login = () => {
  return (
    <div className='md:p-36 lg:px-96 p-10 pt-56 relative overflow-hidden bg-cover bg-no-repeat text-center shapes font-main text-white bg-[#26335D] h-screen'>
      <Nav/>
      <div class="container">
        <form class="bg-[#26335D] shadow-md text-center grid grid-cols-1 gap-5 w-full px-10 py-20 text-[#252B42] mx-auto rounded">
          <input type="text" placeholder="Your Email" class="block w-full mx-auto text-sm py-4 px-3 rounded" />
          <input type="text" placeholder="Username" class="block w-full mx-auto text-sm py-4 px-3 rounded" />
          <input type="text" placeholder="Password" class="block w-full mx-auto text-sm py-4 px-3 rounded" />
          <button class="border-white bg-[#8D5CF6] font-mediu border-[1.5px] text-white font-bold py-2 px-4 rounded block mx-auto w-full">Login</button>
          
          <div className='md:flex-col md:gap-3 text-white'>
            <p className='md:text-left'>Don't have an Account?</p>

            <div className='grid grid-cols-1 gap-1 mt-2 md:flex md:mt-0 md:gap-3'>
              <a href='/login' className='underline text-[#8D5CF6]'>Sign Up here</a>
              <a href='/home' className='underline text-[#8D5CF6]'>Browse as a Guest</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default Login