"use client"

import Link from "next/link"
import { useState } from "react"
import ServiceModal from "@/components/ServiceModal"

const skillsData = [
  {
    number: "01",
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights using advanced analytical techniques. Specializing in KPI tracking, statistical analysis, and exploratory data analysis to drive business decisions.",
    details: [
      "Power BI Dashboard Development",
      "Tableau Visualizations",
      "Statistical Analysis & EDA",
      "KPI Tracking & Reporting",
      "Data-Driven Decision Making",
    ],
  },
  {
    number: "02",
    title: "SQL & Databases",
    description:
      "Expert in writing complex SQL queries including joins, CTEs, window functions, and aggregations. Experienced with PostgreSQL and data warehousing concepts.",
    details: [
      "Complex SQL Queries",
      "Database Optimization",
      "Data Warehousing",
      "ETL Pipeline Development",
      "Data Validation & Quality",
    ],
  },
  {
    number: "03",
    title: "Python & Automation",
    description:
      "Building automated reporting workflows and data pipelines using Python. Proficient in Pandas, NumPy for data manipulation and analysis.",
    details: [
      "Pandas & NumPy",
      "Reporting Automation",
      "Data Transformation",
      "Workflow Optimization",
      "Script Development",
    ],
  },
  {
    number: "04",
    title: "Cloud & Platforms",
    description:
      "Hands-on experience with cloud platforms and BI tools. Certified in Microsoft Fabric and Oracle Analytics Cloud.",
    details: [
      "AWS (S3, Athena, Glue)",
      "Oracle Analytics Cloud",
      "Alteryx Workflows",
      "Microsoft Fabric",
      "Git Version Control",
      "Azure Databricks",
    ],
  },
]

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skillsData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (skill: (typeof skillsData)[0]) => {
    setSelectedSkill(skill)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedSkill(null), 300)
  }

  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">YJ©</div>
          <div className="nav-links">
            <Link href="/works">Projects</Link>
            <Link href="/studio">About</Link>
            <Link href="/journal">Experience</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <section className="hero">
          <h1>
            YASHWANT
            <br />
            JICHKAR
          </h1>
          <div className="hero-meta">
            <p>
              Business Analyst & Data Analytics enthusiast with hands-on experience in reporting automation, data validation,
              financial analytics, and KPI reporting using SQL, Python, and Power BI. Transforming data into actionable insights
              to drive business decisions.
            </p>
          </div>
        </section>



        <section className="services">
          {skillsData.map((skill) => (
            <div
              key={skill.number}
              className="service-row"
              onClick={() => openModal(skill)}
              style={{ cursor: "pointer" }}
            >
              <span className="service-num">{skill.number}</span>
              <h2>{skill.title}</h2>
              <span className="service-num">↗</span>
            </div>
          ))}
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

      <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedSkill} />
    </>
  )
}
