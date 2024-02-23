import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="about group">
          <h2>Kalimashe.</h2>
        </div>

        <div className="info group">
          <div>
            <a href="#home">Welcome</a>
          </div>
          <div>
            <a href="#about">Meet Likhaya</a>
          </div>
          <div>
            <a href="#contact">Talent Bank</a>
          </div>
          <div>
            <a href="#skills">Creations</a>
          </div>
          <div>
            <a href="#contact">Let's get in touch</a>
          </div>
        </div>

        <div className="follow group">
          <div>
            <a
              href="https://www.linkedin.com/in/likhaya-kalimashe-b86b69200/"
              target="_blank"
            >
              <img src="src/images/linkedin.png" />
            </a>
          </div>
          <div>
            <a href="https://github.com/likeLikhaya" target="_blank">
              <img src="src/images/github.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright group">
        <p>© 2024 by Likhaya Kalimashe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
