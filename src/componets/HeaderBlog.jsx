import React from "react";
import { Link } from "react-router-dom";

const HeaderBlog = () => {
  return (
    <section className="blog-index-hero" aria-labelledby="blog-index-heading">
      <div className="blog-index-hero__bg" aria-hidden="true" />
      <div className="blog-index-hero__overlay" aria-hidden="true" />
      <div className="container blog-index-hero__content">
        <p className="blog-index-hero__eyebrow">Journal</p>
        <h1 id="blog-index-heading" className="blog-index-hero__title">
          Blog
        </h1>
        <p className="blog-index-hero__lead">
          Skincare tips, style notes, and stories from the Coza community.
        </p>
        <nav className="blog-index-hero__crumb" aria-label="Breadcrumb">
          <Link to="/home1">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="is-current">Blog</span>
        </nav>
      </div>
    </section>
  );
};

export default HeaderBlog;
