import './About.css'

const stats = [
  { value: '9+', label: 'Years of Experience' },
  { value: '4', label: 'Top-tier Companies' },
  { value: '300K+', label: 'Users Migrated' },
  { value: '20%', label: 'Seller Engagement ↑' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">About</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="section-divider" />
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a software engineer and engineering leader with over 9 years of experience building
            high-scale distributed systems across fintech, e-commerce, and enterprise software.
          </p>
          <p>
            Currently at <strong>Goldman Sachs</strong> as VP & Lead Engineer, I drive automation of
            regulatory financial reporting for controller functions. Previously at <strong>TikTok</strong>,
            I worked across e-commerce and ads infrastructure — building seller platforms, search
            algorithms, and ML monitoring systems used by millions.
          </p>
          <p>
            I hold an <strong>M.S. in Computer Science</strong> from UT Dallas and a
            <strong> B.Tech from IIT Kharagpur</strong>, and I'm passionate about systems that are
            fast, reliable, and built to last.
          </p>
        </div>
        <div className="about-stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
