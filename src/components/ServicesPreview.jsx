import React from "react";
import { Link } from "react-router-dom";
import './ServicesPreview.css';
export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <h2>Our Services</h2>

      <div className="services-grid">
        <div className="service-card">
          <img src="/consult.jpg" alt="Consulting" />
          <h3>IT Consulting</h3>
          <p>Expert guidance to transform your business.</p>
        </div>

        <div className="service-card">
          <img src="/cloud.jpg" alt="Cloud Solutions" />
          <h3>Cloud Services</h3>
          <p>Secure, scalable, and cost-effective cloud solutions.</p>
        </div>

        <div className="service-card">
          <img src="planning.jpg" alt="Strategy" />
          <h3>IT Strategy & Planning</h3>
          <p>Roadmaps that align your technology with your goals.</p>
        </div>
      </div>

      <Link to="/services" className="btn-secondary">
        View All Services
      </Link>
    </section>
  );
}
