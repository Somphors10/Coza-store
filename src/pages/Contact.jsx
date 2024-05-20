import React from 'react'
import Navbar from '../componets/Navbar'
import ContactFile from '../componets/ContactFile'
import Map from '../componets/Map'
import Footer from '../componets/Footer'
import ContactEnd from '../componets/ContactEnd'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactEnd/>
      <ContactFile/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Contact