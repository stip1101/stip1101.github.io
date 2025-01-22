import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/BusinessParticles.scss'

const BusinessParticles = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = 600
    canvas.height = 600

    const particles = []
    const coreParticles = [] // Частицы ядра
    const particleCount = 150
    const coreParticleCount = 50 // Количество частиц в ядре
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 180
    const coreRadius = 30 // Радиус ядра

    class Particle {
      constructor(isCore = false) {
        this.isCore = isCore
        this.reset()
      }

      reset() {
        this.x = centerX
        this.y = centerY
        this.angle = Math.random() * Math.PI * 2
        
        if (this.isCore) {
          this.radius = Math.random() * coreRadius
          this.speed = 0.03 + Math.random() * 0.03
          this.size = Math.random() * 2 + 2
          this.opacity = Math.random() * 0.3 + 0.7
        } else {
          this.radius = Math.random() * radius
          this.speed = 0.02 + Math.random() * 0.02
          this.size = Math.random() * 3 + 1.5
          this.opacity = Math.random() * 0.5 + 0.2
        }

        this.friction = 0.99
        this.baseX = centerX + Math.cos(this.angle) * this.radius
        this.baseY = centerY + Math.sin(this.angle) * this.radius
        this.wobble = Math.random() * Math.PI * 2
        this.wobbleSpeed = 0.1 + Math.random() * 0.1
      }

      update() {
        this.wobble += this.wobbleSpeed
        this.x = this.baseX + Math.sin(this.wobble) * (this.isCore ? 1 : 2)
        this.y = this.baseY + Math.cos(this.wobble) * (this.isCore ? 1 : 2)
        this.angle += this.speed
        this.baseX = centerX + Math.cos(this.angle) * this.radius
        this.baseY = centerY + Math.sin(this.angle) * this.radius
        this.speed *= this.friction
        if (this.speed < (this.isCore ? 0.02 : 0.01)) {
          this.speed = this.isCore ? 0.02 : 0.01
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`
        ctx.shadowBlur = this.isCore ? 15 : 10
        ctx.shadowColor = 'rgba(0, 255, 255, 0.5)'
        ctx.fill()
      }
    }

    // Создаем обычные частицы
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(false))
    }

    // Создаем частицы ядра
    for (let i = 0; i < coreParticleCount; i++) {
      coreParticles.push(new Particle(true))
    }

    let animationFrame

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Сначала рисуем обычные частицы
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Затем рисуем частицы ядра поверх
      coreParticles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <motion.div 
      ref={containerRef}
      className="business-particles-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <canvas ref={canvasRef} className="business-particles" />
    </motion.div>
  )
}

export default BusinessParticles 