import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/ContentNavbar.scss'

const ContentNavbar = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['rewards', 'roles', 'tasks']
      const scrollPosition = window.scrollY + 100 // Небольшой отступ для лучшего UX

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            return
          }
        }
      }
      
      // Если не в одной из секций, проверяем находимся ли мы в начале страницы
      if (scrollPosition < 100) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="content-navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src="/images/logohome.svg" alt="Solus Ambassadors" />
          <span className="logo-text">
            <span className="solus">Solus</span>
            <span className="ambassadors">Ambassadors</span>
          </span>
        </a>
        
        <div className="nav-links">
          <a 
            href="/"
            className="nav-link"
          >
            //HOME
          </a>
          <button 
            onClick={() => scrollToSection('rewards')}
            className={`nav-link ${activeSection === 'rewards' ? 'active' : ''}`}
          >
            //AMBASSADOR REWARDS
          </button>
          <button 
            onClick={() => scrollToSection('roles')}
            className={`nav-link ${activeSection === 'roles' ? 'active' : ''}`}
          >
            //AMBASSADOR ROLES
          </button>
          <button 
            onClick={() => scrollToSection('tasks')}
            className={`nav-link ${activeSection === 'tasks' ? 'active' : ''}`}
          >
            //TASKS AND EVALUATION
          </button>
        </div>

        <motion.a 
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MY PROFILE
        </motion.a>
      </div>
    </nav>
  )
}

export default ContentNavbar 