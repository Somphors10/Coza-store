import React from "react";
import { Link } from "react-router-dom";
import iconpay1 from "../assets/icon-pay-01.png";
import iconpay2 from "../assets/icon-pay-02.png";
import iconpay3 from "../assets/icon-pay-03.png";
import iconpay4 from "../assets/icon-pay-04.png";
import iconpay5 from "../assets/icon-pay-05.png";

const scrollPageToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const root = document.getElementById("root");
  if (root) root.scrollTop = 0;
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ft-footer">
      <div className="container">
        <div className="ft-grid">
          <section className="ft-col ft-brand">
            <p className="ft-kicker">Coza Store</p>
            <h3 className="ft-title">Modern pieces, everyday confidence.</h3>
            <p className="ft-text">
              Curated collections with premium quality and timeless style for your daily wardrobe.
            </p>
            <div className="ft-social">
              <a href="https://facebook.com" className="ft-social-link" aria-label="Facebook" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="https://instagram.com" className="ft-social-link" aria-label="Instagram" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://pinterest.com" className="ft-social-link" aria-label="Pinterest" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-pinterest-p" />
              </a>
            </div>
          </section>

          <section className="ft-col">
            <h4 className="ft-heading">Shop</h4>
            <ul className="ft-links">
              <li><Link to="/shop">Women</Link></li>
              <li><Link to="/shop">Men</Link></li>
              <li><Link to="/shop">Shoes</Link></li>
              <li><Link to="/shop">Accessories</Link></li>
            </ul>
          </section>

          <section className="ft-col">
            <h4 className="ft-heading">Support</h4>
            <ul className="ft-links">
              <li><Link to="/contact">Track order</Link></li>
              <li><Link to="/contact">Returns</Link></li>
              <li><Link to="/contact">Shipping info</Link></li>
              <li><Link to="/contact">FAQs</Link></li>
            </ul>
          </section>

          <section className="ft-col">
            <h4 className="ft-heading">Newsletter</h4>
            <p className="ft-text">Get updates on new arrivals and exclusive offers.</p>
            <form className="ft-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="visually-hidden">Email address</label>
              <input id="footer-email" className="ft-input" type="email" placeholder="email@example.com" />
              <button className="ft-btn" type="submit">Subscribe</button>
            </form>
          </section>
        </div>

        <div className="ft-bottom">
          <div className="ft-payments" aria-label="Payment methods">
            <img src={iconpay1} alt="Payment method 1" />
            <img src={iconpay2} alt="Payment method 2" />
            <img src={iconpay3} alt="Payment method 3" />
            <img src={iconpay4} alt="Payment method 4" />
            <img src={iconpay5} alt="Payment method 5" />
          </div>
          <p className="ft-copy">
            Copyright {year} Coza Store. Crafted with care for modern shopping.
          </p>
        </div>
      </div>

      <button
        type="button"
        id="scrollUp"
        onClick={scrollPageToTop}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="scrollup-icon"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;