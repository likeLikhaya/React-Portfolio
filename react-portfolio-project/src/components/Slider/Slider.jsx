import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "./Slider.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wrapper">
      <Slider {...settings}>
        <div>
          <div className="carousel-item">
            <img src="src/images/kuyasa.png" alt="Kuyasa Health Center" />
            <div className="text-box">
              <p>
                Kuyasa Health Center is a user-friendly website built with HTML,
                CSS, and JavaScript, offering a seamless experience for
                scheduling appointments with healthcare professionals and
                accessing mental health services.
              </p>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
