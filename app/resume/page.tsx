import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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

      <section style={{ flex: 1, display: "flex", flexDirection: "column", padding: "40px 0 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <h1 style={{ fontSize: "36px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px" }}>
              Resume / CV
            </h1>
            <p style={{ fontSize: "12px", color: "#666666", textTransform: "uppercase", letterSpacing: "2px", marginTop: "4px" }}>
              Yashwant Jichkar — Document Viewer
            </p>
          </div>
          <div>
            <a
              href="/Resume_F.pdf"
              download="Resume_F.pdf"
              className="btn-download"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#ffffff",
                color: "#000000",
                textDecoration: "none",
                fontWeight: 900,
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                border: "2px solid #ffffff",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              Download PDF ↓
            </a>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            border: "2px solid var(--accent)",
            background: "#111111",
            minHeight: "750px",
            position: "relative",
            width: "100%",
          }}
        >
          <iframe
            src="/Resume_F.pdf"
            width="100%"
            height="100%"
            style={{ border: "none", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Yashwant Jichkar Resume"
          />
        </div>

      </section>
    </div>
  )
}
