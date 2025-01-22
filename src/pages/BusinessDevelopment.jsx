import { motion } from 'framer-motion'
import BusinessParticles from '../components/BusinessParticles'
import CyanParticlesBackground from '../components/CyanParticlesBackground'
import BusinessRolesParticles from '../components/BusinessRolesParticles'
import BusinessRolesParticles2 from '../components/BusinessRolesParticles2'
import BusinessRolesParticles3 from '../components/BusinessRolesParticles3'
import '../assets/styles/BusinessDevelopment.scss'
import { useState, useEffect } from 'react'
import BusinessNavbar from '../components/BusinessNavbar'

const BusinessDevelopment = () => {
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [isCard2Hovered, setIsCard2Hovered] = useState(false)
  const [isCard3Hovered, setIsCard3Hovered] = useState(false)
  const [openTaskId, setOpenTaskId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const createTitleLine = (text, delay = 0) => {
    return (
      <div className="title-line">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          {text}
        </motion.span>
        <motion.div
          className="line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + 0.3,
            ease: [0.215, 0.61, 0.355, 1]
          }}
          style={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            width: '100%',
            height: '2px'
          }}
        />
      </div>
    )
  }

  const createSectionTitle = (text, delay = 0) => {
    return (
      <div className="section-title-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          {text}
        </motion.h2>
        <motion.div
          className="line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: delay + 0.5,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        />
      </div>
    )
  }

  return (
    <motion.div 
      className="business-development"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BusinessNavbar />
      <CyanParticlesBackground />
      <div className="content-container">
        <div className="hero-section">
          <div className="text-content">
            <motion.h1 className="title">
              {createTitleLine('SOLUS', 0.2)}
              {createTitleLine('BUSINESS', 0.6)}
              {createTitleLine('DEVELOPERS', 1)}
            </motion.h1>
            
            <motion.div 
              className="description-container"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="vertical-line" />
              <p className="description">
                Join our elite team of Business Developers and help shape the future 
                of Solus! As a Business Developer, you'll play a crucial role in 
                expanding our network, fostering valuable partnerships, and driving 
                strategic growth initiatives that will define the next chapter of 
                our success story.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="business-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <BusinessParticles />
          </motion.div>
        </div>

        <motion.div 
          className="rewards-section"
          id="rewards"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {createSectionTitle('Business Dev Rewards')}
          <div className="rewards-grid">
            <motion.div 
              className="reward-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon">✦</div>
              <h3>Chat Creation Bonuses</h3>
              <p>Earn increasing payouts for each new chat you create, starting at $50 and growing with every additional chat.</p>
            </motion.div>

            <motion.div 
              className="reward-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon">◈</div>
              <h3>Offer Submission Rewards</h3>
              <p>Receive $200 for every commercial proposal (Offer) successfully sent to a project.</p>
            </motion.div>

            <motion.div 
              className="reward-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="icon">❖</div>
              <h3>High-Value Client Referral Bonuses</h3>
              <p>Earn a minimum of $1,500 for bringing in clients with a marketing budget of ~$50,000 or more.</p>
            </motion.div>

            <motion.div 
              className="reward-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="icon">◇</div>
              <h3>Priority Rewards for Top Projects</h3>
              <p>Unlock bonuses and exclusive payouts by connecting with High Priority projects from CryptoRank or CoinMarketCap.</p>
            </motion.div>

            <motion.div 
              className="reward-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="icon">✧</div>
              <h3>Circular Bonus System</h3>
              <p>Benefit from a recurring payout cycle that ensures continuous rewards as you contribute to new opportunities.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="business-roles-section"
          id="roles"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {createSectionTitle('Business Dev Roles')}
          <div className="business-roles-grid">
            <motion.div 
              className="business-role-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <div className="role-header">
                <div className="role-level">Level 1</div>
                <h3 className="role-title">BizNov</h3>
              </div>
              
              <p className="role-description">
                You are just learning the basics of Business Development your exciting journey.
              </p>

              <div className="role-section">
                <h4>How to Get</h4>
                <ul>
                  <li>Complete all task for Solus OG</li>
                  <li>
                    Click on reaction in the{' '}
                    <a 
                      href="https://discord.com/channels/1255091858087088169/1291063867450851339"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      USDT channel
                    </a>
                  </li>
                </ul>
              </div>

              <div className="role-section">
                <h4>Benefits</h4>
                <ul>
                  <li>+5$ for each new chat ($40/45/50/55)</li>
                </ul>
              </div>
              <BusinessRolesParticles isHovered={isCardHovered} />
            </motion.div>

            <motion.div 
              className="business-role-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onMouseEnter={() => setIsCard2Hovered(true)}
              onMouseLeave={() => setIsCard2Hovered(false)}
            >
              <div className="role-header">
                <div className="role-level">Level 2</div>
                <h3 className="role-title">BizDev</h3>
              </div>
              
              <p className="role-description">
                You are a seasoned BizDev, well-versed in industry guides, with hands-on experience in executing innovative ideas and employing unique strategies to identify and engage clients effectively.
              </p>

              <div className="role-section">
                <h4>How to Get</h4>
                <ul>
                  <li>Create at least 4 chats or get 1 offers sent per month to get this role</li>
                </ul>
              </div>

              <div className="role-section">
                <h4>How to Keep</h4>
                <ul>
                  <li>Outreach 50 projects or create 2 chats/month</li>
                </ul>
              </div>

              <div className="role-section">
                <h4>Benefits</h4>
                <ul>
                  <li>+10$ for each new chat ($50/60/70/80)</li>
                </ul>
              </div>
              <BusinessRolesParticles2 isHovered={isCard2Hovered} />
            </motion.div>

            <motion.div 
              className="business-role-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onMouseEnter={() => setIsCard3Hovered(true)}
              onMouseLeave={() => setIsCard3Hovered(false)}
            >
              <div className="role-header">
                <div className="role-level">Level 3</div>
                <h3 className="role-title">BizSen</h3>
              </div>
              
              <p className="role-description">
                A highly respected business development mentor, recognized for their significant contributions to the program and the growth of the community.
              </p>

              <div className="role-section">
                <h4>How to Get</h4>
                <ul>
                  <li>Create at least 6 chats or get 3 offers sent per month to get this role</li>
                </ul>
              </div>

              <div className="role-section">
                <h4>How to Keep</h4>
                <ul>
                  <li>Outreach 75 projects or create 3 chats/month</li>
                </ul>
              </div>

              <div className="role-section">
                <h4>Benefits</h4>
                <ul>
                  <li>+10$ for each new chat ($60/70/70/90)</li>
                </ul>
              </div>
              <BusinessRolesParticles3 isHovered={isCard3Hovered} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="business-tasks-section"
          id="tasks"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {createSectionTitle('Business Dev Tasks')}
          <div className="business-tasks-grid">
            <motion.div 
              className={`business-task-card ${openTaskId === 'chat' ? 'open' : ''}`}
              onClick={() => setOpenTaskId(openTaskId === 'chat' ? null : 'chat')}
            >
              <div className="task-header">
                <h3>Create Chat</h3>
                <motion.div 
                  className="arrow"
                  animate={{ rotate: openTaskId === 'chat' ? 180 : 0 }}
                >
                  ↓
                </motion.div>
              </div>
              
              <motion.div 
                className="task-content"
                initial={false}
                animate={{ height: openTaskId === 'chat' ? 'auto' : 0 }}
              >
                <p>Your task is to create a chat between <a href="https://t.me/StanislavSolus" target="_blank" rel="noopener noreferrer">Stanislav Petriv</a> and a member of the project team who is interested in Solus Group services. <span className="reward">Rewards: 40-90$</span></p>
                
                <div className="priority-section">
                  <h4>There are two types of projects:</h4>
                  
                  <div className="priority-block high">
                    <h5>High Priority</h5>
                    <ul>
                      <li>Any project from <a href="https://cryptorank.io/ru/funding-rounds" target="_blank" rel="noopener noreferrer">CryptoRank</a> (exactly from the "funding rounds" section)</li>
                      <li>Projects in the range of top 100-300 here <a href="https://coinmarketcap.com/?page=2" target="_blank" rel="noopener noreferrer">CoinMarketCap</a></li>
                    </ul>
                  </div>
                  
                  <div className="priority-block low">
                    <h5>Low Priority</h5>
                    <ul>
                      <li>All other projects.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className={`business-task-card ${openTaskId === 'offer' ? 'open' : ''}`}
              onClick={() => setOpenTaskId(openTaskId === 'offer' ? null : 'offer')}
            >
              <div className="task-header">
                <h3>Offer Sent</h3>
                <motion.div 
                  className="arrow"
                  animate={{ rotate: openTaskId === 'offer' ? 180 : 0 }}
                >
                  ↓
                </motion.div>
              </div>
              
              <motion.div 
                className="task-content"
                initial={false}
                animate={{ height: openTaskId === 'offer' ? 'auto' : 0 }}
              >
                <p>An Offer is a commercial proposal from Solus Group for a project. <span className="reward">Rewards: 200$</span></p>
                <div className="info-section">
                  <h4>What is "Offer"?</h4>
                  <p>An Offer is a commercial proposal from Solus Group for a project. If we have sent an Offer, it means that both the project and Solus Group are actually interested in cooperation.</p>
                  <p>Usually, the Offer is sent in PDF format directly in the Telegram chat, you will notice it</p>
                </div>

                <div className="info-section">
                  <h4>How to Submit?</h4>
                  <p>After we've sent an Offer in chat, submit a corresponding task in Discord</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className={`business-task-card ${openTaskId === 'referral' ? 'open' : ''}`}
              onClick={() => setOpenTaskId(openTaskId === 'referral' ? null : 'referral')}
            >
              <div className="task-header">
                <h3>Client Referral Bonus</h3>
                <motion.div 
                  className="arrow"
                  animate={{ rotate: openTaskId === 'referral' ? 180 : 0 }}
                >
                  ↓
                </motion.div>
              </div>
              
              <motion.div 
                className="task-content"
                initial={false}
                animate={{ height: openTaskId === 'referral' ? 'auto' : 0 }}
              >
                <p>This is a bonus that you will receive if the project becomes a Solus Group client and sends the budget. <span className="reward">Rewards: 1500$+</span></p>
                <p>Depending on the situation and services proposed, this budget can be either higher or lower.</p>
                <p>You will be able to see the exact amount in the Invoice that we send to the client for payment</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="business-start-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="start-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join Solus BizDevs and become part of our growing community
            </motion.p>
            <motion.div
              className="start-button-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://discord.gg/solus-network" 
                target="_blank" 
                rel="noopener noreferrer"
                className="start-button"
              >
                Join Discord
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BusinessDevelopment
