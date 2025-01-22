import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../assets/styles/Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          <img src="/images/logohome.svg" alt="Solus Ambassadors" />
          <span className="logo-text">
            <span className="solus">Solus</span>
            <span className="ambassadors">Ambassadors</span>
          </span>
        </NavLink>
        
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            //HOME
          </NavLink>
          <NavLink 
            to="/content-creation" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            //CONTENT CREATION
          </NavLink>
          <NavLink 
            to="/business-development" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            //BUSINESS DEV
          </NavLink>
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

export default Navbar
