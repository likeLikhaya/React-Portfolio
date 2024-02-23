import React, { useEffect } from "react";
import "./Navbar.css";

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
            <a href="#about">Meet Likhaya</a>
            <a href="#skills">Talent Bank</a>
            <a href="#contact">Creations</a>
            <a href="#contact">Let's get in touch</a>
          </div>
        </div>
        <div className="nav-menu-btn"></div>
      </div>
    </header>
  );
}

export default Navbar;
