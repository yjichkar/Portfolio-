import Link from "next/link"

export default function Experience() {
  return (
    <div className="container">
      <nav>
        <div className="logo">YJ©</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/works">Projects</Link>
          <Link href="/studio">About</Link>
          <Link href="/journal">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>
          WORK
          <br />
          EXPERIENCE
        </h1>
        <div className="hero-meta">
          <p>
            Professional experience in business analysis, data analytics, and reporting automation. 
            Contributing to data-driven decision making and process optimization.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 0", borderTop: "1px solid var(--accent)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "80px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Internship
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "10px" }}>Digitize Matrix</h3>
              <p style={{ fontSize: "14px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
                Business Analyst Intern | January 2025 - June 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="service-row" style={{ cursor: "default" }}>
          <span className="service-num">01</span>
          <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>Automated manual reporting workflows using Python scripts, reducing operational effort by 40%</h2>
          <span className="service-num"></span>
        </div>
        <div className="service-row" style={{ cursor: "default" }}>
          <span className="service-num">02</span>
          <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>Analysed customer acquisition and engagement funnels to identify drop-off points, contributing to a 15% reduction in CPL</h2>
          <span className="service-num"></span>
        </div>
        <div className="service-row" style={{ cursor: "default" }}>
          <span className="service-num">03</span>
          <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>Performed data validation and preprocessing to maintain data accuracy, consistency, and audit-ready datasets</h2>
          <span className="service-num"></span>
        </div>
        <div className="service-row" style={{ cursor: "default" }}>
          <span className="service-num">04</span>
          <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>Documented business requirements and translated them into functional specifications for dashboards</h2>
          <span className="service-num"></span>
        </div>
        <div className="service-row" style={{ cursor: "default" }}>
          <span className="service-num">05</span>
          <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>Worked with clients across e-commerce and service-based industries, supporting campaign reporting</h2>
          <span className="service-num"></span>
        </div>
        <div className="service-row" style={{ cursor: "default" }}>
          <span className="service-num">06</span>
          <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>Collaborated with cross-functional teams to gather, validate, and organize business data</h2>
          <span className="service-num"></span>
        </div>
      </section>

      <section style={{ padding: "100px 0", borderTop: "1px solid var(--accent)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Key Impact
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div>
                <h3 style={{ fontSize: "64px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>40%</h3>
                <p style={{ fontSize: "14px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Reduction in operations time through automation
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: "64px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>15%</h3>
                <p style={{ fontSize: "14px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Reduction in CPL through funnel analysis
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: "64px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>1.8M+</h3>
                <p style={{ fontSize: "14px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Transactions analyzed for fraud detection
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: "64px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>2K+</h3>
                <p style={{ fontSize: "14px", color: "#888888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Campaign records analyzed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="cta">
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>
              LET&apos;S
              <br />
              CONNECT
            </h2>
          </Link>
        </div>
        <div className="footer-bottom">
          <div>Yashwant Jichkar © 2025</div>
          <div>Pune, India</div>
          <div>
            <a href="https://github.com/yjichkar" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", marginRight: "20px" }}>GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
