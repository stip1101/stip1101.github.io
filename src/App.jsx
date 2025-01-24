import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContentCreation from './pages/ContentCreation'
import BusinessDevelopment from './pages/BusinessDevelopment'
import ParticlesBackground from './components/ParticlesBackground'
import './assets/styles/main.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <ParticlesBackground />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/business-development" element={<BusinessDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
