import Link from "next/link"

export default function Works() {
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
          MY
          <br />
          PROJECTS
        </h1>
        <div className="hero-meta">
          <p>
            A collection of data analytics and business intelligence projects. Each project demonstrates my commitment to
            transforming raw data into actionable insights through visualization, analysis, and automation.
          </p>
        </div>
      </section>

      <section className="project-grid">
        <a
          href="https://github.com/yjichkar/Financial-planning-analysis-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card card-1"
          style={{ display: "block", textDecoration: "none", color: "inherit" }}
        >
          <div className="img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
              alt="FP&A Dashboard"
            />
          </div>
          <div className="project-info">
            <h3>Financial Planning & Analysis Dashboard</h3>
            <p>Power BI / SQL / 2025</p>
          </div>
          <div style={{ padding: "20px 0", color: "#888888", fontSize: "14px", lineHeight: "1.8" }}>
            <p>Developed an end-to-end FP&A reporting dashboard to monitor revenue, expenses, profitability, and cash flow trends. Built DAX measures and financial data models to support budgeting, forecasting, and variance analysis.</p>
          </div>
        </a>

        <a
          href="https://github.com/yjichkar/Powered-Job-Application-Optimizer"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card card-2"
          style={{ display: "block", textDecoration: "none", color: "inherit" }}
        >
          <div className="img-wrapper" style={{ aspectRatio: "3/2" }}>
            <img
              src="/job-optimizer.jpg"
              alt="AI-Powered Job Application Optimizer"
            />
          </div>
          <div className="project-info">
            <h3>AI-Powered Job Application Optimizer</h3>
            <p>Python / LLMs / NLP / 2026</p>
          </div>
          <div style={{ padding: "20px 0", color: "#888888", fontSize: "14px", lineHeight: "1.8" }}>
            <p>Co-developed an AI-driven optimization system that analyzes candidate resumes against job descriptions. Computes similarity match scores to bypass Applicant Tracking Systems (ATS) and automates tailored resume adjustments and cover letter generations.</p>
          </div>
        </a>

        <a
          href="https://github.com/yjichkar/Spotify-Advanced-SQL-Project-and-Query-Optimization"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card card-3"
          style={{ display: "block", textDecoration: "none", color: "inherit" }}
        >
          <div className="img-wrapper" style={{ aspectRatio: "1/1" }}>
            <img
              src="/spotify-analysis.png"
              alt="Spotify Analysis"
            />
          </div>
          <div className="project-info">
            <h3>Spotify User Engagement Analysis</h3>
            <p>SQL / Analytics / 2024</p>
          </div>
          <div style={{ padding: "20px 0", color: "#888888", fontSize: "14px", lineHeight: "1.8" }}>
            <p>Identified high-engagement genres and user listening patterns using SQL queries to support content and campaign optimization decisions. Measured KPIs such as plays, skips, popularity, and user interactions.</p>
          </div>
        </a>

        <a
          href="https://github.com/yjichkar/Customer-Campaign-Performance-Analytics-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card card-4"
          style={{ display: "block", textDecoration: "none", color: "inherit" }}
        >
          <div className="img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
              alt="Campaign Analytics"
            />
          </div>
          <div className="project-info">
            <h3>Customer Campaign Performance Analytics</h3>
            <p>SQL / Python / Power BI / 2024</p>
          </div>
          <div style={{ padding: "20px 0", color: "#888888", fontSize: "14px", lineHeight: "1.8" }}>
            <p>Analyzed 2K+ customer marketing campaign records to evaluate conversion rates, engagement trends, and campaign effectiveness. Generated actionable insights through customer segmentation and channel analysis.</p>
          </div>
        </a>

        <a
          href="https://github.com/yjichkar/airbnb-analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card card-5"
          style={{ display: "block", textDecoration: "none", color: "inherit" }}
        >
          <div className="img-wrapper">
            <img
              src="/airbnb-analysis.png"
              alt="Airbnb Analysis"
            />
          </div>
          <div className="project-info">
            <h3>Airbnb Data Analysis</h3>
            <p>SQL / Python / Tableau / 2024</p>
          </div>
          <div style={{ padding: "20px 0", color: "#888888", fontSize: "14px", lineHeight: "1.8" }}>
            <p>Analyzed Airbnb listing data to uncover pricing trends, host behaviors, and customer preferences. Developed python scripts for data cleaning and SQL queries for key metrics aggregation, with interactive dashboards built in Tableau.</p>
          </div>
        </a>


        <a
          href="https://github.com/yjichkar"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card card-github"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            padding: "40px",
            aspectRatio: "1/1",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: 900, textTransform: "uppercase", marginBottom: "15px", letterSpacing: "1px" }}>
            View All Projects
          </h2>
          <p style={{ fontSize: "12px", color: "#888888", textTransform: "uppercase", letterSpacing: "2px", display: "flex", alignItems: "center", gap: "8px" }}>
            Explore GitHub <span style={{ fontSize: "16px" }}>↗</span>
          </p>
        </a>
      </section>

      <section style={{ padding: "100px 0", borderTop: "1px solid var(--accent)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Tools & Technologies
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>Data Analytics & Visualization</h3>
              <p style={{ fontSize: "16px", color: "#888888" }}>Power BI (DAX, Power Query, Data Modeling), Tableau, Excel (Pivot Tables, VLOOKUP, Power Query)</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>Programming & Databases</h3>
              <p style={{ fontSize: "16px", color: "#888888" }}>Python (Pandas, NumPy), PostgreSQL (Joins, CTEs, Window Functions, Aggregations)</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>Cloud & Platforms</h3>
              <p style={{ fontSize: "16px", color: "#888888" }}>AWS (S3, Athena, Glue), Oracle Analytics Cloud, Alteryx</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 900, marginBottom: "10px", color: "#ffffff" }}>Data Engineering</h3>
              <p style={{ fontSize: "16px", color: "#888888" }}>ETL Pipelines, Data Warehousing, Reporting Automation, Data Validation, Azure Databricks</p>
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
