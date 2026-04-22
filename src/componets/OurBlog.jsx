import React from 'react'
import blog1 from '../assets/blog-01.jpg'
import blog2 from '../assets/blog-02.jpg'
import blog3 from '../assets/blog-03.jpg'
import { Link } from 'react-router-dom'

const OurBlog = () => {
  return (
    <section class="sec-blog ">
    <div class="container">
        <div class="pb-66">
            <h3 class="our1-blog respon1">
                Our Blogs
            </h3>
        </div>

        <div class="row">
            <div class="col-sm-6 col-md-4 pb-40">
                <div class="blog-item">
                    <div class="hov-img0">
                        <Link to='/detailBlogCard'>
                            <img src={blog1} alt=""/>
                        </Link>
                    </div>

                    <div class="pt-15">
                        <div class="di-7">
                            <span class="mr-3">
                                <span class="cl4">
                                    By
                                </span>

                                <span class="cl5">
                                    Nancy Ward
                                </span>
                            </span>

                            <span>
                                <span class="cl4">
                                    on
                                </span>

                                <span class="cl5">
                                    July 22, 2017 
                                </span>
                            </span>
                        </div>

                        <h4 class="pb-12">
                            <Link href="../html/detail-blog2.html" class="a-in">
                                8 Inspiring Ways to Wear Dresses in the Winter
                            </Link>
                        </h4>

                        <p class="p-dis">
                            Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-md-4 pb-40">
                <div class="blog-item">
                    <div class="hov-img0">
                        <Link to='/detailBlogCard'>
                            <img src={blog2} alt=""/>
                        </Link>
                    </div>

                    <div class="pt-15">
                        <div class="di-7">
                            <span class="mr-3">
                                <span class="cl4">
                                    By
                                </span>

                                <span class="cl5">
                                    Nancy Ward
                                </span>
                            </span>

                            <span>
                                <span class="cl4">
                                    on
                                </span>

                                <span class="cl5">
                                    July 18, 2017
                                </span>
                            </span>
                        </div>

                              <h4 className="pb-12">
                                  <Link to="/detailBlogCard" className="a-in">
                                      The Great Big List of Men&apos;s Gifts for the Holidays
                                  </Link>
                              </h4>

                        <p class="p-dis">
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-md-4 pb-40">
                <div class="blog-item">
                    <div class="hov-img0">
                        <Link to='/detailBlogCard'>
                            <img src={blog3} alt=""/>
                        </Link>
                    </div>

                    <div class="pt-15">
                        <div class="di-7">
                            <span class="mr-3">
                                <span class="cl4">
                                    By
                                </span>

                                <span class="cl5">
                                    Nancy Ward
                                </span>
                            </span>

                            <span>
                                <span class="cl4">
                                    on
                                </span>

                                <span class="cl5">
                                    July 2, 2017 
                                </span>
                            </span>
                        </div>

                        <h4 class="pb-12">
                            <Link href="#" class="a-in">
                                5 Winter-to-Spring Fashion Trends to Try Now
                            </Link>
                        </h4>

                        <p class="p-dis">
                            Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurBlog