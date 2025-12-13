import './Services.css';
export default function Services() {
  return (
    <div className="services-page">

      {/* Section Heading */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Services</h2>

          {/* Cards Grid */}
          <div className="services-grid">

            {/* CARD 1 */}
            <div className="service-card">
              <img
                src="//img1.wsimg.com/isteam/stock/277/:/cr=t:12.29%25,l:0%25,w:100%25,h:75.42%25/rs=w:365,h:182.5,cg:true"
                alt="Technical Talent Staffing"
                className="card-img"
              />

              <h3>Technical Talent Staffing</h3>
              <h3>Training and Skill Development</h3>
              <h3>Technical Talent Staffing</h3>

              <p>
                At Renvik, we believe that finding the right talent is essential for any business's success.
                That’s why we’re dedicated to providing our clients with the best possible service. We have a
                team of experienced staffing professionals who understand that every business is different,
                and we tailor our services to meet each client’s unique needs.
              </p>

              <ul>
                <li>Temporary Staffing</li>
                <li>Permanent Staffing</li>
                <li>Staff Augmentation</li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="service-card">
              <img
                src="//img1.wsimg.com/isteam/stock/B29aAEW/:/cr=t:12.54%25,l:0%25,w:100%25,h:74.91%25/rs=w:365,h:182.5,cg:true"
                alt="Software Consulting"
                className="card-img"
              />

              <h3>Software Consulting</h3>
              <h3>Training and Skill Development</h3>
              <h3>Technical Talent Staffing</h3>

              <ul>
                <li>Technology Assessment</li>
                <li>Strategy Development</li>
                <li>Software Selection</li>
                <li>Process Improvement</li>
              </ul>
            </div>

            {/* CARD 3 */}
            <div className="service-card">
              <img
                src="//img1.wsimg.com/isteam/stock/7772/:/cr=t:12.95%25,l:0%25,w:100%25,h:74.1%25/rs=w:365,h:182.5,cg:true"
                alt="Training and Skill Development"
                className="card-img"
              />

              <h3>Training and Skill Development</h3>
              <h3>Training and Skill Development</h3>
              <h3>Training and Skill Development</h3>

              <ul>
                <li>
                  Customized Training Programs to enhance your team’s technical skills, focusing on industry
                  best practices and new technologies.
                </li>
                <li>
                  Continuous Learning initiatives to keep your team updated on emerging tools and trends.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
