import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/BusinessRolesParticles.scss'

const BusinessRolesParticles3 = ({ isHovered }) => {
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
    const triangleSize = 140
    const crossThickness = triangleSize * 0.15
    const crossSize = triangleSize * 0.4

    const createDiamondPoints = () => {
      const points = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Создаем точки внешнего ромба
      const outerVertices = [
        { x: centerX, y: centerY - triangleSize }, // Верхняя точка
        { x: centerX + triangleSize, y: centerY }, // Правая точка
        { x: centerX, y: centerY + triangleSize }, // Нижняя точка
        { x: centerX - triangleSize, y: centerY }  // Левая точка
      ]

      // Создаем точки для внутреннего квадрата
      const squareSize = triangleSize * 0.4 // Размер квадратного отверстия
      const squareVertices = [
        { x: centerX - squareSize, y: centerY - squareSize }, // Верхний левый
        { x: centerX + squareSize, y: centerY - squareSize }, // Верхний правый
        { x: centerX + squareSize, y: centerY + squareSize }, // Нижний правый
        { x: centerX - squareSize, y: centerY + squareSize }  // Нижний левый
      ]

      // Создаем контур внешнего ромба
      for (let i = 0; i < 4; i++) {
        const nextI = (i + 1) % 4
        const steps = 30
        
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
            opacity: 1,
            isEdge: true,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2
          })
        }
      }

      // Создаем контур внутреннего квадрата
      for (let i = 0; i < 4; i++) {
        const nextI = (i + 1) % 4
        const steps = 30
        
        for (let j = 0; j < steps; j++) {
          const t = j / steps
          const x = squareVertices[i].x + (squareVertices[nextI].x - squareVertices[i].x) * t
          const y = squareVertices[i].y + (squareVertices[nextI].y - squareVertices[i].y) * t
          
          points.push({
            x,
            y,
            originalX: x,
            originalY: y,
            startX: centerX + (Math.random() - 0.5) * canvas.width,
            startY: centerY + (Math.random() - 0.5) * canvas.width,
            size: 2.5,
            opacity: 1,
            isEdge: true,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2
          })
        }
      }

      // Заполняем пространство между ромбом и квадратом
      for (let i = 0; i < 500; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * triangleSize
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        const dx = Math.abs(x - centerX)
        const dy = Math.abs(y - centerY)
        
        // Проверяем, находится ли точка внутри ромба, но вне квадрата
        const isInDiamond = dx/triangleSize + dy/triangleSize <= 1
        const isInSquare = Math.max(Math.abs(x - centerX), Math.abs(y - centerY)) <= squareSize
        
        if (isInDiamond && !isInSquare) {
          points.push({
            x,
            y,
            originalX: x,
            originalY: y,
            startX: centerX + (Math.random() - 0.5) * canvas.width,
            startY: centerY + (Math.random() - 0.5) * canvas.width,
            size: 2 * (Math.random() * 0.5 + 0.5),
            opacity: Math.random() * 0.7 + 0.5,
            isEdge: false,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2
          })
        }
      }
      
      return points
    }

    const diamondPoints = createDiamondPoints()
    particles.push(...diamondPoints)

    let rotationAngle = 0

    const animate = () => {
      const targetProgress = isHovered ? 1 : 0
      const progressDiff = targetProgress - progressRef.current
      progressRef.current += progressDiff * 0.05

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (progressRef.current > 0) {
        const gradient = ctx.createRadialGradient(
          canvas.width/2, canvas.height/2, 0,
          canvas.width/2, canvas.height/2, triangleSize
        )
        gradient.addColorStop(0, `rgba(51, 204, 255, ${0.25 * progressRef.current})`)
        gradient.addColorStop(1, 'rgba(51, 204, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      particles.forEach(particle => {
        const time = Date.now() * 0.001
        const flowX = Math.cos(time + particle.flowOffset) * (particle.isEdge ? 1.5 : 3)
        const flowY = Math.sin(time + particle.flowOffset) * (particle.isEdge ? 1.5 : 3)

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
        
        ctx.fillStyle = `rgba(51, 204, 255, ${particle.opacity * 1.2 * progressRef.current})`
        ctx.shadowBlur = particle.isEdge ? 20 : 10
        ctx.shadowColor = 'rgba(51, 204, 255, 1)'
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
      className="business-roles-particles"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} />
    </motion.div>
  )
}

export default BusinessRolesParticles3 