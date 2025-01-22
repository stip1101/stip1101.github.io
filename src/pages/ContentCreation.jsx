import { motion } from 'framer-motion'
import PinkParticlesBackground from '../components/PinkParticlesBackground'
import CreativeParticles from '../components/CreativeParticles'
import '../assets/styles/ContentCreation.scss'
import { useEffect, useState } from 'react'
import LevelParticles from '../components/LevelParticles'
import SquareParticles from '../components/SquareParticles'
import PentagonParticles from '../components/PentagonParticles'
import SageHexParticles from '../components/SageHexParticles'
import OracleParticles from '../components/OracleParticles'
import TaskBoard from '../components/TaskBoard'
import JoinSection from '../components/JoinSection'
import ContentNavbar from '../components/ContentNavbar'

const rewardsData = [
  {
    title: "Amb Payment Insights",
    description: "Gain insider access to ambassador payment analytics.",
    icon: "✦" // Можно заменить на SVG или другой символ
  },
  {
    title: "Priority in Ambassador Programs",
    description: "Be among the first to access new opportunities.",
    icon: "◈"
  },
  {
    title: "Community Manager Opportunities",
    description: "Unlock roles with monthly compensation of $300 or more.",
    icon: "❖"
  },
  {
    title: "Enhanced Client Referral Bonuses",
    description: "Earn bigger rewards for bringing in new users.",
    icon: "◇"
  },
  {
    title: "Guaranteed Monthly Stipend",
    description: "Receive $150 per month for consistent contributions.",
    icon: "✧"
  }
]

const rolesData = [
  {
    title: "Content Creator",
    description: "Create engaging content for Solus social media channels and blog.",
    requirements: [
      "Experience in content creation",
      "Strong writing and editing skills",
      "Understanding of social media trends"
    ]
  },
  {
    title: "Community Manager",
    description: "Lead and moderate Solus community discussions across platforms.",
    requirements: [
      "Previous community management experience",
      "Excellent communication skills",
      "Available during peak hours"
    ]
  },
  {
    title: "Brand Ambassador",
    description: "Represent Solus at events and promote our platform.",
    requirements: [
      "Strong networking abilities",
      "Public speaking skills",
      "Professional demeanor"
    ]
  }
]

const levelData = [
  {
    level: "Level 1",
    title: "Solus OG",
    description: "You are only new to the Solus Ambassador Program and start your exciting journey.",
    howToGet: [
      { text: "Join ", link: "https://discord.gg/SBEBn96WpC", linkText: "Discord" },
      { text: "Fill out the ", link: "https://dyno.gg/form/52cff074", linkText: "Form" }
    ],
    benefits: [
      "Get the Solus OG Role in Discord",
      "Access to Academy and TaskBoard"
    ],
    shape: "triangle",
    color: "#9FFFF0"
  },
  {
    level: "Level 2",
    title: "Neophyte",
    description: "You are a novice user who has learned basic information about content creation and is beginning to take the first steps on your own in your exciting adventure",
    howToGet: [
      { text: "Complete the Neophyte section in ", link: "https://zealy.io/cw/solusgroup/questboard", linkText: "Zealy campaign" },
      { text: "Get 25 Engagement Points" }
    ],
    benefits: [
      "Know when we start creating program for someone",
      "Know when the Launch date is defined",
      "Access to the section with USDT Rewards"
    ],
    shape: "square",
    color: "#4DFFDF"
  },
  {
    level: "Level 3",
    title: "Adept",
    description: "An elite contributor to the Solus community, reserved only for the most promising initiates. As an Adept, you've proven that your skills are exceptional and truly worthy of recognition.",
    howToGet: [
      { text: "Earn 55 Ambassador Points" },
      { text: "Pass the selection process - ", link: "https://forms.gle/ZmZc11aUDdH5CdKGA", linkText: "Google Form" }
    ],
    howToMaintain: [
      "Earn 20 Ambassador Points per month",
      "Achieve 20 Engagement Points per month"
    ],
    benefits: [
      "Amb Payment Insights",
      "Amb Programs Selection Priority",
      "Moderator/Community Manager Position Opportunities ($300+/Month):",
      "Increased Client-Ref Bounties",
      { text: "Stanislav Petriv's Diary & Guides", highlight: true },
      { text: "$150/Month", highlight: true }
    ],
    shape: "pentagon",
    color: "#00F0FF"
  },
  {
    level: "Level 4",
    title: "Sage",
    description: "A distinguished and highly respected member of the community, admired by all. The title of Sage is a rare honor, reserved exclusively for the most exceptional Adepts.",
    howToGet: [
      { text: "It will unlock once you reach the Adept level." }
    ],
    benefits: [
      { text: "It will unlock once you reach the Adept level." }
    ],
    shape: "hexagon",
    color: "#f32e97" // Розовый цвет
  },
  {
    level: "Level 5",
    title: "Oracle",
    description: "The legendary member who will help lead us into a new era of Web3. Only the most distinguished Sages can achieve Oracle status.",
    howToGet: [
      { text: "TBA" }
    ],
    benefits: [
      { text: "It will unlock once you reach the Sage level." }
    ],
    shape: "octagon",
    color: "#FF0066" // Малиново-красный
  }
]

