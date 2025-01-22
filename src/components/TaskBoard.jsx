import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../assets/styles/TaskBoard.scss'

const taskData = {
  'AI.KIDO': [
    {
      title: 'Community Communication',
      points: 'Up to 15 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Communicate with community members on Telegram and Discord</p>
        </div>

        <div class="task-section">
          <h4>GUIDE</h4>
          <p>Actively communicate on the server:</p>
          <ul>
            <li>Support discussions</li>
            <li>Share useful material</li>
            <li>Answer newcomers questions and make the server environment friendly</li>
          </ul>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <p>Send proof in the form of a screenshot that you have answered questions or communicated in chats at least 100 times a week on <a href="https://t.me/aikido_chat" target="_blank" rel="noopener noreferrer">AI.KIDO Telegram Chat</a></p>
        </div>
      `
    },
    {
      title: 'Create an X (Twitter) post/thread',
      points: 'Up to 6 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Create an X (Twitter) thread about the AI.KIDO</p>
        </div>

        <div class="task-section">
          <h4>GUIDE</h4>
          <ul>
            <li>Post/1st post of Thread must include Quality Image</li>
            <li>Use tag <strong>@the_aikido</strong></li>
          </ul>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <ul>
            <li>Submit a link to your content to <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a> channel in Solus Discord server.</li>
            <li>Submit a link to your content to <a href="https://discord.com/channels/1300043208583286805/1305876237465419787" target="_blank" rel="noopener noreferrer">#contribution</a> channel in AI.KIDO Discord server.</li>
          </ul>
        </div>
      `
    },
    {
      title: 'Real Life AI.KIDO Usage Showcase',
      points: 'Up to 10 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Create a unique piece of content describing the functionality of AI.KIDO and adding photos/videos of its use <strong>in Real Life</strong>.</p>
        </div>

        <div class="task-section">
          <h4>GUIDE</h4>
          <ul>
            <li>Post/1st post of Thread must include <strong>Real Life Image</strong></li>
            <li>Use tag <strong>@the_aikido</strong></li>
          </ul>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <ul>
            <li>Submit a link to your content to <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a> channel in Solus Discord server.</li>
            <li>Submit a link to your content to <a href="https://discord.com/channels/1300043208583286805/1305876237465419787" target="_blank" rel="noopener noreferrer">#contribution</a> channel in AI.KIDO Discord server.</li>
          </ul>
        </div>

        <div class="task-section">
          <h4>RULES</h4>
          <ul>
            <li>Post/1st post of Thread must include <strong>Real Life Image</strong></li>
          </ul>
        </div>
      `
    },
    {
      title: 'Event Participation',
      points: 'Up to 6 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Participate in the event on the AI.KIDO Discord Server or Telegram channel and send proof of participation in the form of a screenshot or link.</p>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <p>Send proof in the form of a screenshot to <a href="https://discord.com/channels/1300043208583286805/1305876237465419787" target="_blank" rel="noopener noreferrer">#contribution</a> channel in Discord.</p>
        </div>
      `
    }
  ],
  'Haust Network': [
    {
      title: 'Create an X (Twitter) post',
      points: 'Up to 5 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Create an X (Twitter) post about the Haust network</p>
        </div>

        <div class="task-section">
          <h4>GUIDE</h4>
          <p>Familiarise yourself with the <a href="https://www.notion.so/Create-an-Informative-Tweet-Thread-52a92c3bd6df41e493db23808a89807a?pvs=21" target="_blank" rel="noopener noreferrer">task description and rules</a></p>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <p>Submit a link to your content to <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a> channel</p>
        </div>
      `
    },
    {
      title: 'Create an X (Twitter) thread',
      points: 'Up to 5 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Create an X (Twitter) thread about the Haust network</p>
        </div>

        <div class="task-section">
          <h4>GUIDE</h4>
          <p>Familiarise yourself with the <a href="https://www.notion.so/Create-an-Informative-Tweet-Thread-52a92c3bd6df41e493db23808a89807a?pvs=21" target="_blank" rel="noopener noreferrer">task description and rules</a></p>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <p>Submit a link to your Thread to <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a> channel</p>
        </div>

        <div class="task-section">
          <h4>RULES</h4>
          <ul>
            <li>Minimum of 4 tweets per thread</li>
            <li>Post/1st post of Thread must include Quality Image</li>
          </ul>
        </div>
      `
    },
    {
      title: 'Write an Original Article',
      points: 'Up to 5 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Write and Post on social media (e.g. Medium, Mirror, personal blog, Telegram channel) an insightful 700+ word Original Article about Haust Network.</p>
        </div>

        <div class="task-section">
          <h4>GUIDE</h4>
          <p><a href="https://www.notion.so/Write-an-Original-Article-c16c21150bad4d22b3a2a06f5da33801?pvs=21" target="_blank" rel="noopener noreferrer">Read description and rules</a></p>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <p>Submit a link to your content to <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a> channel</p>
        </div>
      `
    },
    {
      title: 'Create a Video about Haust',
      points: 'Up to 10 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Create a quality educational video based on Haust Network's documentation, goals, and vision. Use information that is relevant and accessible to newcomers.</p>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <p>Submit a link to your video to <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a> channel</p>
        </div>

        <div class="task-section">
          <h4>RULES</h4>
          <ul>
            <li>Video must be well-produced and informative</li>
            <li>Minimum duration from 1 minute, maximum duration up to 3 minutes</li>
            <li>Cover various aspects of Haust Network in detail</li>
          </ul>
        </div>
      `
    },
    {
      title: 'Host a Community Event',
      points: 'Up to 5 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>Organise and host a local event or game to promote Haust Network community engagement.</p>
        </div>

        <div class="task-section">
          <h4>SUBMISSION</h4>
          <p>Submit a link to your event to <a href="https://discord.com/channels/1255091858087088169/1267511959595515935" target="_blank" rel="noopener noreferrer">#content-submit</a> channel</p>
        </div>

        <div class="task-section">
          <h4>RULES</h4>
          <ul>
            <li>Plan an event and discuss the possibility of an event with the administrators</li>
            <li>Promote the event across Discord community channels</li>
            <li>Provide a detailed agenda and objectives</li>
          </ul>
        </div>
      `
    }
  ],
  'USDT Rewards': [
    {
      title: 'Create Chat',
      points: 'Up to 20 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>TBD (To Be Determined)</p>
        </div>
      `
    },
    {
      title: 'Offer Sent',
      points: '20 points',
      description: `
        <div class="task-section">
          <h4>MISSION</h4>
          <p>TBD (To Be Determined)</p>
        </div>
      `
    }
  ]
}

