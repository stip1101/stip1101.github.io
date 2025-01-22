import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../assets/styles/GeometricParticles.scss'

const HexagonParticles = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center end"]
  })

  const progress = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = 420
    canvas.height = 420

    const particles = []
    const outerSize = 175
    const innerSize = 70
    const particleSize = 2
    const particleSpacing = 12

    const createHexagonPoints = () => {
      const points = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Создаем 6 вершин шестиугольника
      const vertices = []
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6
        vertices.push({
          x: Math.cos(angle) * outerSize,
          y: Math.sin(angle) * outerSize
        })
      }

      // Создаем точки вдоль сторон шестиугольника
      for (let i = 0; i < vertices.length; i++) {
        const start = vertices[i]
        const end = vertices[(i + 1) % 6]
        const steps = 30
        
        // Добавляем дополнительные точки в вершинах
        for (let v = 0; v < 3; v++) {
          const jitter = (Math.random() - 0.5) * 2
          const randomAngle = Math.random() * Math.PI * 2
          const randomRadius = Math.random() * canvas.width
          
          points.push({
            x: start.x + jitter,
            y: start.y + jitter,
            z: 0,
            originalX: start.x + jitter,
            originalY: start.y + jitter,
            startX: centerX + Math.cos(randomAngle) * randomRadius,
            startY: centerY + Math.sin(randomAngle) * randomRadius,
            size: particleSize * 1.5,
            opacity: 1,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2,
            isBorder: true,
            isPattern: false
          })
        }

        for (let j = 0; j <= steps; j++) {
          const t = j / steps
          const x = start.x + (end.x - start.x) * t
          const y = start.y + (end.y - start.y) * t
          
          // Создаем точки для внешнего контура
          const jitterOuter = (Math.random() - 0.5) * 2
          const randomAngle = Math.random() * Math.PI * 2
          const randomRadius = Math.random() * canvas.width
          
          points.push({
            x: x + jitterOuter,
            y: y + jitterOuter,
            z: 0,
            originalX: x + jitterOuter,
            originalY: y + jitterOuter,
            startX: centerX + Math.cos(randomAngle) * randomRadius,
            startY: centerY + Math.sin(randomAngle) * randomRadius,
            size: particleSize * 1.5,
            opacity: 0.8,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2,
            isBorder: true,
            isPattern: false,
            density: Math.random() * 8 + 2
          })
          
          // Создаем точки для внутреннего контура
          const innerX = (x / outerSize) * innerSize
          const innerY = (y / outerSize) * innerSize
          const jitterInner = (Math.random() - 0.5) * 2
          
          points.push({
            x: innerX + jitterInner,
            y: innerY + jitterInner,
            z: 0,
            originalX: innerX + jitterInner,
            originalY: innerY + jitterInner,
            startX: centerX + Math.cos(randomAngle) * randomRadius,
            startY: centerY + Math.sin(randomAngle) * randomRadius,
            size: particleSize * 1.5,
            opacity: 1,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2,
            isBorder: true,
            isPattern: false
          })
        }
      }

      // Добавляем внутренние точки в форме шестиугольника
      for (let i = 0; i < 200; i++) {
        // Генерируем точки в шестиугольной области
        const angle = Math.random() * Math.PI * 2
        const maxRadius = (outerSize - innerSize) * Math.random() + innerSize
        
        // Преобразуем в шестиугольную форму
        const baseX = Math.cos(angle) * maxRadius
        const baseY = Math.sin(angle) * maxRadius
        
        // Проверяем, находится ли точка внутри шестиугольника
        const distanceFromCenter = Math.max(
          Math.abs(baseX * 0.866 + baseY * 0.5),
          Math.abs(baseX * 0.866 - baseY * 0.5),
          Math.abs(baseY)
        )
        
        if (distanceFromCenter <= outerSize * 0.866) {
          const randomAngle = Math.random() * Math.PI * 2
          const randomRadius = Math.random() * canvas.width
          
          points.push({
            x: baseX,
            y: baseY,
            z: 0,
            originalX: baseX,
            originalY: baseY,
            startX: centerX + Math.cos(randomAngle) * randomRadius,
            startY: centerY + Math.sin(randomAngle) * randomRadius,
            size: particleSize,
            opacity: 0.6,
            speed: 0.5 + Math.random() * 1,
            flowOffset: Math.random() * Math.PI * 2,
            isBorder: false,
            isPattern: true
          })
        }
      }
      
      return points
    }

    const hexagonPoints = createHexagonPoints()
    particles.push(...hexagonPoints)

    let rotationAngle = 0
    let currentProgress = 0
    let targetProgress = 0

    const unsubscribe = progress.onChange(value => {
      targetProgress = value
    })

    const animate = () => {
      currentProgress += (targetProgress - currentProgress) * 0.1

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, innerSize,
        canvas.width/2, canvas.height/2, outerSize
      )
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.05)')
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const sortedParticles = [...particles].sort((a, b) => b.z - a.z)

      sortedParticles.forEach(particle => {
        const cos = Math.cos(rotationAngle)
        const sin = Math.sin(rotationAngle)
        
        const rotatedX = particle.originalX * cos
        const z = particle.originalX * sin
        
        const perspective = 800
        const scale = perspective / (perspective + z)
        
        const currentX = particle.startX + (canvas.width/2 + rotatedX * scale - particle.startX) * currentProgress
        const currentY = particle.startY + (canvas.height/2 + particle.originalY * scale - particle.startY) * currentProgress

        const time = Date.now() * 0.001
        const flowY = Math.sin(time + particle.flowOffset) * 
          (particle.isBorder ? 15 : 8) * currentProgress
        
        const flowX = Math.cos(time + particle.flowOffset) * 
          (particle.isBorder ? 8 : 4) * currentProgress

        particle.z = z

        ctx.beginPath()
        ctx.arc(
          currentX + flowX,
          currentY + flowY,
          particle.size * scale * currentProgress,
          0,
          Math.PI * 2
        )
        
        const dynamicOpacity = particle.opacity * (scale * 0.7) * currentProgress
        ctx.fillStyle = `rgba(0, 255, 255, ${dynamicOpacity})`
        ctx.shadowBlur = particle.isBorder ? 12 : (particle.isPattern ? 6 : 3) * currentProgress
        ctx.shadowColor = particle.isBorder ? 
          'rgba(0, 255, 255, 0.4)' : 'rgba(0, 255, 255, 0.2)'
        ctx.fill()
      })

      rotationAngle += 0.003 * currentProgress
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      unsubscribe()
    }
  }, [progress])

  return (
    <motion.div 
      ref={containerRef}
      className="geometric-container"
    >
      <canvas ref={canvasRef} className="geometric-particles" />
    </motion.div>
  )
}

export default HexagonParticles 