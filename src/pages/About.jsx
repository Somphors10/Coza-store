import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Aboutblog from '../componets/Aboutblog'
import HeaderAbout from '../componets/HeaderAbout'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeaderAbout/>
      <Aboutblog/>
      <Footer/>
    </div>
  )
}

export default About