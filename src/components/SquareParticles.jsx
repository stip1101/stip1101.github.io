import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/LevelParticles.scss'

const SquareParticles = ({ isHovered }) => {
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
    const squareSize = 160
    const innerSquareSize = squareSize * 0.6

    const createSquarePoints = () => {
      const points = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Создаем точки внешнего и внутреннего квадратов
      const outerVertices = [
        { x: centerX - squareSize/2, y: centerY - squareSize/2 },
        { x: centerX + squareSize/2, y: centerY - squareSize/2 },
        { x: centerX + squareSize/2, y: centerY + squareSize/2 },
        { x: centerX - squareSize/2, y: centerY + squareSize/2 }
      ]
      
      const innerVertices = [
        { x: centerX - innerSquareSize/2, y: centerY - innerSquareSize/2 },
        { x: centerX + innerSquareSize/2, y: centerY - innerSquareSize/2 },
        { x: centerX + innerSquareSize/2, y: centerY + innerSquareSize/2 },
        { x: centerX - innerSquareSize/2, y: centerY + innerSquareSize/2 }
      ]

      // Создаем яркие контуры
      for (let i = 0; i < 4; i++) {
        const nextI = (i + 1) % 4
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

      // Добавляем частицы между квадратами
      for (let i = 0; i < 200; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = (squareSize/2 - innerSquareSize/2) * Math.random() + innerSquareSize/2
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

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

    const squarePoints = createSquarePoints()
    particles.push(...squarePoints)

    let rotationAngle = 0

    const animate = () => {
      const targetProgress = isHovered ? 1 : 0
      const progressDiff = targetProgress - progressRef.current
      progressRef.current += progressDiff * 0.05

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (progressRef.current > 0) {
        const gradient = ctx.createRadialGradient(
          canvas.width/2, canvas.height/2, 0,
          canvas.width/2, canvas.height/2, squareSize
        )
        gradient.addColorStop(0, `rgba(77, 255, 223, ${0.1 * progressRef.current})`)
        gradient.addColorStop(1, 'rgba(77, 255, 223, 0)')
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
        
        ctx.fillStyle = `rgba(77, 255, 223, ${particle.opacity * progressRef.current})`
        ctx.shadowBlur = particle.isEdge ? 15 : 5
        ctx.shadowColor = 'rgba(77, 255, 223, 0.8)'
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

export default SquareParticles 