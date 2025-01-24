import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactFullpage from '@fullpage/react-fullpage'
import '../assets/styles/Home.scss'
import ParticlesBackground from '../components/ParticlesBackground'
import LogoParticles from '../components/LogoParticles'
import { RiPencilRuler2Line, RiTeamLine, RiHandCoinLine, RiLineChartLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  const navigate = useNavigate()

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
                            Unlock Opportunities. Earn Rewards.
                          </p>
                          <p className="sub-description">
                            Become a <span className="highlight">Content Creator</span> or <span className="highlight">Business Developer</span> and start earning exclusive rewards. Share your skills, grow with the Solus community, and get paid for your contributions.
                          </p>
                          <p className="sub-description bold">
                            Choose your path today and turn your efforts into real rewards!
                          </p>
                        </motion.div>

                        <div className="cards-wrapper">
                          <motion.div 
                            className="glass-card"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.02,
                              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                            }}
                            onClick={() => navigate('/content-creation')}
                          >
                            <motion.div 
                              className="card-background"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ 
                                duration: 0.8,
                                ease: [0.4, 0, 0.2, 1]
                              }}
                            >
                              <motion.img 
                                src="/images/creators.webp" 
                                alt="Content Creators"
                                whileHover={{ 
                                  scale: 1.05,
                                  transition: { duration: 0.4 }
                                }}
                              />
                            </motion.div>
                            <div className="card-content">
                              <motion.div 
                                className="card-title"
                                whileHover={{
                                  color: "#06EFFF",
                                  transition: { duration: 0.3 }
                                }}
                              >
                                <h3>Content Creators</h3>
                              </motion.div>
                            </div>
                          </motion.div>

                          <motion.div 
                            className="glass-card"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.02,
                              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                            }}
                            onClick={() => navigate('/business-development')}
                          >
                            <motion.div 
                              className="card-background"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ 
                                duration: 0.8,
                                ease: [0.4, 0, 0.2, 1]
                              }}
                            >
                              <motion.img 
                                src="/images/developers.webp" 
                                alt="Business Developers"
                                whileHover={{ 
                                  scale: 1.05,
                                  transition: { duration: 0.4 }
                                }}
                              />
                            </motion.div>
                            <motion.div 
                              className="card-content"
                              whileHover={{ y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="card-title">
                                <h3>Business Developers</h3>
                                <motion.div 
                                  className="title-underline"
                                  initial={{ width: "0%" }}
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                            </motion.div>
                          </motion.div>
                        </div>
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
