import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="nav-bar">
        <a href="#" className="logo">
          Kalimashe
        </a>
        <div className="navigation">
          <div className="nav-items">
            <div className="nav-close-btn"></div>
            <a className="active" href="#home">
              Meet Likhaya
            </a>
            <a href="#about">Talent Bank</a>
            <a href="#skills">Creations</a>
            <a href="#contact">Let's get in touch</a>
          </div>
        </div>
        <div className="nav-menu-btn"></div>
      </div>
    </header>
  );
};

export default Navbar;
