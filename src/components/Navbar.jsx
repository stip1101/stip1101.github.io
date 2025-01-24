import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/Navbar.scss'
import logohome from '/images/logohome.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/">
            <div className="logo-container">
              <img src={logohome} alt="Solus Logo" className="logo-image" />
              <div className="logo-text">
                <span className="logo-main">SOLUS</span>
                <span className="logo-sub">AMBASSADORS</span>
              </div>
            </div>
          </NavLink>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" end>
            HOME
          </NavLink>
          <NavLink to="/content-creation">
            CONTENT CREATION
          </NavLink>
          <NavLink to="/business-development">
            BUSINESS DEVELOPMENT
          </NavLink>
        </div>

        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
