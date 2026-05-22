import Link from "next/link"

export default function Studio() {
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

      <section style={{ padding: "120px 0 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "100px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              About Me
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "5px" }}>
                Data Analytics & Finance Professional
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8", marginBottom: "20px" }}>
                I&apos;m an Analyst with hands-on experience in reporting automation, business analysis, data validation, financial analytics, and KPI reporting. I enjoy transforming complex information into actionable insights that help businesses make smarter, data-informed decisions.
              </p>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8", marginBottom: "20px" }}>
                From building automated reporting pipelines to creating dashboards for stakeholders, I enjoy solving problems where data meets strategy. I aim to bring accuracy to every dataset and clarity to every report.
              </p>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8" }}>
                I&apos;m also passionate about AI and emerging technologies, actively integrating AI tools into analytics workflows while continuously learning about machine learning, automation, and modern data solutions to solve real-world business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", borderTop: "1px solid var(--accent)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "100px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Education
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "5px" }}>Savitribai Phule Pune University</h3>
              <p style={{ fontSize: "16px", color: "#888888", marginBottom: "20px" }}>Smt. Kashibai Navale College of Engineering</p>
              <p style={{ fontSize: "14px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                Bachelor of Engineering in Information Technology (<i>CGPA</i>~8.2)
              </p>
              <p style={{ fontSize: "16px", color: "#888888" }}>October 2022 - May 2026</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "15px", color: "#ffffff" }}>Relevant Coursework</h3>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8" }}>
                Database Management Systems, Data Warehousing & Mining, Software Engineering, 
                Business Intelligence, Financial Accounting Fundamentals, Business Finance & Economics
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "100px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Skills
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px" }}>Technical Skills</h3>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8" }}>
                PostgreSQL (Joins, CTEs, Window Functions, Aggregations), Python (Pandas, NumPy)
              </p>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px" }}>Data Analytics & Visualization</h3>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8" }}>
                Power BI (DAX, Power Query, Data Modeling), Tableau, Excel (Pivot Tables, VLOOKUP, Power Query), Statistical Analysis, KPI Tracking, EDA
              </p>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px" }}>Automation & Data Engineering</h3>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8" }}>
                ETL Pipelines, Reporting Automation, Data Validation, Data Transformation, Workflow Optimization, Data Warehousing
              </p>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px" }}>Cloud & Platforms</h3>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8" }}>
                AWS (S3, Athena, Glue), Oracle Analytics Cloud, Alteryx
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px" }}>Tools & Technologies</h3>
              <p style={{ fontSize: "16px", color: "#888888", lineHeight: "1.8" }}>
                Git, Microsoft Office 365 (Excel, SharePoint), ChatGPT, Prompt Engineering, Custom GPTs
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Certifications
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 900, marginBottom: "10px" }}>Microsoft Certified</h3>
              <p style={{ fontSize: "16px", color: "#888888" }}>
                Fabric Analytics Engineer Associate (DP-600)
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 900, marginBottom: "10px" }}>Oracle Certified</h3>
              <p style={{ fontSize: "16px", color: "#888888" }}>
                Oracle Analytics Cloud 2025 Professional (1Z0-1041-25)
              </p>
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
