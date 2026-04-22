import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-01.png";
import { useWishlist } from "./WishlistProvider";

const Navbar = () => {
  const { wishlistCount } = useWishlist();

  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/home1">
            <img src={logo} alt="Coza Store" className="brand-logo" />
          </Link>

          <button
            className="navbar-toggler nav-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links-wrap">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-link-custom"
                  href="#"
                  id="homeDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu nav-dropdown" aria-labelledby="homeDropdown">
                  <li><Link className="dropdown-item" to="/home1">Homepage 1</Link></li>
                  <li><Link className="dropdown-item" to="/home2">Homepage 2</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/shop" className="nav-link nav-link-custom">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/feature" className="nav-link nav-link-custom">Feature</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link nav-link-custom">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link nav-link-custom">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link nav-link-custom">Contact</NavLink>
              </li>
            </ul>

            <div className="nav-actions">
              <button type="button" className="icon-btn" aria-label="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <Link to="/wishlist" className="icon-btn wishlist-btn" aria-label="Wishlist">
                <i className="fa-regular fa-heart"></i>
                {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
              </Link>

              <button type="button" className="icon-btn" aria-label="Cart">
                <i className="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;