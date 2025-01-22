import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'
import LogoAnimation from '../components/LogoAnimation'
import '../assets/styles/Home.scss'
import GeometricParticles from '../components/GeometricParticles'
import HexagonParticles from '../components/HexagonParticles'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const createLetterAnimations = (text) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.05,
          duration: 0.5
        }}
        style={{ 
          display: 'inline-block',
          width: char === ' ' ? '0.5em' : 'auto'
        }}
      >
        {char}
      </motion.span>
    ))
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.08,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      rotateX: -20,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  }

  const renderAnimatedText = (text) => {
    return text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        variants={wordVariants}
        className="animated-word"
      >
        {word}{' '}
      </motion.span>
    ))
  }

  const navigate = useNavigate()

  return (
    <div className="home">
      <ParticlesBackground />
      <section className="hero-section">
        <div className="hero-content">
          <div className="main-content">
            <motion.div className="hero-titles">
              <motion.h1
                className="welcome-text"
                custom={0}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '100%',
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}
              >
                {createLetterAnimations('WELCOME TO')}
              </motion.h1>
              {['SOLUS', 'AMBASSADOR', 'PROGRAM'].map((text, i) => (
                <motion.h1
                  key={text}
                  custom={i + 1}
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%'
                  }}
                >
                  {createLetterAnimations(text)}
                  <motion.div
                    className="line-effect"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: (i + 1) * 0.2 + 0.5,
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                  />
                </motion.h1>
              ))}
            </motion.div>

            <LogoAnimation />
          </div>
        </div>
      </section>

      <motion.section 
        className="description-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
      >
        <motion.div 
          className="description-container"
          variants={descriptionVariants}
        >
          <motion.p className="description-text">
            {renderAnimatedText(
              "The Solus Ambassador Program offers exceptional opportunities for content creators and business developers alike."
            )}
          </motion.p>
          <motion.p className="description-text highlight">
            {renderAnimatedText(
              "Choose your path, join the Solus community, and earn exclusive rewards for your contributions!"
            )}
          </motion.p>
          
          <motion.div 
            className="glowing-line"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.section>

      <motion.section 
        className="geometric-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="figures-container">
          <motion.div className="figure-wrapper left">
            <HexagonParticles />
            <motion.div 
              className="button-container"
              variants={{
                hidden: { 
                  opacity: 0,
                  y: 20
                },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1]
                  }
                }
              }}
            >
              <motion.button
                className="content-creator-btn"
                onClick={() => navigate('/content-creation')}
                whileHover="hover"
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: {
                      duration: 0.3,
                      yoyo: Infinity
                    }
                  }
                }}
              >
                <span className="btn-text">Become Content Creator</span>
                <div className="btn-glow" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div className="figure-wrapper right">
            <GeometricParticles />
            <motion.div 
              className="button-container"
              variants={{
                hidden: { 
                  opacity: 0,
                  y: 20
                },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1]
                  }
                }
              }}
            >
              <motion.button
                className="business-dev-btn"
                onClick={() => navigate('/business-development')}
                whileHover="hover"
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: {
                      duration: 0.3,
                      yoyo: Infinity
                    }
                  }
                }}
              >
                <span className="btn-text">Become Business Dev</span>
                <div className="btn-glow" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
