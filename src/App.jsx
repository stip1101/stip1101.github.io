import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
// import Footer from './components/Footer' // Временно отключаем футер
import Home from './pages/Home'
import ContentCreation from './pages/ContentCreation'
import BusinessDevelopment from './pages/BusinessDevelopment'
import './assets/styles/main.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/business-development" element={<BusinessDevelopment />} />
          </Routes>
        </main>
        {/* <Footer /> */} {/* Временно отключаем футер */}
      </div>
    </Router>
  )
}

export default App
