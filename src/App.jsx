import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import RevealOnScroll from './components/RevealOnScroll'
import './App.css'

export default function App() {
  const [activeSkill, setActiveSkill] = useState(null)

  const handleSkillClick = (skill) => {
    setActiveSkill(prev => prev === skill ? null : skill)
  }

  return (
    <>
      <Navbar />
      <main>
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <About />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <Experience activeSkill={activeSkill} />
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <Skills activeSkill={activeSkill} onSkillClick={handleSkillClick} />
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <Education />
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <Contact />
        </RevealOnScroll>
      </main>
      <footer className="footer">
        <p>© 2025 Kumar Abhishek · Built with React</p>
      </footer>
    </>
  )
}
