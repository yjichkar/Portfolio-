"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function ResumeWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const progress = window.scrollY / docHeight
      setScrollProgress(progress)

      // If open and NOT hovered, sync the widget's internal scroll position
      if (isExpanded && !isHovered && scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const maxScroll = container.scrollHeight - container.clientHeight
        container.scrollTop = progress * maxScroll
      }
    }

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    // Run once on mount / state change to position correctly
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isExpanded, isHovered])

  // Reset scroll sync if hover is removed
  const handleMouseLeave = () => {
    setIsHovered(false)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight > 0 && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const progress = window.scrollY / docHeight
      const maxScroll = container.scrollHeight - container.clientHeight
      container.scrollTo({
        top: progress * maxScroll,
        behavior: "smooth",
      })
    }
  }

  const scrollPercentageStr = `${Math.round(scrollProgress * 100)}%`

  return (
    <div className={`resume-widget-root ${isExpanded ? "expanded" : "collapsed"}`}>
      {/* MINIMIZED BADGE CONTAINER */}
      {!isExpanded && (
        <div className="resume-badge-container">
          <Link
            href="/resume"
            className="resume-badge"
            aria-label="View Resume PDF"
          >
            <span className="badge-dot"></span>
            <span className="badge-text">RESUME PDF ↗</span>
          </Link>
          <button
            onClick={() => setIsExpanded(true)}
            className="resume-toggle-expand"
            title="Open Interactive Tracker"
          >
            TRACKER {scrollPercentageStr}
          </button>
        </div>
      )}

      {/* EXPANDED PANE */}
      {isExpanded && (
        <div
          className="resume-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Header */}
          <div className="resume-header">
            <div className="header-title">
              <span className="title-dot"></span>
              <h3>YASHWANT JICHKAR</h3>
              <p className="subtitle">RESUME TRACKER</p>
            </div>
            <div className="header-actions">
              <Link
                href="/resume"
                className="btn-pdf-header"
                title="View PDF"
                onClick={() => setIsExpanded(false)}
              >
                PDF ↗
              </Link>
              <button
                onClick={() => setIsExpanded(false)}
                className="btn-close"
                title="Collapse"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Indicator banner when manual scroll is enabled */}
          {isHovered && (
            <div className="manual-scroll-indicator">
              <span>⚡ SCROLL-SYNC PAUSED — MANUAL SCROLL ON</span>
            </div>
          )}

          {/* Scrollable Content */}
          <div className="resume-scroll-container" ref={scrollContainerRef}>
            {/* Intro */}
            <div className="resume-section">
              <div className="section-label">PROFILE</div>
              <h4 className="role-title">Business Analyst & Data Analytics</h4>
              <p className="section-text">
                Analyst specializing in data analytics, Power BI dashboard development, SQL, Python, reporting automation, and data-driven insights.
              </p>
            </div>

            {/* Experience */}
            <div className="resume-section">
              <div className="section-label">EXPERIENCE</div>
              <div className="item-title">Digitize Matrix</div>
              <div className="item-meta">BA Intern | Jan 2025 - Jun 2025</div>
              <ul className="item-bullets">
                <li>Automated manual reporting using Python, saving 40% time.</li>
                <li>Conducted funnel analysis yielding a 15% reduction in CPL.</li>
                <li>Validated and preprocessed data for audit-ready accuracy.</li>
                <li>Documented functional specifications for stakeholder dashboards.</li>
              </ul>
            </div>

            {/* Education */}
            <div className="resume-section">
              <div className="section-label">EDUCATION</div>
              <div className="item-title">Savitribai Phule Pune University</div>
              <div className="item-meta">BE in IT | Oct 2022 - May 2026</div>
              <p className="section-text">
                Smt. Kashibai Navale College of Engineering
                <br />
                CGPA: ~8.2
              </p>
            </div>

            {/* Skills */}
            <div className="resume-section">
              <div className="section-label">TECHNICAL SKILLS</div>
              <div className="skills-grid">
                <div className="skill-cat">
                  <strong>Databases:</strong> PostgreSQL (CTEs, Window Fns, Joins)
                </div>
                <div className="skill-cat">
                  <strong>Code:</strong> Python (Pandas, NumPy), Git
                </div>
                <div className="skill-cat">
                  <strong>BI & Visuals:</strong> Power BI (DAX, modeling), Tableau
                </div>
                <div className="skill-cat">
                  <strong>Cloud/Other:</strong> AWS (S3, Athena, Glue), Fabric, Alteryx
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume-section">
              <div className="section-label">CERTIFICATIONS</div>
              <div className="cert-item">
                <span className="cert-badge">Microsoft</span> DP-600 Fabric Analytics Engineer
              </div>
              <div className="cert-item" style={{ marginTop: "8px" }}>
                <span className="cert-badge">Oracle</span> OAC 2025 Professional (1Z0-1041-25)
              </div>
            </div>

            {/* Footer action / quick link */}
            <div className="resume-section footer-links-section" style={{ borderBottom: "none", paddingBottom: 0 }}>
              <div className="section-label">LINKS</div>
              <div className="resume-widget-actions">
                <Link
                  href="/resume"
                  className="widget-link"
                  onClick={() => setIsExpanded(false)}
                >
                  View PDF ↗
                </Link>

                <Link href="/journal" className="widget-link" onClick={() => setIsExpanded(false)}>
                  Full Experience ↗
                </Link>
                <Link href="/studio" className="widget-link" onClick={() => setIsExpanded(false)}>
                  Education ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Sync Progress Bar at bottom of card */}
          <div className="resume-sync-track">
            <div
              className="resume-sync-bar"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}
