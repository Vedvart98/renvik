import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-root font-muli">
      {/* About Us Main Section */}
      <section
        id="about-section"
        className="widget widget-about widget-about-main"
        aria-label="About Us"
      >
        <div className="widget-inner" role="region" aria-label="Split layout">
          <div className="split-container">
            <div className="split-item">
              <section className="section-split">
                <div className="section-container">
                  {/* Page Title */}
                  <div className="block-title">
                    <h4 className="section-heading">
                      <span>About Us</span>
                    </h4>
                    <hr className="section-divider" />
                  </div>

                  {/* About Description */}
                  <div className="content-block">
                    <div className="content-text">
                      <p>
                        At Renvik Consulting, we specialize in providing
                        comprehensive software consulting and staffing services to
                        businesses of all sizes. With a team of experienced
                        professionals, we offer tailored solutions to help clients
                        achieve their technology goals.
                      </p>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="content-block">
                    <div className="content-basic">
                      <h4 className="section-heading small">Mission</h4>
                      <div className="text">
                        <p>
                          Our mission is to empower businesses with the right
                          consulting and staffing solutions to drive innovation and
                          digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vision */}
                  <div className="content-block">
                    <div className="content-basic">
                      <h4 className="section-heading small">Vision</h4>
                      <div className="text">
                        <p>
                          Our vision is to become a leading consulting and staffing
                          firm recognized for expertise and impact on businesses
                          worldwide.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Values */}
                  <div className="content-block">
                    <div className="content-basic">
                      <h4 className="section-heading small">Values</h4>
                      <div className="text">
                        <p>
                          We prioritize excellence, integrity, collaboration,
                          innovation, and inclusivity. These values guide every
                          aspect of our work and client relationships.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
