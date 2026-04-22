import React from 'react'
import iconpay1 from '../assets/icon-pay-01.png'
import iconpay2 from '../assets/icon-pay-02.png'
import iconpay3 from '../assets/icon-pay-03.png'
import iconpay4 from '../assets/icon-pay-04.png'
import iconpay5 from '../assets/icon-pay-05.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-3 m-footer">
                <h4 className="s-footer ">
                    Categories
                </h4>

                <ul  className="mar-r-10">
                    <li className="pb-10">
                        <Link href="#" className="w-footer">
                            Women
                        </Link>
                    </li>

                    <li className="pb-10">
                        <Link href="#" className="w-footer">
                            Men
                        </Link>
                    </li>

                    <li className="pb-10">
                        <Link href="#" className="w-footer">
                            Shoes
                        </Link>
                    </li>

                    <li className="pb-10">
                        <Link href="#" className="w-footer">
                            Watches
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-sm-6 col-lg-3 m-footer">
                <h4 className="s-footer ">
                    Help
                </h4>

                <ul  className="mar-r-10">
                    <li className="pb-10">
                        <Link href="#" className="t-footer">
                            Track Order
                        </Link>
                    </li>

                    <li className="pb-10">
                        <Link href="#" className="t-footer">
                            Returns 
                        </Link>
                    </li>

                    <li className="pb-10">
                        <Link href="#" className="t-footer">
                            Shipping
                        </Link>
                    </li>

                    <li className="pb-10">
                        <Link href="#" className="t-footer">
                            FAQs
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-sm-6 col-lg-3 m-footer">
                <h4 className="s-footer">
                    GET IN TOUCH
                </h4>

                <p className="A-footer">
                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>

                <div className="pt-20">
                    <Link href="#" className="fab">
                        <i className="fa-brands fa-facebook-f"></i>
                    </Link>

                    <Link href="#" className="fab">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>

                    <Link href="#" className="fab">
                        <i className="fa-brands fa-pinterest-p"></i>
                    </Link>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 m-footer">
                <h4 className="s-footer">
                    Newsletter
                </h4>

                <form>
                    <div className="sub">
                        <input className="m-sub" type="text" name="email" placeholder="email@example.com"/>
                        <div className="focus-input1"></div>
                    </div>

                    <div className="pt-18">
                        <button className="bord1">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="p-t-40 ">
            <div className="flex-c-m flex-w p-b-18 text-center">
                <Link href="#" className="m-all-1">
                    <img src={iconpay1} alt=""/>
                </Link>

                <Link href="#" className="m-all-1">
                    <img src={iconpay2} alt=""/>
                </Link>

                <Link href="#" className="m-all-1">
                    <img src={iconpay3} alt=""/>
                </Link>

                <Link href="#" className="m-all-1">
                    <img src={iconpay4} alt=""/>
                </Link>

                <Link href="#" className="m-all-1">
                    <img src={iconpay5} alt=""/>
                </Link>
            </div>

            <p className="copy text-center">
                Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved | Made with <i className="fa-regular fa-heart"></i>by <Link href="https://colorlib.com" target="_blank">Colorlib</Link> &amp; distributed by <Link href="https://themewagon.com" target="_blank">ThemeWagon</Link>
            </p>
        </div>
    </div>
          <Link id="scrollUp" href="#top" aria-label="Back to top">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="scrollup-icon"
              >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
          </Link>
    </footer>
  )
}

export default Footer