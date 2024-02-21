import React from "react";
import SliderComponent from "react-slick"; // Rename the imported Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; // Make sure to adjust the path to your CSS file

const Slider = () => {
  // Rename the local variable to avoid conflict
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
        <div className="new-feature-slider">
          <div className="feature-slide">
            <div className="new-feature-image-wrap">
              <div className="feature-slide-image">
                <img
                  src="http://www.williamsjettenders.com/wp-content/uploads/2015/10/features41.jpg"
                  alt="Feature 1"
                />
              </div>
            </div>
            <div className="center-content">
              <div className="overview-text">
                <h2 className="fakeh1">Cleaner, more powerful engine</h2>
                <span className="divider-wave blue-wave"></span>
                <p>
                  Get improved power, torque and fuel efficiency with the
                  next-generation Textron 850MPE engine. It performs better and
                  is also cleaner, thanks to a catalytic converter, making it
                  one of the cleanest marine engines in the world. Available in
                  a choice of power outputs, there’s also a power reduction
                  switch for jet tender newcomers who want to take it easy at
                  first.
                </p>
              </div>
            </div>
          </div>
          {/* Second slide */}
          <div className="feature-slide">
            <div className="new-feature-image-wrap">
              <div className="feature-slide-image">
                <img
                  src="http://www.williamsjettenders.com/wp-content/uploads/2015/08/325-image3.jpg"
                  alt="Feature 2"
                />
              </div>
            </div>
            <div className="center-content">
              <div className="overview-text">
                <h2 className="fakeh1">High Performance</h2>
                <span className="divider-wave blue-wave"></span>
                <p>
                  Turbojets are known for outperforming almost all comparable
                  craft on the water, whether it is pulling a waterskier,
                  cruising along the coast or whipping in and out of tight
                  corners. With top speeds of up to 53 mph/85 kph, jumping
                  aboard a Turbojet and firing up the engine is a thrill you
                  will never tire of.
                </p>
              </div>
            </div>
          </div>
          {/* Third slide */}
          <div className="feature-slide">
            <div className="new-feature-image-wrap">
              <div className="feature-slide-image">
                <img
                  src="http://www.williamsjettenders.com/wp-content/uploads/2015/08/445-image2.jpg"
                  alt="Feature 3"
                />
              </div>
            </div>
            <div className="center-content">
              <div className="overview-text">
                <h2 className="fakeh1">Supreme Stability &amp; Buoyancy</h2>
                <span className="divider-wave blue-wave"></span>
                <p>
                  The Turbojet design places the helmsman at the stern of the
                  craft in the most secure position for maximum control. By
                  utilising a centrally mounted engine and an inflatable tube,
                  which is positioned close to the water, the Turbojet is
                  supremely stable whether static or running at speed. This
                  makes for easy and comfortable passenger boarding and a safe,
                  enjoyable ride at high speed. What’s more, due to the inherent
                  hull buoyancy, the tender will float even without the
                  inflatable tube.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
