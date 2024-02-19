import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <div className="socialmedia">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} Likhaya Kalimashe. All rights
              reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
