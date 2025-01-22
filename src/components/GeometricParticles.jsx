import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../assets/styles/GeometricParticles.scss'

const GeometricParticles = () => {
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

    const createDiamondPoints = () => {
      const points = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      for (let i = -outerSize; i <= outerSize; i += particleSpacing) {
        for (let j = -outerSize; j <= outerSize; j += particleSpacing) {
          const x = i
          const y = j
          const distanceFromCenter = Math.abs(x) + Math.abs(y)
          
          if (distanceFromCenter <= outerSize && distanceFromCenter >= innerSize) {
            const angle = Math.atan2(y, x)
            const patternOffset = Math.sin(angle * 8) * 15
            
            const isOuterBorder = Math.abs(distanceFromCenter - outerSize) < 15
            const isInnerBorder = Math.abs(distanceFromCenter - innerSize) < 15
            const isPattern = Math.abs(distanceFromCenter - (outerSize - 30)) < patternOffset ||
                            Math.abs(distanceFromCenter - (innerSize + 30)) < patternOffset

            if (isPattern || isOuterBorder || isInnerBorder || distanceFromCenter <= outerSize - 10) {
              // Добавляем начальную позицию для анимации
              const randomAngle = Math.random() * Math.PI * 2
              const randomRadius = Math.random() * canvas.width
              
              points.push({
                x: x,
                y: y,
                z: 0,
                originalX: x,
                originalY: y,
                startX: centerX + Math.cos(randomAngle) * randomRadius,
                startY: centerY + Math.sin(randomAngle) * randomRadius,
                size: isOuterBorder || isInnerBorder ? particleSize * 1.5 : particleSize,
                opacity: isOuterBorder || isInnerBorder ? 1 : 0.6,
                speed: 0.5 + Math.random() * 1,
                flowOffset: Math.random() * Math.PI * 2,
                isPattern: isPattern,
                isBorder: isOuterBorder || isInnerBorder
              })
            }
          }
        }
      }
      return points
    }

    const diamondPoints = createDiamondPoints()
    particles.push(...diamondPoints)

    let rotationAngle = 0
    let currentProgress = 0
    let targetProgress = 0

    // Подписываемся на изменение progress
    const unsubscribe = progress.onChange(value => {
      targetProgress = value
    })

    const animate = () => {
      // Плавно обновляем текущий прогресс
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
        
        // Интерполируем позицию частицы между начальной и конечной
        const currentX = particle.startX + (canvas.width/2 + rotatedX * scale - particle.startX) * currentProgress
        const currentY = particle.startY + (canvas.height/2 + particle.originalY * scale - particle.startY) * currentProgress

        const time = Date.now() * 0.001
        const flowY = Math.sin(time + particle.flowOffset) * 
          (particle.isBorder ? 8 : particle.isPattern ? 12 : 6) * currentProgress
        
        particle.z = z

        ctx.beginPath()
        ctx.arc(
          currentX,
          currentY + flowY,
          particle.size * scale * currentProgress,
          0,
          Math.PI * 2
        )
        
        const dynamicOpacity = particle.opacity * (scale * 0.8) * currentProgress
        ctx.fillStyle = `rgba(0, 255, 255, ${dynamicOpacity})`
        ctx.shadowBlur = (particle.isBorder ? 15 : particle.isPattern ? 8 : 3) * currentProgress
        ctx.shadowColor = particle.isBorder ? 
          'rgba(0, 255, 255, 0.8)' : 'rgba(0, 255, 255, 0.3)'
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

export default GeometricParticles 