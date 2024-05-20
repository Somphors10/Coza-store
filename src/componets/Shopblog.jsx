import React from 'react'
import banner1 from '../assets/banner-01.jpg'
import banner2 from '../assets/banner-02.jpg'
import banner3 from '../assets/banner-03.jpg'

const Shopblog = () => {
  return (
    <section className="py-5 category">
    <div className="container">
        <div className="row ">
            <div className="col-md-6 col-xl-4 ">
                <div className="card s-card ">
                    <img className="card-img-top" src={banner1} alt=""/>
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
                    <img className="card-img-top" src={banner2} alt=""/>
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
                    <img className="card-img-top" src={banner3} alt=""/>
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

export default Shopblog