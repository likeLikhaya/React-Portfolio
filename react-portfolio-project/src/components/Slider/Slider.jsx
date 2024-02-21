import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div id="slider">
      <input type="radio" name="slider" id="slide1" checked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <div id="slides">
        <div id="overflow">
          <div className="inner">
            <div className="slide slide_1">
              <div className="slide-content">
                <div className="content-wrapper">
                  <div className="text-content">
                    <h2>Slide 1</h2>
                    <p>Content for Slide 1</p>
                  </div>
                  <div className="image-content">
                    <img src="src/images/bug-bank.jpg" alt="Slide 1 Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide_2">
              <div className="slide-content">
                <div className="content-wrapper">
                  <div className="text-content">
                    <h2>Slide 2</h2>
                    <p>Content for Slide 2</p>
                  </div>
                  <div className="image-content">
                    <img src="image_url_2" alt="Slide 2 Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide_3">
              <div className="slide-content">
                <div className="content-wrapper">
                  <div className="text-content">
                    <h2>Slide 3</h2>
                    <p>Content for Slide 3</p>
                  </div>
                  <div className="image-content">
                    <img src="image_url_3" alt="Slide 3 Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide_4">
              <div className="slide-content">
                <div className="content-wrapper">
                  <div className="text-content">
                    <h2>Slide 4</h2>
                    <p>Content for Slide 4</p>
                  </div>
                  <div className="image-content">
                    <img src="image_url_4" alt="Slide 4 Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
      </div>
      <div id="bullets">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
      </div>
    </div>
  );
};

export default Slider;
