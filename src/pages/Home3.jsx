import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import AllProduct from '../componets/AllProduct'
import CategoryPro from '../componets/CategoryPro'
import Banner from '../componets/Banner'

const Home3 = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <CategoryPro/>
      <AllProduct/>
      <Footer/>
    </div>
  )
}

export default Home3