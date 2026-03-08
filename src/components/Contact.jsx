import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Get in Touch</h2>
      <div className="section-divider" />
      <div className="contact-wrapper">
        <p className="contact-desc">
          I'm always open to interesting conversations, collaboration, or new opportunities.
          Feel free to reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:kr.abhi2413@gmail.com" className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">kr.abhi2413@gmail.com</p>
            </div>
            <span className="contact-arrow">→</span>
          </a>
          <a href="https://linkedin.com/in/kumar-abhishek" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="contact-label">LinkedIn</p>
              <p className="contact-value">linkedin.com/in/kumar-abhishek</p>
            </div>
            <span className="contact-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
