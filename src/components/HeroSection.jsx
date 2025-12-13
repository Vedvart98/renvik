import React from "react";
import { Link } from "react-router-dom";
import './Hero.css';
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        {/* <img
          src="/logo.jpeg"
          alt="Renvik Consulting"
          className="hero-logo"
        /> */}

        <h1>Experienced, Personalized IT Consulting</h1>

        <p>
          We bring more than a decade of experience to guide you through your IT
          transformation journey with confidence.
        </p>

        <Link to="/contact-us" className="btn-primary">
          Book Now
        </Link>
      </div>

      <div className="hero-right">
        <img
          src="/it_consult.jpg"
          alt="IT Consulting"
          className="hero-image"
        />
      </div>
    </section>
  );
}
