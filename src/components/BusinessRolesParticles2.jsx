import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/BusinessRolesParticles.scss'

const BusinessRolesParticles2 = ({ isHovered }) => {
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
    const innerSize = triangleSize * 0.4 // Размер внутреннего отверстия

    const createDiamondPoints = () => {
      const points = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Создаем точки внешнего и внутреннего ромба
      const outerVertices = [
        { x: centerX, y: centerY - triangleSize }, // Верхняя точка
        { x: centerX + triangleSize, y: centerY }, // Правая точка
        { x: centerX, y: centerY + triangleSize }, // Нижняя точка
        { x: centerX - triangleSize, y: centerY }  // Левая точка
      ]

      const innerVertices = [
        { x: centerX, y: centerY - innerSize }, // Верхняя точка
        { x: centerX + innerSize, y: centerY }, // Правая точка
        { x: centerX, y: centerY + innerSize }, // Нижняя точка
        { x: centerX - innerSize, y: centerY }  // Левая точка
      ]

      // Создаем контуры внешнего и внутреннего ромба
      for (let i = 0; i < 4; i++) {
        const nextI = (i + 1) % 4
        const steps = 30
        
        // Внешний контур
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
            opacity: 0.9,
            isEdge: true,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2
          })
        }

        // Внутренний контур
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
            opacity: 0.9,
            isEdge: true,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2
          })
        }
      }

      // Заполняем пространство между ромбами
      for (let i = 0; i < 400; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * (triangleSize - innerSize) + innerSize
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        const dx = Math.abs(x - centerX)
        const dy = Math.abs(y - centerY)
        
        // Проверяем, находится ли точка между внешним и внутренним ромбом
        if (dx/triangleSize + dy/triangleSize <= 1 && 
            dx/innerSize + dy/innerSize >= 1) {
          points.push({
            x,
            y,
            originalX: x,
            originalY: y,
            startX: centerX + (Math.random() - 0.5) * canvas.width,
            startY: centerY + (Math.random() - 0.5) * canvas.width,
            size: 1.5 * (Math.random() * 0.5 + 0.5),
            opacity: Math.random() * 0.6 + 0.4,
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
        gradient.addColorStop(0, `rgba(0, 255, 255, ${0.15 * progressRef.current})`)
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)')
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
        
        ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity * progressRef.current})`
        ctx.shadowBlur = particle.isEdge ? 15 : 5
        ctx.shadowColor = 'rgba(0, 255, 255, 0.8)'
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

export default BusinessRolesParticles2 