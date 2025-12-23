import React from "react";
import './Contact.css';
export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="section-title">Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Have a question or project in mind? Reach out and our team will
            get back to you promptly.
          </p>

          <div className="contact-item">
            <strong>Phone</strong>
            <span>+1 (469) 712 7575 </span>
          </div>

          <div className="contact-item">
            <strong>Email</strong>
            <span>renvikconsulting@gmail.com</span>
          </div>

          <div className="contact-item">
            <strong>Address</strong>
            <span>Frisco, Texas - 75036</span>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message..." required />
            </div>

            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
         <div className="contact-map" aria-hidden={false}>
            <label className="visually-hidden">Company location</label>
            <iframe
              title="Renvik Consulting location"
              src="https://maps.google.com/maps?q=frisco%20texas&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
    </section>
  );
}
