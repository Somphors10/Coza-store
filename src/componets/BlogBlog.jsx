import React from 'react'
import blog4 from '../assets/blog-04.jpg'
import blog5 from '../assets/blog-05.jpg'
import blog6 from '../assets/blog-06.jpg'
import productMin1 from '../assets/product-min-01.jpg'
import productMin2 from '../assets/product-min-02.jpg'
import productMin3 from '../assets/product-min-03.jpg'

const BlogBlog = () => {
  return (
    <section className="blog">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-lg-9 m-blog">
					<div className="s-blog me-blog">
						{/* <!-- item blog --> */}
						<div className="c-blog">
							<a href="../html/detail-blog1.html" className="a1-blog">
								<div className="img-blog">
									<img src={blog4} alt=""/>
								</div>

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
								<h4 className="i-blog">
									<a href="" className="a2-blog">
										8 Inspiring Ways to Wear Dresses in the Winter
									</a>
								</h4>

								<p className="p-blog">
									className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								</p>

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

									<a href="#" className="cou-blog">
										Continue Reading

										<i className="fa fa-long-arrow-right ml-9"></i>
									</a>
								</div>
							</div>
						</div>

						{/* <!-- item blog --> */}
						<div className="pb-63">
							<a href="../html/detail-blog1.html" className="a1-blog">
								<div className="img-blog">
									<img src={blog5} alt=""/>
								</div>
								<div className="d-blog">
									<span className="sp1-blog text-center">
										18
									</span>

									<span className="sp2-blog text-center">
										Jan2018
									</span>
								</div>
							</a>

							<div className="w-blog">
								<h4 className="i-blog">
									<a href="blog-detail.html" className="a2-blog">
										The Great Big List of Men's Gifts for the Holidays 
									</a>
								</h4>

								<p className="p-blog">
									className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								</p>

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
							</div>
						</div>

						{/* <!-- item blog --> */}
						<div className="pb-63">
							<a href="../html/detail-blog1.html" className="a1-blog">
								<div className="img-blog">
									<img src={blog6} alt=""/>
								</div>
								<div className="d-blog">
									<span className="sp1-blog text-center">
										16
									</span>

									<span className="sp2-blog text-center">
										Jan2018
									</span>
								</div>
							</a>

							<div className="w-blog">
								<h4 className="i-blog">
									<a href="blog-detail.html" className="a2-blog">
										5 Winter-to-Spring Fashion Trends to Try Now
									</a>
								</h4>

								<p className="p-blog">
									className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								</p>

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
							</div>
						</div>

						{/* <!-- Pagination --> */}
						<div className="pagina1">
							<a href="#" className="pag1 active-pag">
								1
							</a>

							<a href="#" className="pag1">
								2
							</a>
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
  )
}

export default BlogBlog