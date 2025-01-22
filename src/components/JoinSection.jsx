import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import '../assets/styles/JoinSection.scss'

const JoinSection = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const buttonRef = useRef(null)
  const buttonCenterRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext('2d')
    const particles = []
    const particleCount = 150

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Particle {
      constructor() {
        this.reset()
        this.baseSpeed = Math.random() * 0.2 + 0.1
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * this.baseSpeed
        this.speedY = (Math.random() - 0.5) * this.baseSpeed
        this.opacity = Math.random() * 0.3 + 0.1
        this.originalSpeedX = this.speedX
        this.originalSpeedY = this.speedY
      }

      update(mouseDistance, buttonDistance) {
        this.x += this.speedX
        this.y += this.speedY

        if (buttonDistance > 150) {
          this.speedX = this.speedX * 0.95 + this.originalSpeedX * 0.05
          this.speedY = this.speedY * 0.95 + this.originalSpeedY * 0.05
        }

        if (mouseDistance < 100) {
          const chaos = (1 - mouseDistance / 100) * 0.5
          this.speedX += (Math.random() - 0.5) * chaos
          this.speedY += (Math.random() - 0.5) * chaos
        }

        if (buttonDistance < 150) {
          const chaos = (1 - buttonDistance / 150) * 1.5
          const angle = Math.atan2(
            buttonCenterRef.current.y - this.y,
            buttonCenterRef.current.x - this.x
          )
          
          this.speedX += Math.cos(angle + Math.PI/2) * chaos * 0.1
          this.speedY += Math.sin(angle + Math.PI/2) * chaos * 0.1
          
          this.speedX += (Math.random() - 0.5) * chaos
          this.speedY += (Math.random() - 0.5) * chaos
        }

        const maxSpeed = 2
        this.speedX = Math.max(Math.min(this.speedX, maxSpeed), -maxSpeed)
        this.speedY = Math.max(Math.min(this.speedY, maxSpeed), -maxSpeed)

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(243, 46, 151, ${this.opacity})`
        ctx.shadowBlur = 5
        ctx.shadowColor = 'rgba(243, 46, 151, 0.3)'
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    container.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const canvasRect = canvas.getBoundingClientRect()
      buttonCenterRef.current = {
        x: buttonRect.left + buttonRect.width / 2 - canvasRect.left,
        y: buttonRect.top + buttonRect.height / 2 - canvasRect.top
      }

      particles.forEach(particle => {
        const mouseDistance = Math.hypot(
          particle.x - mouseRef.current.x,
          particle.y - mouseRef.current.y
        )
        const buttonDistance = Math.hypot(
          particle.x - buttonCenterRef.current.x,
          particle.y - buttonCenterRef.current.y
        )
        
        particle.update(mouseDistance, buttonDistance)
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="join-section" ref={containerRef}>
      <canvas ref={canvasRef} className="particles-canvas" />
      <div className="join-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join Solus Ambassador Program and become part of our growing community
        </motion.p>
        <motion.a
          href="https://discord.gg/SBEBn96WpC"
          target="_blank"
          rel="noopener noreferrer"
          className="join-button"
          ref={buttonRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Join Now
        </motion.a>
      </div>
    </div>
  )
}

export default JoinSection 