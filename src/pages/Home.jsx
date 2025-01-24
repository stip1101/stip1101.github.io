import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactFullpage from '@fullpage/react-fullpage'
import '../assets/styles/Home.scss'
import ParticlesBackground from '../components/ParticlesBackground'
import LogoParticles from '../components/LogoParticles'
import { RiPencilRuler2Line, RiTeamLine, RiHandCoinLine, RiLineChartLine } from 'react-icons/ri'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setContentVisible(true), 100)
    }, 800)

    return () => clearTimeout(loadTimer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div 
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="loading-spinner" />
        </motion.div>
      ) : (
        <ReactFullpage
          scrollingSpeed={1000}
          scrollHorizontally={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  {contentVisible && (
                    <section className="hero-section">
                      <ParticlesBackground />
                      <div className="container">
                        <div className="hero-content">
                          <h2 className="welcome-text">WELCOME TO</h2>
                          <h1 className="main-title">SOLUS AMBASSADOR PROGRAM</h1>
                        </div>
                      </div>
                      <div className="logo-wrapper">
                        <LogoParticles />
                      </div>
                    </section>
                  )}
                </div>

                <div className="section">
                  {contentVisible && (
                    <section className="rewards-section">
                      <ParticlesBackground />
                      <div className="container">
                        <motion.div 
                          className="hero-content"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        >
                          <h2>
                            Your <span className="highlight-cyan">Contributions</span>, Your <span className="highlight-purple">Benefits</span>
                          </h2>
                        </motion.div>
                        <div className="rewards-grid">
                          {[
                            {
                              icon: <RiPencilRuler2Line className="icon" />,
                              title: "Create and Earn",
                              text: "Produce unique content and unlock rewards like $150/month stipends, priority access, and leadership opportunities with $300+ monthly pay."
                            },
                            {
                              icon: <RiTeamLine className="icon" />,
                              title: "Connect for Bonuses",
                              text: "Build chats with potential clients and earn $50–90 per chat, plus ongoing bonus cycles."
                            },
                            {
                              icon: <RiHandCoinLine className="icon" />,
                              title: "Close the Deal",
                              text: "Secure $200 for every Offer sent and $1,500+ when referred projects become Solus clients."
                            },
                            {
                              icon: <RiLineChartLine className="icon" />,
                              title: "Climb Higher",
                              text: "Focus on High Priority projects to maximize your earnings and gain exclusive rewards."
                            }
                          ].map((card, index) => (
                            <motion.div
                              key={index}
                              className="reward-card"
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.6,
                                delay: 0.2 + (index * 0.1),
                                ease: "easeOut"
                              }}
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 0.5,
                                  delay: 0.4 + (index * 0.1),
                                  type: "spring",
                                  stiffness: 200
                                }}
                              >
                                {card.icon}
                              </motion.div>
                              <h3>{card.title}</h3>
                              <p>{card.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}
                </div>

                <div className="section">
                  {contentVisible && (
                    <section className="opportunities-section">
                      <ParticlesBackground />
                      <div className="container">
                        <motion.div 
                          className="hero-content"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        >
                          <p className="description">
                            The Solus Ambassador Program offers exceptional opportunities for{' '}
                            <span className="highlight-purple">content creators</span> and{' '}
                            <span className="highlight-cyan">business developers</span> alike.
                          </p>
                          <p className="sub-description">
                            Choose your path, join the Solus community, and earn exclusive rewards for your contributions!
                          </p>
                        </motion.div>
                      </div>
                    </section>
                  )}
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      )}
    </AnimatePresence>
  )
}

export default Home
