import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide-02.jpg'
import slide2 from '../assets/slide-03.jpg'
import slide3 from '../assets/slide-04.jpg'
import { Link } from 'react-router-dom';



const Banner = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="carousel-caption color-black style-carousel" style={{textAlign: "left", marginBottom: "150px"}}>
            <div data-aos="fade-down"data-aos-duration="1000">
                <h4 >Women Collection 2018</h4>
            </div>
            <div data-aos="fade-left"data-aos-duration="1000">
                <h1 >New Season</h1>
            </div>
            <div data-aos="fade-right"data-aos-duration="1000">
                <Link  to="/shop">
                    <button className="btn-shop">Shop Now</button>
                </Link>
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="carousel-caption color-black style-carousel" style={{textAlign: "left", marginBottom: "150px"}}>
            <div data-aos="fade-down"data-aos-duration="1000">
                <h4 >Women Collection 2018</h4>
            </div>
            <div data-aos="fade-left"data-aos-duration="1000">
                <h1 >New Season</h1>
            </div>
            <div data-aos="fade-right"data-aos-duration="1000">
                <Link  to="/shop">
                    <button className="btn-shop">Shop Now</button>
                </Link>
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="carousel-caption color-black style-carousel" style={{textAlign: "left", marginBottom: "150px"}}>
            <div data-aos="fade-down"data-aos-duration="1000">
                <h4 >Women Collection 2018</h4>
            </div>
            <div data-aos="fade-left"data-aos-duration="1000">
                <h1 >New Season</h1>
            </div>
            <div data-aos="fade-right"data-aos-duration="1000">
                <Link  to="/shop">
                    <button className="btn-shop">Shop Now</button>
                </Link>
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;