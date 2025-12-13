import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className={`nav-container ${open ? "nav-open" :""}`}>
        <Link to="/" className="logo">
          <img
            src="/logo.jpeg"
            alt="Renvik Consulting"
            className="logo-img"
          />
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="mobile-menu-icon" aria-expanded={open} aria-label={open ? "close menu": "Open menu"} onClick={()=>setOpen(prev=>!prev)}>
          {/* You can add hamburger menu functionality */}
          ☰
        </div>
      </div>
    </nav>
  );
}
