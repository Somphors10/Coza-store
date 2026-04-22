import React from "react";
import { Link } from "react-router-dom";
import blog4 from "../assets/blog-04.jpg";
import productMin1 from "../assets/product-min-01.jpg";
import productMin2 from "../assets/product-min-02.jpg";
import productMin3 from "../assets/product-min-03.jpg";
import Footer from "./Footer";

const DetailBlogCard = () => {
	return (
		<>
			<section className="blog-hero">
				<div className="container">
					<div className="blog-hero-inner">
						<h1 className="blog-hero-title">Blog</h1>
					</div>
				</div>
			</section>

			<section className="blog blog-detail">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-9">
							<article className="detail-article">
								<div className="detail-media">
									<img src={blog4} alt="Blog cover" />
									<div className="detail-date">
										<div className="day">22</div>
										<div className="month">Jan 2018</div>
									</div>
								</div>

								<div className="detail-body">
									<div className="detail-meta">
										<span>
											<span className="muted">By</span> Admin
										</span>
										<span className="sep">|</span>
										<span>StreetStyle, Fashion, Couple</span>
										<span className="sep">|</span>
										<span>8 Comments</span>
									</div>

									<h2 className="detail-title">
										8 Inspiring Ways to Wear Dresses in the Winter
									</h2>

									<div className="detail-content">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus
											sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum.
										</p>
										<p>
											Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit
											amet suscipit in, mattis imperdiet enim.
										</p>
									</div>

									<div className="detail-tags">
										<span className="detail-tags-label">Tags</span>
										<div className="detail-tags-list">
											<Link href="#!" className="tag-chip">Streetstyle</Link>
											<Link href="#!" className="tag-chip">Crafts</Link>
										</div>
									</div>

									<div className="detail-comments">
										<h3 className="detail-comments-title">Leave a Comment</h3>
										<p className="detail-comments-note">
											Your email address will not be published. Required fields are marked *
										</p>

										<form className="detail-form">
											<textarea className="detail-textarea" placeholder="Comment..." />

											<div className="detail-grid">
												<input className="detail-input" type="text" placeholder="Name *" />
												<input className="detail-input" type="email" placeholder="Email *" />
											</div>

											<input className="detail-input" type="text" placeholder="Website" />

											<button type="button" className="detail-submit">
												Post Comment
											</button>
										</form>
									</div>

									<div className="detail-back">
										<Link to="/blog" className="detail-back-link">
											← Back to blog
										</Link>
									</div>
								</div>
							</article>
						</div>

						<div className="col-lg-3">
							<aside className="detail-sidebar">
								<div className="sidebar-card">
									<div className="s-search">
										<input className="in-search" type="text" placeholder="Search" />
										<button className="bu-search" type="button" aria-label="Search">
											<i className="fa-solid fa-magnifying-glass"></i>
										</button>
									</div>
								</div>

								<div className="sidebar-card">
									<h4 className="m-cate">Categories</h4>
									<ul className="mar-r-10">
										{["Fashion", "Beauty", "Street Style", "Life Style", "DIY & Crafts"].map((c) => (
											<li key={c} className="bor18">
												<Link href="#!" className="a-fash">{c}</Link>
											</li>
										))}
									</ul>
								</div>

								<div className="sidebar-card">
									<h4 className="m-cate">Featured Products</h4>
									<ul className="mar-r-10">
										<li className="li-fea">
											<Link href="#!" className="a-fea">
												<img src={productMin1} alt="" />
											</Link>
											<div className="di-white">
												<Link href="#!" className="a-white">White Shirt With Pleat Detail Back</Link>
												<span className="s-doll">$19.00</span>
											</div>
										</li>
										<li className="li-fea">
											<Link href="#!" className="a-fea">
												<img src={productMin2} alt="" />
											</Link>
											<div className="di-white">
												<Link href="#!" className="a-white">Converse All Star Hi Black Canvas</Link>
												<span className="s-doll">$39.00</span>
											</div>
										</li>
										<li className="li-fea">
											<Link href="#!" className="a-fea">
												<img src={productMin3} alt="" />
											</Link>
											<div className="di-white">
												<Link href="#!" className="a-white">Nixon Porter Leather Watch In Tan</Link>
												<span className="s-doll">$17.00</span>
											</div>
										</li>
									</ul>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default DetailBlogCard;