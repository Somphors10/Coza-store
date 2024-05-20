import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import BlogBlog from '../componets/BlogBlog'
import HeaderBlog from '../componets/HeaderBlog'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <HeaderBlog/>
      <BlogBlog/>
      <Footer/>
    </div>
  )
}

export default Blog