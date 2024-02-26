import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skills from "../Skills/Skills";
import "./Navbar.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        const navItem = document.querySelector(`.nav-items a[href="#${id}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      });
    };

    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navItems = document.querySelectorAll(".nav-items a");

    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      navigation.classList.remove("active");
    });

    navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
      });
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuBtn.removeEventListener("click", () => {
        navigation.classList.add("active");
      });
      closeBtn.removeEventListener("click", () => {
        navigation.classList.remove("active");
      });
      navItems.forEach((navItem) => {
        navItem.removeEventListener("click", () => {
          navigation.classList.remove("active");
        });
      });
    };
  }, []);

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
              Welcome
            </a>
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
        <div className="nav-menu-btn"></div>
      </div>
    </header>
  );
}

export default Navbar;
