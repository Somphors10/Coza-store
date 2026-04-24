import React from "react";
import { Link } from "react-router-dom";
import { getHomeBlogPosts } from "../data/blogPosts";

const OurBlog = () => {
  const posts = getHomeBlogPosts();

  return (
    <section className="our-blog" aria-labelledby="our-blog-heading">
      <div className="container">
        <header className="our-blog__head">
          <p className="our-blog__eyebrow">From the journal</p>
          <h2 id="our-blog-heading" className="our-blog__title">
            Our blog
          </h2>
          <p className="our-blog__lead">
            Routines, style notes, and stories from the Coza community.
          </p>
        </header>

        <div className="row g-4 our-blog__grid">
          {posts.map((post) => (
            <div key={post.id} className="col-sm-6 col-lg-4">
              <article className="our-blog-card">
                <Link to={`/blog/post/${post.id}`} className="our-blog-card__media">
                  <img src={post.image} alt={post.title} />
                  <span className="our-blog-card__shine" aria-hidden="true" />
                </Link>

                <div className="our-blog-card__body">
                  <div className="our-blog-card__meta">
                    <span className="our-blog-card__author">{post.author}</span>
                    <span className="our-blog-card__dot" aria-hidden="true">
                      ·
                    </span>
                    <time dateTime={post.dateISO}>{post.dateDisplay}</time>
                  </div>

                  <h3 className="our-blog-card__title">
                    <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="our-blog-card__excerpt">{post.excerpt}</p>

                  <Link to={`/blog/post/${post.id}`} className="our-blog-card__read">
                    Read article
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