const TaskBoard = () => {
  const [selectedProgram, setSelectedProgram] = useState('AI.KIDO')
  const [selectedTask, setSelectedTask] = useState(null)

  const renderDescription = (description) => {
    return description.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => (
      `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
    ))
  }

  return (
    <div className="task-board-wrapper">
      <div className="border-glow" />
      
      <motion.div 
        className="select-hint"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Select Program
      </motion.div>

      <div className="program-selector">
        {Object.keys(taskData).map((program) => (
          <motion.div
            key={program}
            className={`program-option ${selectedProgram === program ? 'active' : ''}`}
            onClick={() => setSelectedProgram(program)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="program-icon">
              {program === 'AI.KIDO' && (
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
            </div>
            <span>{program}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {taskData[selectedProgram]?.length > 0 && (
          <motion.div
            className="tasks-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Ambassador Tasks</h2>
            
            <div className="tasks-list">
              {taskData[selectedProgram].map((task, index) => (
                <motion.div
                  key={index}
                  className={`task-item ${selectedTask === index ? 'expanded' : ''}`}
                  onClick={() => setSelectedTask(selectedTask === index ? null : index)}
                  layout
                >
                  <div className="task-header">
                    <h3>{task.title}</h3>
                    <div className="task-points">
                      {task.points}
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    {selectedTask === index && (
                      <motion.div
                        className="task-details"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        dangerouslySetInnerHTML={{ __html: renderDescription(task.description) }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TaskBoard 