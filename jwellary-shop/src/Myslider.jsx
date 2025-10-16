import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import earringImg from './assets/earring.jpeg';
import necklaceImg from "./assets/necklace.jpeg";
import ringImg from "./assets/ring.jpeg";
import jwellery2 from "../src/assets/jwellery2.jpeg"
import jwellery1 from "../src/assets/jwellery1.jpeg"



const Myslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <div className="container " style={{ backgroundColor: 'black' }}>
      <div className="slider-container ">
        <Slider {...settings}>
          <div className="slide">
            <img src={jwellery2} alt="slide1" />
          </div>
          <div className="slide">
            <img src={jwellery1} alt="slide2" />
          </div>
          <div className="slide">
            <img src={ringImg} alt="slide3" />
          </div>
        </Slider>

        {/* Text + buttons — overlay style */}
        <div className="slide-content">
          <h3 className="gold">Gold Shop Jwellary</h3>
          <h4>Elegant pieces curated for weddings, gifting and everyday luxury.</h4>
          <p>Crafted in certified gold with care</p>
          <div className="buttons">
            <button className="btn-start">Get Started</button>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myslider;
