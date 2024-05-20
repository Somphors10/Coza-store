import React from 'react'
import product1 from '../assets/product-01.jpg'
import product2 from '../assets/product-02.jpg'
import product3 from '../assets/product-03.jpg'
import product4 from '../assets/product-04.jpg'
import product5 from '../assets/product-05.jpg'
import product6 from '../assets/product-06.jpg'
import product7 from '../assets/product-07.jpg'
import product8 from '../assets/product-08.jpg'
import product9 from '../assets/product-09.jpg'
import product10 from '../assets/product-10.jpg'
import product11 from '../assets/product-11.jpg'
import product12 from '../assets/product-12.jpg'
import product13 from '../assets/product-13.jpg'
import product14 from '../assets/product-14.jpg'
import product15 from '../assets/product-15.jpg'
import product16 from '../assets/product-16.jpg'
import productDetail1 from '../assets/product-detail-01.jpg'
import productDetail2 from '../assets/product-detail-02.jpg'
import productDetail3 from '../assets/product-detail-03.jpg'


const AllProduct = () => {

  
  return (
    <section className="x-box">
    <div className="container">
        <div className="top-pro py-5">
            <h3 className="overview">product overview</h3>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-8">
                <div className="product">
                    <div className="m-product  filter-tope-group ">
                        <button className="s-product  hov1 hov-active1" data-filter=".All-Products">
                            All Products
                        </button>
    
                        <button className="s-product" data-filter=".Women1">
                            Women
                        </button>
    
                        <button className="s-product hov1" data-filter=".men1">
                            Men
                        </button>
    
                        <button className="s-product hov1 " data-filter=".bag">
                            Bag
                        </button>
    
                        <button className="s-product hov1 " data-filter=".shoes">
                            Shoes
                        </button>
    
                        <button className="s-product hov1" data-filter=".watchs">
                            Watches
                        </button>
                    </div> 
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <p>
                    <button className="btn btn-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      filter
                    </button>
                </p>
                
            </div>
            <div className="collapse" id="collapseExample">
                <div className="dis-none">
					<div className="wrap-filter p-lr-15-sm">
                        <div className="row">
                            <div className="col">
                                <div className="filter-col1 p-rb">
                                    <div className="short-by">
                                        Sort By
                                    </div>
        
                                    <ul className="mar-r-10">
                                        <li className="pb-6">
                                            <a href="#" className="filter-link ">
                                                Default
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link ">
                                                Popularity
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link">
                                                Average rating
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link filter-link-active">
                                                Newness
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link ">
                                                Price: Low to High
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link ">
                                                Price: High to Low
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="filter-col2 p-rb">
                                    <div className="short-by">
                                        Price
                                    </div>
        
                                    <ul className="mar-r-10">
                                        <li className="pb-6">
                                            <a href="#" className="filter-link filter-link-active">
                                                All
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link">
                                                $0.00 - $50.00
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link">
                                                $50.00 - $100.00
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link">
                                                $100.00 - $150.00
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link">
                                                $150.00 - $200.00
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <a href="#" className="filter-link">
                                                $200.00+
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="filter-col3 p-rb">
                                    <div className="short-by">
                                        Color
                                    </div>
        
                                    <ul className="mar-r-10">
                                        <li className="pb-6">
                                            <span className="color-product">
                                                <i className="fa-regular fa-circle"></i>
                                            </span>
        
                                            <a href="#" className="filter-link">
                                                Black
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <span className="color-blue;">
                                                <i className="fa-regular fa-circle"></i>
                                            </span>
        
                                            <a href="#" className="filter-link filter-link-active">
                                                Blue
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <span className="color-gray">
                                                <i className="fa-regular fa-circle"></i>
                                            </span>
        
                                            <a href="#" className="filter-link">
                                                Grey
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <span className="color-green">
                                                <i className="fa-regular fa-circle"></i>
                                            </span>
        
                                            <a href="#" className="filter-link ">
                                                Green
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <span className="color-red">
                                                <i className="fa-regular fa-circle"></i>
                                            </span>
        
                                            <a href="#" className="filter-link">
                                                Red
                                            </a>
                                        </li>
        
                                        <li className="pb-6">
                                            <span className="color-white">
                                                <i className="fa-regular fa-circle"></i>
                                            </span>
        
                                            <a href="#" className="filter-link">
                                                White
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="filter-col4 pb-27">
                                    <div className="short-by">
                                        Tags
                                    </div>
        
                                    <div className="m-fashion">
                                        <a href="#" className="s-fashion">
                                            Fashion
                                        </a>
        
                                        <a href="#" className="s-fashion">
                                            Lifestyle
                                        </a>
        
                                        <a href="#" className="s-fashion">
                                            Denim
                                        </a>
        
                                        <a href="#" className="s-fashion">
                                            Streetstyle
                                        </a>
        
                                        <a href="#" className="s-fashion">
                                            Crafts
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>	
					</div>
				</div>
            </div>
        </div>
        <div className="row py-3">
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box ">
                    <img src={product1} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt s-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box ">
                    <img src={product2} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt s-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products men1">
                <div className="x-box ">
                    <img src={product3} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal ---> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt s-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box ">
                    <img src={product4} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt s-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row"> 
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box">
                    <img src={product5} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products watchs">
                <div className="x-box">
                    <img src={product6} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box">
                    <img src={product7} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box">
                    <img src={product8} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
         </div>
        <div className="row"> 
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products shoes">
                <div className="x-box">
                    <img src={product9} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box">
                    <img src={product10} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products men1">
                <div className="x-box">
                    <img src={product11} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products men1">
                <div className="x-box">
                    <img src={product12} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
         </div>
        <div className="row"> 
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box">
                    <img src={product13} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All- Women1">
                <div className="x-box">
                    <img src={product14} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products watchs">
                <div className="x-box">
                    <img src={product15} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 box All-Products Women1">
                <div className="x-box">
                    <img src={product16} alt=""/>
                    <a href="#" className="caption">
                        <span className="bor "  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</span>
                        {/* <!-- Modal --> */}
                        <section>
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header ">
                                            <div className=" close-slide">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-12 ">
                                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner">
                                                                  <div className="carousel-item active">
                                                                    <img src={productDetail1} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail2} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                  <div className="carousel-item">
                                                                    <img src={productDetail3} className="d-block w-100" alt="..."/>
                                                                  </div>
                                                                </div>
                                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                  <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                         <div className="col-sm-6 col-md-6">
                                                            
                                                        </div> 
                                                    </div>
                                                </div>                                           
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="block2-txt fs-shirt">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="" className="shirt">
                            Esprit Ruffle Shirt
                        </a>
                        <span className="price">
                            $16.64
                        </span>
                    </div>
                    <div className="s-icon1">
                        <a href="#" className="a-icon">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="load text-center">
            <a href="#" className="a-load">load more</a>
        </div>
    </div>
</section>
  )
}

export default AllProduct