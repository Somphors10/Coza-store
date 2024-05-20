import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo-01.png'

const Navbar = () => {
  
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
              <a class="navbar-brand" href="#"><img src={logo} alt=""/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Home
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link class="dropdown-item" to='/home1'>Homepage1</Link></li>
                          <li><Link class="dropdown-item" to='/home2'>Homepage2</Link></li>
                          <li><Link class="dropdown-item" to='/home3'>Homepage3</Link></li>
                        </ul>
                    </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to='/shop'>Shop</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to='/feature'feature>Feature</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to='/blog'>Blog</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to='/about'>About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    </header>
 
  )
}

export default Navbar;