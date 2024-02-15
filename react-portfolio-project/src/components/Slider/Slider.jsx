import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div id="slider">
      <input type="radio" name="slider" id="slide1" defaultChecked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <div id="slides">
        <div id="overflow">
          <div className="inner">
            <div className="slide slide_1">
              <div className="slide-content">
                <h2>Slide 1</h2>
                <p>Content for slide 1</p>
              </div>
            </div>
            <div className="slide slide_2">
              <div className="slide-content">
                <h2>Slide 2</h2>
                <p>Content for slide 2</p>
              </div>
            </div>
            <div className="slide slide_3">
              <div className="slide-content">
                <h2>Slide 3</h2>
                <p>Content for slide 3</p>
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
