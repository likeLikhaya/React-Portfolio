import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Footer.css";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <div class="footer-container">
        <div class="about group">
          <h2>Kalimashe.</h2>
        </div>
        <div class="hr"></div>
        <div class="info group">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/" onClick={() => scrollToSection("welcome")}>
                Welcome
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("about")}>
                Meet Likhaya
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("skills")}>
                Talent Bank
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("MyPortfolio")}>
                Creations
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("contact")}>
                Let's get in touch
              </Link>
            </li>
          </ul>
        </div>

        <div className="follow group">
          <div>
            <a
              href="https://www.linkedin.com/in/likhaya-kalimashe-b86b69200/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
          </div>
          <div>
            <a href={github} target="_blank">
              <img src={github} />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-copyright group">
        <p> © 2024 by Likhaya Kalimashe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
