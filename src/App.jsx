import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
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
        <Hero />
        <About />
        <Experience activeSkill={activeSkill} />
        <Skills activeSkill={activeSkill} onSkillClick={handleSkillClick} />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2025 Kumar Abhishek · Built with React</p>
      </footer>
    </>
  )
}
