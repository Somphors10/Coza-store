import React from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <div className='overflow-x-auto w-full'>
            <div>
              <Navbar/>
            </div>
            <main className='overflow-x-auto'>
              <Outlet />
            </main>
          </div>
    </div>
  )
}

export default Layout;