import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Renvik Consulting</h3>
          <p>Empowering businesses with modern IT solutions.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Renvik Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
