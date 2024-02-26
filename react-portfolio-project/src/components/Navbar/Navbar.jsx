import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Navbar.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="nav-bar">
        <Link to="/" id="logo" onClick={() => scrollToSection("logo")}>
          Kalimashe
        </Link>
        <div className={`navigation ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-items">
            <div className="nav-close-btn" onClick={toggleMenu}></div>
            <Link to="/" onClick={() => scrollToSection("welcome")}>
              Welcome
            </Link>
            <Link to="/" onClick={() => scrollToSection("about")}>
              Meet Likhaya
            </Link>
            <Link to="/" onClick={() => scrollToSection("skills")}>
              Talent Bank
            </Link>
            <Link to="/" onClick={() => scrollToSection("MyPortfolio")}>
              Creations
            </Link>
            <Link to="/" onClick={() => scrollToSection("contact")}>
              Let's get in touch
            </Link>
          </div>
        </div>
        <div className="nav-menu-btn" onClick={toggleMenu}></div>
      </div>
    </header>
  );
}

export default Navbar;
