import React from 'react'
import iconpay1 from '../assets/icon-pay-01.png'
import iconpay2 from '../assets/icon-pay-02.png'
import iconpay3 from '../assets/icon-pay-03.png'
import iconpay4 from '../assets/icon-pay-04.png'
import iconpay5 from '../assets/icon-pay-05.png'

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
                        <a href="#" className="w-footer">
                            Women
                        </a>
                    </li>

                    <li className="pb-10">
                        <a href="#" className="w-footer">
                            Men
                        </a>
                    </li>

                    <li className="pb-10">
                        <a href="#" className="w-footer">
                            Shoes
                        </a>
                    </li>

                    <li className="pb-10">
                        <a href="#" className="w-footer">
                            Watches
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-sm-6 col-lg-3 m-footer">
                <h4 className="s-footer ">
                    Help
                </h4>

                <ul  className="mar-r-10">
                    <li className="pb-10">
                        <a href="#" className="t-footer">
                            Track Order
                        </a>
                    </li>

                    <li className="pb-10">
                        <a href="#" className="t-footer">
                            Returns 
                        </a>
                    </li>

                    <li className="pb-10">
                        <a href="#" className="t-footer">
                            Shipping
                        </a>
                    </li>

                    <li className="pb-10">
                        <a href="#" className="t-footer">
                            FAQs
                        </a>
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
                    <a href="#" className="fab">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" className="fab">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" className="fab">
                        <i className="fa-brands fa-pinterest-p"></i>
                    </a>
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
                <a href="#" className="m-all-1">
                    <img src={iconpay1} alt=""/>
                </a>

                <a href="#" className="m-all-1">
                    <img src={iconpay2} alt=""/>
                </a>

                <a href="#" className="m-all-1">
                    <img src={iconpay3} alt=""/>
                </a>

                <a href="#" className="m-all-1">
                    <img src={iconpay4} alt=""/>
                </a>

                <a href="#" className="m-all-1">
                    <img src={iconpay5} alt=""/>
                </a>
            </div>

            <p className="copy text-center">
                Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved | Made with <i className="fa-regular fa-heart"></i>by <a href="https://colorlib.com" target="_blank">Colorlib</a> &amp; distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </p>
        </div>
    </div>
          <a id="scrollUp" href="#top" aria-label="Back to top">
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
          </a>
    </footer>
  )
}

export default Footer