import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [selectedSlide, setSelectedSlide] = useState("slide1");

  const handleSlideChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  return (
    <div id="slider">
      <input
        type="radio"
        name="slider"
        id="slide1"
        checked={selectedSlide === "slide1"}
        onChange={handleSlideChange}
      />
      <input
        type="radio"
        name="slider"
        id="slide2"
        checked={selectedSlide === "slide2"}
        onChange={handleSlideChange}
      />
      <input
        type="radio"
        name="slider"
        id="slide3"
        checked={selectedSlide === "slide3"}
        onChange={handleSlideChange}
      />
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
                    <img src="src/images/bug-bank.png" alt="Slide 1 Image" />
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
                    <img src="src/images/kuyasa.png" alt="Slide 2 Image" />
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
                    <img
                      src="src/images/tax-calculator.png"
                      alt="Slide 3 Image"
                    />
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
      </div>
      <div id="bullets">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>
    </div>
  );
};

export default Slider;
