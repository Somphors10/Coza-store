import React from 'react'
import Navbar from '../componets/Navbar'
import Banner from '../componets/Banner'
import Footer from '../componets/Footer'
import Shopblog from '../componets/Shopblog'
import AllProduct from '../componets/AllProduct'


const Home1 = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Shopblog/>
      <AllProduct/>
      <Footer/>
    </div>
  )
}

export default Home1