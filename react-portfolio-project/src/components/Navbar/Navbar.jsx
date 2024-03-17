import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");

    function toggleNavigation() {
      navigation.classList.toggle("active");
    }

    menuBtn.addEventListener("click", toggleNavigation);
    closeBtn.addEventListener("click", toggleNavigation);

    return () => {
      menuBtn.removeEventListener("click", toggleNavigation);
      closeBtn.removeEventListener("click", toggleNavigation);
    };
  }, []);

  return (
    <header>
      <div className="nav-bar">
        <NavLink to="/" className="logo">
          Kalimashe
        </NavLink>
        <div className="navigation">
          <div className="nav-items">
            <div className="nav-close-btn"></div>
            <NavLink to="/" className="nav-item" activeClassName="active">
              Welcome
            </NavLink>
            <NavLink to="/about" className="nav-item">
              Meet Likhaya
            </NavLink>
            <NavLink to="/skills" className="nav-item">
              Talent Bank
            </NavLink>
            <NavLink to="/contact" className="nav-item">
              Creations
            </NavLink>
            <NavLink to="/contact" className="nav-item">
              Let's get in touch
            </NavLink>
          </div>
        </div>
        <div className="nav-menu-btn"></div>
      </div>
    </header>
  );
}

export default Navbar;
