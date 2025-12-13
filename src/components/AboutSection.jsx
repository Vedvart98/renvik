import React from "react";
import './AboutSection.css';
export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>Reimagine with us</h2>
        <p>
          Embark on an extraordinary journey with our visionary team of experts,
          who have dedicated over a decade to reimagine and revolutionize the IT
          industry. Let us guide you with unmatched expertise and support.
        </p>

        <h3>Our Experience</h3>
        <p>
          With 10+ years in the IT industry, we provide proven guidance,
          strategies, and solutions to empower your technical team.
        </p>

        <h3>Our Approach</h3>
        <p>
          We identify gaps and opportunities with a consultation approach,
          providing complete project plans, cost analysis, and smooth execution.
        </p>
      </div>

      <div className="about-images">
        <img src="/team_work.jpg" alt="Team work" />
        <img src="/project.jpg" alt="Projects" />
      </div>
    </section>
  );
}
