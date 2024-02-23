import React from "react";
import "./Navbar.css";

function Header() {
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
              Home
            </a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="nav-menu-btn"></div>
      </div>
    </header>
  );
}

export default Header;
