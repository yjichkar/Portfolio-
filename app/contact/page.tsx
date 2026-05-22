import Link from "next/link"

export default function Contact() {
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
          GET IN
          <br />
          TOUCH
        </h1>
        <div className="hero-meta">
          <p>
            Interested in discussing data analytics, business intelligence, or potential opportunities? 
            I&apos;m always open to connecting with like-minded professionals and exploring new challenges.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 0", borderTop: "1px solid var(--accent)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px" }}>
          <div style={{ gridColumn: "1 / span 12" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "60px", textTransform: "uppercase" }}>
              Contact Info
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px" }}>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  Email
                </p>
                <a href="mailto:jichkaryashwant@gmail.com" style={{ fontSize: "20px", color: "#ffffff", textDecoration: "none", wordBreak: "break-all" }}>
                  jichkaryashwant@gmail.com
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  Location
                </p>
                <p style={{ fontSize: "20px", color: "#ffffff" }}>
                  Pune, India
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "15px",
                  }}
                >
                  Connect
                </p>
                <div style={{ display: "flex", gap: "20px" }}>
                  <a href="https://github.com/yjichkar" target="_blank" rel="noopener noreferrer" style={{ fontSize: "18px", color: "#ffffff", textDecoration: "none", borderBottom: "1px solid #ffffff", paddingBottom: "2px" }}>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "18px", color: "#ffffff", textDecoration: "none", borderBottom: "1px solid #ffffff", paddingBottom: "2px" }}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="cta">
          <h2>
            OPEN TO
            <br />
            OPPORTUNITIES
          </h2>
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
