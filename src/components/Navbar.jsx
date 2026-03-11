import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Experience', 'Skills', 'Education', 'Contact']
const sectionIds = links.map(l => l.toLowerCase())

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    // Track which sections are currently intersecting
    const visible = new Set()

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id)
          } else {
            visible.delete(entry.target.id)
          }
        })
        // Pick the topmost visible section (first match in page order)
        const active = sectionIds.find(id => visible.has(id))
        if (active) setActiveSection(active)
      },
      {
        // Shrink the observation zone: start 80px below nav, end at viewport midpoint
        rootMargin: '-80px 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">KA</a>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={activeSection === link.toLowerCase() ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
