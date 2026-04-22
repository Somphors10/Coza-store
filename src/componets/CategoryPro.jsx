import React from 'react'
import banner1 from '../assets/banner-01.jpg'
import banner2 from '../assets/banner-02.jpg'
import banner7 from '../assets/banner-07.jpg'
import banner8 from '../assets/banner-08.jpg'
import banner9 from '../assets/banner-09.jpg'
import { Link } from 'react-router-dom'


const CategoryPro = () => {
  return (
    <section className="category">
        <div className="container">
            <div className="row py-5">
                <div className="col-md-6 col-xl-6">
                    <div className="card s-card ">
                        <img className="card-img-top" src={banner1} alt=""/>
                        <Link href="#" className="ws-18">
                            <span className="women">Women</span><br/>
                            <span className="spring">Spring 2018</span>
                        </Link>
                        <div className="card-hover">
                            <div className="m-shop">
                                <div className="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-6">
                    <div className="card s-card ">
                        <img className="card-img-top" src={banner2} alt=""/>
                        <Link href="#" className="ws-18">
                            <span className="women">Men</span><br/>
                            <span className="spring">Spring 2018</span>
                        </Link>
                        <div className="card-hover">
                            <div className="m-shop">
                                <div className="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6 col-xl-4 ">
                    <div className="card s-card ">
                        <img className="card-img-top" src={banner7} alt=""/>
                        <a href="#" className="ws-18">
                            <span className="women">Women</span><br/>
                            <span className="spring">Spring 2018</span>
                        </a>
                        <div className="card-hover">
                            <div className="m-shop">
                                <div className="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 ">
                    <div className="card s-card ">
                        <img className="card-img-top" src={banner8} alt=""/>
                        <a href="#" className="ws-18">
                            <span className="women">Men</span><br/>
                            <span className="spring">Spring 2018</span>
                        </a>
                        <div className="card-hover">
                            <div className="m-shop">
                                <div className="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 ">
                    <div className="card s-card ">
                        <img className="card-img-top" src={banner9} alt=""/>
                        <a href="#" className="ws-18">
                            <span className="women">Accessories</span><br/>
                            <span className="spring">Spring 2018</span>
                        </a>
                        <div className="card-hover">
                            <div className="m-shop">
                                <div className="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default CategoryPro