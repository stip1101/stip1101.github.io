import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/LevelParticles.scss'

const SageHexParticles = ({ isHovered }) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = 400
    canvas.height = 400

    const particles = []
    const hexagonSize = 160
    const innerHexagonSize = hexagonSize * 0.6

    const createHexagonPoints = () => {
      const points = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Создаем точки внешнего и внутреннего шестиугольников
      const createVertices = (size) => {
        const vertices = []
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3 - Math.PI / 6 // Начинаем с верхней точки
          vertices.push({
            x: centerX + size * Math.cos(angle),
            y: centerY + size * Math.sin(angle)
          })
        }
        return vertices
      }

      const outerVertices = createVertices(hexagonSize)
      const innerVertices = createVertices(innerHexagonSize)

      // Создаем яркие контуры
      for (let i = 0; i < 6; i++) {
        const nextI = (i + 1) % 6
        const steps = 30
        
        // Внешние линии
        for (let j = 0; j < steps; j++) {
          const t = j / steps
          const x = outerVertices[i].x + (outerVertices[nextI].x - outerVertices[i].x) * t
          const y = outerVertices[i].y + (outerVertices[nextI].y - outerVertices[i].y) * t
          
          points.push({
            x,
            y,
            originalX: x,
            originalY: y,
            startX: centerX + (Math.random() - 0.5) * canvas.width,
            startY: centerY + (Math.random() - 0.5) * canvas.width,
            size: 2.5,
            opacity: 0.8,
            isEdge: true,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2
          })
        }
        
        // Внутренние линии
        for (let j = 0; j < steps; j++) {
          const t = j / steps
          const x = innerVertices[i].x + (innerVertices[nextI].x - innerVertices[i].x) * t
          const y = innerVertices[i].y + (innerVertices[nextI].y - innerVertices[i].y) * t
          
          points.push({
            x,
            y,
            originalX: x,
            originalY: y,
            startX: centerX + (Math.random() - 0.5) * canvas.width,
            startY: centerY + (Math.random() - 0.5) * canvas.width,
            size: 2.5,
            opacity: 0.8,
            isEdge: true,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2
          })
        }
      }

      // Добавляем частицы для заполнения
      for (let i = 0; i < 300; i++) {
        const angle = Math.random() * Math.PI * 2
        const r = Math.random() * (hexagonSize - innerHexagonSize) + innerHexagonSize
        const x = centerX + r * Math.cos(angle)
        const y = centerY + r * Math.sin(angle)

        points.push({
          x,
          y,
          originalX: x,
          originalY: y,
          startX: centerX + (Math.random() - 0.5) * canvas.width,
          startY: centerY + (Math.random() - 0.5) * canvas.width,
          size: 1.5 * (Math.random() * 0.5 + 0.5),
          opacity: Math.random() * 0.3 + 0.1,
          isEdge: false,
          speed: 0.5 + Math.random() * 1,
          flowOffset: Math.random() * Math.PI * 2
        })
      }
      
      return points
    }

    const hexagonPoints = createHexagonPoints()
    particles.push(...hexagonPoints)

    let rotationAngle = 0

    const animate = () => {
      const targetProgress = isHovered ? 1 : 0
      const progressDiff = targetProgress - progressRef.current
      progressRef.current += progressDiff * 0.05

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (progressRef.current > 0) {
        const gradient = ctx.createRadialGradient(
          canvas.width/2, canvas.height/2, 0,
          canvas.width/2, canvas.height/2, hexagonSize
        )
        gradient.addColorStop(0, `rgba(243, 46, 151, ${0.1 * progressRef.current})`)
        gradient.addColorStop(1, 'rgba(243, 46, 151, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      particles.forEach(particle => {
        const time = Date.now() * 0.001
        const flowX = Math.cos(time + particle.flowOffset) * (particle.isEdge ? 1 : 2)
        const flowY = Math.sin(time + particle.flowOffset) * (particle.isEdge ? 1 : 2)

        const scatterX = isHovered ? 0 : (Math.random() - 0.5) * 100
        const scatterY = isHovered ? 0 : (Math.random() - 0.5) * 100

        const currentX = particle.startX + (particle.originalX - particle.startX + scatterX) * progressRef.current
        const currentY = particle.startY + (particle.originalY - particle.startY + scatterY) * progressRef.current

        ctx.beginPath()
        ctx.arc(
          currentX + flowX,
          currentY + flowY,
          particle.size,
          0,
          Math.PI * 2
        )
        
        ctx.fillStyle = `rgba(243, 46, 151, ${particle.opacity * progressRef.current})`
        ctx.shadowBlur = particle.isEdge ? 15 : 5
        ctx.shadowColor = 'rgba(243, 46, 151, 0.8)'
        ctx.fill()
      })

      if (isHovered) {
        rotationAngle += 0.001
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered])

  return (
    <motion.div 
      ref={containerRef}
      className="level-particles-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="level-particles" />
    </motion.div>
  )
}

export default SageHexParticles 