import './Education.css'

// IIT KGP is featured (span 2) — older but more prestigious institution
const education = [
  {
    school: 'Indian Institute of Technology Kharagpur',
    degree: 'Bachelor of Technology in Computer Science',
    period: '2012 – 2016',
    short: 'IIT KGP',
    bentoSpan: 2,
    featured: true,
  },
  {
    school: 'The University of Texas at Dallas',
    degree: 'Master of Science in Computer Science',
    period: '2021 – 2022',
    short: 'UTD',
    bentoSpan: 1,
    featured: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <p className="section-label">Education</p>
      <h2 className="section-title">Academic Background</h2>
      <div className="section-divider" />
      <div className="edu-bento">
        {education.map(({ school, degree, period, short, bentoSpan, featured }) => (
          <div
            key={school}
            className={`edu-card${featured ? ' featured' : ''}`}
            style={{ gridColumn: `span ${bentoSpan}` }}
          >
            <div className="edu-badge">{short}</div>
            <div className="edu-info">
              <h3 className="edu-school">{school}</h3>
              <p className="edu-degree">{degree}</p>
              <p className="edu-period">{period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
