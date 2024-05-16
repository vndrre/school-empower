import React from 'react'

import Landing from '../componets/Landing'
import Courses from '../componets/Courses'
import Packages from '../componets/Packages'
import FAQ from '../componets/FAQ'
import NewsLetter from '../componets/NewsLetter'
import Footer from '../componets/Footer'

const Home = () => {
  return (
    <div className='bg-[#26335D] h-screen'>
        <Landing/>
        <Courses/>
        <Packages/>
        <FAQ/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home