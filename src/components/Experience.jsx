import { useState } from 'react'
import Modal from './Modal'
import './Experience.css'

const jobs = [
  {
    company: 'Goldman Sachs',
    role: 'Vice President, Controllers',
    period: 'May 2024 – Present',
    tag: 'Fintech',
    bentoSpan: 2,
    skills: ['Java', 'Python', 'SQL', 'Microservices', 'Distributed Systems', 'REST APIs',
             'Fintech', 'Regulatory Reporting', 'CI/CD', 'Monitoring & Alerting', 'Data Pipelines'],
    highlights: [
      'Lead engineer in Reporting — providing solutions to enhance efficiency across controller functions',
      'Automated generation of regulatory financial reports, eliminating manual effort and reducing error risk',
    ],
  },
  {
    company: 'Microsoft',
    role: 'Software Developer, Microsoft 365',
    period: 'Nov 2017 – Jul 2021',
    tag: 'Enterprise',
    bentoSpan: 1,
    caseStudyId: 'ms-migration',
    skills: ['Java', 'JavaScript', 'TypeScript', 'React', 'Microservices', 'Distributed Systems',
             'REST APIs', 'JMS', 'Enterprise SaaS', 'CI/CD', 'Monitoring & Alerting',
             'Scalable Architecture', 'Cloud Infrastructure'],
    highlights: [
      'Built microservices for seamless M365 + Yammer platform integration',
      'Migrated 300,000 Yammer native guests to M365 guests with full feature parity',
      'Optimized M365 → Yammer sync pipeline: SLA from 1 day → under 5 minutes',
    ],
  },
  {
    company: 'TikTok',
    role: 'Software Developer, E-Commerce & Ads',
    period: 'Jan 2023 – Apr 2024',
    tag: 'E-Commerce',
    bentoSpan: 2,
    skills: ['Java', 'Python', 'TypeScript', 'SQL', 'React', 'Microservices', 'Distributed Systems',
             'RPC', 'REST APIs', 'Apache Hive', 'PostgreSQL', 'ML/Ads Systems', 'CVR Modeling',
             'Data Pipelines', 'E-Commerce', 'Ads Technology', 'Monitoring & Alerting', 'Scalable Architecture'],
    highlights: [
      'Led brand seller onboarding project with scalable, extensible backend integrating Hive, SQL, and RPC data sources',
      'Major contributor to new ML-based search algorithm — significantly enhanced accuracy and reduced zero-result searches',
      'Revitalized seller platform navigation and homepage, achieving a CSAT score of 4.7 ⭐',
      'Built seller performance dashboard resulting in 20% increase in seller engagement',
      'Designed distributed notification badge system improving merchant information retention',
      'Enhanced Ads recommendation product retrieval layer — 12% increment in ROI',
      'Built real-time monitor for CVR prediction model tracking per-advertiser predictions with anomaly alerts',
    ],
  },
  {
    company: 'Walmart',
    role: 'Software Developer, GIF',
    period: 'Aug 2016 – Oct 2017',
    tag: 'Retail',
    bentoSpan: 1,
    skills: ['Java', 'Distributed Systems', 'JMS', 'REST APIs', 'Scalable Architecture', 'Microservices', 'SQL'],
    highlights: [
      'Contributed to Global Integrated Fulfillment (GIF) — distributed, scalable order lifecycle management across Walmart stores',
      'Implemented JMS-based utility for event-driven services with automatic reprocessing of failed events',
    ],
  },
]

export default function Experience({ activeSkill }) {
  const [activeStudy, setActiveStudy] = useState(null)

  return (
    <section id="experience" className="section">
      <p className="section-label">Experience</p>
      <h2 className="section-title">Where I've Worked</h2>
      <div className="section-divider" />
      <div className="bento-grid">
        {jobs.map((job, i) => {
          const isHighlighted = activeSkill && job.skills.includes(activeSkill)
          const isDimmed = activeSkill && !job.skills.includes(activeSkill)
          return (
            <div
              key={i}
              className={`bento-card${isHighlighted ? ' highlighted' : ''}${isDimmed ? ' dimmed' : ''}`}
              style={{ gridColumn: `span ${job.bentoSpan}` }}
            >
              <div className="bento-header">
                <div className="bento-company-block">
                  <h3 className="job-company">{job.company}</h3>
                  <p className="job-role">{job.role}</p>
                </div>
                <div className="bento-meta">
                  <span className="job-tag">{job.tag}</span>
                  <span className="job-period">{job.period}</span>
                </div>
              </div>
              <ul className="job-highlights">
                {job.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              {job.caseStudyId && (
                <button
                  className="view-logic-btn"
                  onClick={() => setActiveStudy(job.caseStudyId)}
                >
                  View Logic ↗
                </button>
              )}
            </div>
          )
        })}
      </div>

      {activeStudy && (
        <Modal studyId={activeStudy} onClose={() => setActiveStudy(null)} />
      )}
    </section>
  )
}
