import React from 'react'
import banner1 from '../assets/banner-01.jpg'
import banner2 from '../assets/banner-02.jpg'
import banner7 from '../assets/banner-07.jpg'
import banner8 from '../assets/banner-08.jpg'
import banner9 from '../assets/banner-09.jpg'

const CategoryProduct = () => {
  return (
    <section class="category">
        <div class="container">
            <div class="row py-5">
                <div class="col-md-6 col-xl-6">
                    <div class="card s-card ">
                        <img class="card-img-top" src={banner1} alt=""/>
                        <a href="#" class="ws-18">
                            <span class="women">Women</span><br/>
                            <span class="spring">Spring 2018</span>
                        </a>
                        <div class="card-hover">
                            <div class="m-shop">
                                <div class="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-6">
                    <div class="card s-card ">
                        <img class="card-img-top" src={banner2} alt=""/>
                        <a href="#" class="ws-18">
                            <span class="women">Men</span><br/>
                            <span class="spring">Spring 2018</span>
                        </a>
                        <div class="card-hover">
                            <div class="m-shop">
                                <div class="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-6 col-xl-4 ">
                    <div class="card s-card ">
                        <img class="card-img-top" src={banner7} alt=""/>
                        <a href="#" class="ws-18">
                            <span class="women">Women</span><br/>
                            <span class="spring">Spring 2018</span>
                        </a>
                        <div class="card-hover">
                            <div class="m-shop">
                                <div class="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 ">
                    <div class="card s-card ">
                        <img class="card-img-top" src={banner8} alt=""/>
                        <a href="#" class="ws-18">
                            <span class="women">Men</span><br/>
                            <span class="spring">Spring 2018</span>
                        </a>
                        <div class="card-hover">
                            <div class="m-shop">
                                <div class="shop">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 ">
                    <div class="card s-card ">
                        <img class="card-img-top" src={banner9} alt=""/>
                        <a href="#" class="ws-18">
                            <span class="women">Accessories</span><br/>
                            <span class="spring">Spring 2018</span>
                        </a>
                        <div class="card-hover">
                            <div class="m-shop">
                                <div class="shop">
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

export default CategoryProduct