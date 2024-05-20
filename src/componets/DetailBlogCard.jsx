import React from 'react'
import blog4 from '../assets/blog-04.jpg'
import productMin1 from '../assets/product-min-01.jpg'
import productMin2 from '../assets/product-min-02.jpg'
import productMin3 from '../assets/product-min-03.jpg'
import Navbar from './Navbar'
import Footer from './Footer'


const DetailBlogCard = () => {
  return (
    <>
    <section className="blog">
        <Navbar/>
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-lg-9 m-blog">
					<div className="s-blog me-blog">
						{/* <!-- item blog --> */}
						<div className="c-blog">
							<a href="" className="a1-blog">
								<img src={blog4} alt="" className="w-100"/>
								<div className="d-blog">
									<span className="sp1-blog text-center">
										22
									</span>

									<span className="sp2-blog text-center">
										Jan2018
									</span>
								</div>
							</a>

							<div className="w-blog">
								<div className="m-by">
									<span className="s-by">
										<span>
											<span className="color1">By</span> Admin  
											<span className="sp-by">|</span>
										</span>

										<span>
											StreetStyle, Fashion, Couple  
											<span className="sp-by">|</span>
										</span>

										<span>
											8 Comments
										</span>
									</span>

									<a href="blog-detail.html" className="cou-blog">
										Continue Reading

										<i className="fa fa-long-arrow-right ml-9"></i>
									</a>
								</div>
								<h1 className="i-blog">
									<a href="" className="a2-blog">
										8 Inspiring Ways to Wear Dresses in the Winter
									</a>
								</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.
								</p>
								<p>
									Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
								</p>
							</div>
							<div className="m-tag">
								<span className="s-tag">
									Tags
								</span>
	
								<div className="street-m">
									<a href="#" className="a-street">
										Streetstyle
									</a>
	
									<a href="#" className="a-street">
										Crafts
									</a>
								</div>
							</div>
							<div className="pt-40">
								<h5 className="m-leave">
									Leave a Comment
								</h5>
	
								<p className="p-email">
									Your email address will not be published. Required fields are marked *
								</p>
	
								<form>
									<div className="di-text1">
										<textarea className="text-comment" name="cmt" placeholder="Comment..."></textarea>
									</div>
	
									<div className="in-name1">
										<input className="input-name" type="text" name="name" placeholder="Name *"/>
									</div>
	
									<div className="in-email1">
										<input className="s-email" type="text" name="email" placeholder="Email *"/>
									</div>
	
									<div className="di-web">
										<input className="web-style" type="text" name="web" placeholder="Website"/>
									</div>
	
									<button className="p-comment">
										Post Comment
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 m-blog">
					<div className="side-menu">
						<div className="s-search">
							<input className="in-search" type="text" name="search" placeholder="Search"/>

							<button className="bu-search">
								<i className="fa fa-search"></i>
							</button>
						</div>

						<div className="pt-55">
							<h4 className="m-cate">
								Categories
							</h4>

							<ul className="mar-r-10">
								<li className="bor18">
									<a href="#" className="a-fash">
										Fashion
									</a>
								</li>

								<li className="bor18">
									<a href="#" className="a-fash">
										Beauty
									</a>
								</li>

								<li className="bor18">
									<a href="#" className="a-fash">
										Street Style
									</a>
								</li>

								<li className="bor18">
									<a href="#" className="a-fash">
										Life Style
									</a>
								</li>

								<li className="bor18">
									<a href="#" className="a-fash">
										DIY &amp; Crafts
									</a>
								</li>
							</ul>
						</div>

						<div className="pt-65">
							<h4 className="m-cate">
								Featured Products
							</h4>

							<ul className="mar-r-10">
								<li className="li-fea">
									<a href="#" className="a-fea">
										<img src={productMin1} alt=""/>
									</a>

									<div className="di-white">
										<a href="#" className="a-white">
											White Shirt With Pleat Detail Back
										</a>
										<br/>
										<span className="s-doll">
											$19.00
										</span>
									</div>
								</li>

								<li className="li-fea">
									<a href="#" className="a-fea">
										<img src={productMin2} alt=""/>
									</a>

									<div className="di-white">
										<a href="#" className="a-white">
											Converse All Star Hi Black Canvas
										</a>
										<br/>
										<span className="s-doll">
											$39.00
										</span>
									</div>
								</li>

								<li className="li-fea">
									<a href="#" className="a-fea">
										<img src={productMin3} alt=""/>
									</a>

									<div className="di-white">
										<a href="#" className="a-white">
											Nixon Porter Leather Watch In Tan
										</a>
										<br/>
										<span className="s-doll">
											$17.00
										</span>
									</div>
								</li>
							</ul>
						</div>

						<div className="pt-55">
							<h4 className="m-cate">
								Archive
							</h4>

							<ul className="mar-r-10">
								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											July 2018
										</span>

										<span>
											(9)
										</span>
									</a>
								</li>

								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											June 2018
										</span>

										<span>
											(39)
										</span>
									</a>
								</li>

								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											May 2018
										</span>

										<span>
											(29)
										</span>
									</a>
								</li>

								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											April  2018
										</span>

										<span>
											(35)
										</span>
									</a>
								</li>

								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											March 2018
										</span>

										<span>
											(22)
										</span>
									</a>
								</li>

								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											February 2018
										</span>

										<span>
											(32)
										</span>
									</a>
								</li>

								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											January 2018
										</span>

										<span>
											(21)
										</span>
									</a>
								</li>

								<li className="pb-7">
									<a href="#" className="s-year">
										<span>
											December 2017
										</span>

										<span>
											(26)
										</span>
									</a>
								</li>
							</ul>
						</div>

						<div className="pt-50">
							<h4 className="m-cate">
								Tags
							</h4>

							<div className="fl-fash">
								<a href="#" className="a-show">
									Fashion
								</a>

								<a href="#" className="a-show">
									Lifestyle
								</a>

								<a href="#" className="a-show">
									Denim
								</a>

								<a href="#" className="a-show">
									Streetstyle
								</a>

								<a href="#" className="a-show">
									Crafts
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<Footer/>
	</>
  )
}

export default DetailBlogCard