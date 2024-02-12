import React from "react";

const CarouselItem = ({ items }) => {
  return (
    <div className="carousel-item">
      <div></div>
      <img src={items.icon.default} alt="" className="carousel-img" />
      <div className="carousel-item-text"></div>
    </div>
  );
};

export default CarouselItem;