const ContentCreation = () => {
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
          className="underline"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 0.8,
            delay: delay + 0.3,
            ease: "easeOut"
          }}
        />
      </div>
    )
  }

  return (
    <motion.div className="content-creation">
      <ContentNavbar />
      <PinkParticlesBackground />
      <div className="content-container">
        <div className="hero-section">
          <div className="text-content">
            <motion.h1 className="title">
              {createTitleLine('SOLUS', 0.2)}
              {createTitleLine('CONTENT', 0.4)}
              {createTitleLine('CREATORS', 0.6)}
            </motion.h1>
            
            <motion.p 
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Bring your ideas to life and showcase your creativity with Solus! 
              As a Content Creator, you'll play a key role in building our brand's 
              presence by delivering unique, high-quality materials. Whether it's 
              captivating articles, engaging social media posts, or eye-catching 
              visuals, your work will help shape the future of the Solus community.
            </motion.p>
          </div>
          
          <div className="creative-visual">
            <CreativeParticles />
          </div>
        </div>

        <motion.div id="rewards" className="rewards-section">
          <motion.div 
            className="rewards-title"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              bounce: 0.3
            }}
          >
            <div className="title-wrapper">
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                AMBASSADOR
              </motion.span>
              <motion.div 
                className="title-line"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
            <div className="title-wrapper">
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                REWARDS
              </motion.span>
              <motion.div 
                className="title-line"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </motion.div>

          <motion.div className="rewards-grid">
            {rewardsData.map((reward, index) => (
              <motion.div
                key={reward.title}
                className="reward-card"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <div className="card-icon">{reward.icon}</div>
                <h3>{reward.title}</h3>
                <p>{reward.description}</p>
                <div className="card-glow" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div id="roles" className="roles-section">
          <motion.div 
            className="roles-title"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              bounce: 0.3
            }}
          >
            <div className="title-wrapper">
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                AMBASSADOR
              </motion.span>
              <motion.div 
                className="title-line"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
            <div className="title-wrapper">
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                ROLES
              </motion.span>
              <motion.div 
                className="title-line"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </motion.div>

          <motion.p 
            className="roles-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Each role is designed to guide participants on their journey, recognizing their growth 
            and rewarding their dedication as they evolve from newcomers into key contributors 
            shaping the future of Solus.
          </motion.p>

          <div className="roles-progression">
            {levelData.map((level, index) => {
              const [isCardHovered, setIsCardHovered] = useState(false)
              
              return (
                <motion.div 
                  key={level.title}
                  className={`level-card ${level.shape}`}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: index * 0.2
                  }}
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                >
                  <motion.div 
                    className="level-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  >
                    <div className="level-header">
                      <span className="level-tag">{level.level}</span>
                      <h3>{level.title}</h3>
                    </div>
                    
                    <p className="level-description">{level.description}</p>
                    
                    <div className="level-section">
                      <h4>How to get</h4>
                      <ul>
                        {level.howToGet.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                          >
                            {item.text}
                            {item.link && (
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.linkText}
                              </a>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {level.howToMaintain && (
                      <div className="level-section">
                        <h4>How to Maintain the Role</h4>
                        <ul>
                          {level.howToMaintain.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="level-section">
                      <h4>Benefits</h4>
                      <ul>
                        {level.benefits.map((benefit, i) => (
                          <motion.li
                            key={i}
                            className={benefit.highlight ? 'highlight' : ''}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                          >
                            {typeof benefit === 'string' ? benefit : benefit.text}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  <div className="level-glow" />
                  {level.shape === 'triangle' ? (
                    <LevelParticles isHovered={isCardHovered} />
                  ) : level.shape === 'square' ? (
                    <SquareParticles isHovered={isCardHovered} />
                  ) : level.shape === 'pentagon' ? (
                    <PentagonParticles isHovered={isCardHovered} />
                  ) : level.shape === 'hexagon' ? (
                    <SageHexParticles isHovered={isCardHovered} />
                  ) : level.shape === 'octagon' ? (
                    <OracleParticles isHovered={isCardHovered} />
                  ) : null}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div id="tasks" className="tasks-section">
          <motion.div 
            className="tasks-title"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              bounce: 0.3
            }}
          >
            <div className="title-wrapper">
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                TASKS AND EVALUATION
              </motion.span>
              <motion.div 
                className="title-line"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </motion.div>

          <motion.div className="points-system">
            <motion.div 
              className="system-overview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="overview-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>We've designed a dual-point system to reward and motivate our ambassadors. Both point types work together to recognize your contributions and help you climb the ranks in the Solus community.</p>
            </motion.div>

            <div className="points-types">
              <motion.div className="point-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Engagement Points</h4>
                <p className="card-description">A key metric used to increase and maintain your rank within the program.</p>
                <div className="card-details">
                  <div className="instruction-text">
                    Use the <code>/set twitter</code> command with your Twitter username to link your Twitter account to your discord account in <a href="https://discord.com/channels/1255091858087088169/1262712691839995975" target="_blank" rel="noopener noreferrer">#engage-leaderbord</a> channel, for more info check <a href="https://discord.com/channels/1255091858087088169/1259786399792631848" target="_blank" rel="noopener noreferrer">#solus-quest</a> pinned message.
                  </div>
                </div>
              </motion.div>

              <motion.div className="point-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.134 15.866 1 12 1C8.13401 1 5 4.134 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Ambassador Points</h4>
                <p className="card-description">Another essential currency for rank progression and maintenance, earned by completing a variety of tasks available on the taskboard.</p>
                <div className="card-details">
                  <div className="instruction-steps">
                    <ol>
                      <li>After completing the task, proceed to the channel - <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a></li>
                      <li>Type <code>/myprofile</code> in the text box.</li>
                      <li>To submit work for review, click Send Work, select the Category and Specific Task you have completed, and then send the link to your work in the chat.</li>
                      <li>You will receive a notification in the <a href="https://discord.com/channels/1255091858087088169/1268503723202838588" target="_blank" rel="noopener noreferrer">#amb-review</a> channel once your work is reviewed.</li>
                    </ol>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <TaskBoard />
        <JoinSection />
      </div>
    </motion.div>
  )
}

export default ContentCreation
