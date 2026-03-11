import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'TypeScript'],
  },
  {
    category: 'Frontend',
    icon: '◻',
    skills: ['React', 'HTML/CSS'],
  },
  {
    category: 'Backend & Systems',
    icon: '⚙',
    skills: ['Microservices', 'Distributed Systems', 'RPC', 'REST APIs', 'JMS'],
  },
  {
    category: 'Data & ML',
    icon: '◈',
    skills: ['Apache Hive', 'PostgreSQL', 'ML/Ads Systems', 'CVR Modeling', 'Data Pipelines'],
  },
  {
    category: 'Infrastructure',
    icon: '☁',
    skills: ['Cloud Infrastructure', 'Monitoring & Alerting', 'CI/CD', 'Scalable Architecture'],
  },
  {
    category: 'Domains',
    icon: '◉',
    skills: ['Fintech', 'E-Commerce', 'Ads Technology', 'Enterprise SaaS', 'Regulatory Reporting'],
  },
]

export default function Skills({ activeSkill, onSkillClick }) {
  return (
    <section id="skills" className="section">
      <p className="section-label">Skills</p>
      <h2 className="section-title">What I Work With</h2>
      <div className="section-divider" />
      {activeSkill && (
        <p className="skill-filter-hint">
          Filtering experience by <strong>{activeSkill}</strong> —{' '}
          <button className="skill-clear" onClick={() => onSkillClick(activeSkill)}>
            Clear
          </button>
        </p>
      )}
      <div className="skills-grid">
        {skillGroups.map(({ category, icon, skills }) => (
          <div key={category} className="skill-group">
            <div className="skill-group-header">
              <span className="skill-icon">{icon}</span>
              <h3>{category}</h3>
            </div>
            <div className="skill-tags">
              {skills.map(skill => (
                <button
                  key={skill}
                  className={`skill-tag${activeSkill === skill ? ' selected' : ''}`}
                  onClick={() => onSkillClick(skill)}
                  aria-pressed={activeSkill === skill}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
