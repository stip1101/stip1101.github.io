import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../assets/styles/GeometricParticles.scss'

const CreativeParticles = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  
  // Добавляем отслеживание скролла
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = 300
    canvas.height = 300

    const particles = []
    const outerSize = 120
    const innerSize = 35
    const particleSize = 1.8

    const createGalaxyPoints = () => {
      const points = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Создаем спиральные рукава галактики
      const arms = 2
      const coils = 2
      const points_per_coil = 100
      
      // Основные рукава спирали
      for (let arm = 0; arm < arms; arm++) {
        const armOffset = (arm * Math.PI * 2) / arms
        
        for (let i = 0; i < points_per_coil * coils; i++) {
          const t = i / points_per_coil
          const distance = (t * outerSize) * 0.9
          
          // Улучшенная формула спирали
          const spiralTightness = 4
          const angle = (t * Math.PI * 2 * coils) + armOffset
          const spiralOffset = (t * spiralTightness)
          
          const baseX = Math.cos(angle + spiralOffset) * distance
          const baseY = Math.sin(angle + spiralOffset) * distance
          
          // Более контролируемое рассеивание
          const scatter = Math.pow(t, 0.5) * 8
          const scatterX = (Math.random() - 0.5) * scatter
          const scatterY = (Math.random() - 0.5) * scatter
          
          const x = baseX + scatterX
          const y = baseY + scatterY
          
          // Добавляем больше частиц ближе к центру
          if (Math.random() > t * 0.3) {
            const randomAngle = Math.random() * Math.PI * 2
            const randomRadius = Math.random() * canvas.width * 1.5

            points.push({
              x,
              y,
              z: 0,
              originalX: x,
              originalY: y,
              startX: centerX + Math.cos(randomAngle) * randomRadius,
              startY: centerY + Math.sin(randomAngle) * randomRadius,
              size: particleSize * (Math.random() * 0.3 + 0.7),
              opacity: Math.random() * 0.3 + 0.7,
              speed: 0.5 + Math.random() * 1,
              flowOffset: Math.random() * Math.PI * 2,
              isBorder: t > 0.85,
              armIndex: arm
            })
          }
        }
      }

      // Добавляем дополнительные частицы между рукавами
      for (let i = 0; i < points_per_coil; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * outerSize * 0.7
        
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance
        
        const randomAngle = Math.random() * Math.PI * 2
        const randomRadius = Math.random() * canvas.width * 1.5
        
        points.push({
          x,
          y,
          z: 0,
          originalX: x,
          originalY: y,
          startX: centerX + Math.cos(randomAngle) * randomRadius,
          startY: centerY + Math.sin(randomAngle) * randomRadius,
          size: particleSize * (Math.random() * 0.3 + 0.5),
          opacity: Math.random() * 0.2 + 0.3,
          speed: 0.5 + Math.random() * 1,
          flowOffset: Math.random() * Math.PI * 2,
          isBorder: false
        })
      }

      // Яркое ядро галактики
      const corePoints = 40
      for (let i = 0; i < corePoints; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.pow(Math.random(), 2) * innerSize
        
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance

        const randomAngle = Math.random() * Math.PI * 2
        const randomRadius = Math.random() * canvas.width * 1.5
        
        points.push({
          x,
          y,
          z: 0,
          originalX: x,
          originalY: y,
          startX: centerX + Math.cos(randomAngle) * randomRadius,
          startY: centerY + Math.sin(randomAngle) * randomRadius,
          size: particleSize * (Math.random() * 2 + 2),
          opacity: Math.random() * 0.5 + 0.5,
          speed: 0.5 + Math.random() * 1,
          flowOffset: Math.random() * Math.PI * 2,
          isBorder: false,
          isCore: true
        })
      }
      
      return points
    }

    const galaxyPoints = createGalaxyPoints()
    particles.push(...galaxyPoints)

    let rotationAngle = 0
    let currentProgress = 0
    let isVisible = true
    let animationFrame = null

    // Следим за видимостью компонента
    const unsubscribe = scrollYProgress.onChange(value => {
      isVisible = value > 0 && value < 1
      if (isVisible && !animationFrame) {
        animate()
      }
    })

    const animate = () => {
      if (!isVisible) {
        currentProgress = Math.max(currentProgress - 0.02, 0)
        if (currentProgress === 0) {
          cancelAnimationFrame(animationFrame)
          animationFrame = null
          return
        }
      } else {
        currentProgress = Math.min(currentProgress + 0.01, 1)
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Добавляем свечение ядра с учетом прогресса
      const coreGradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, innerSize * 2
      )
      coreGradient.addColorStop(0, `rgba(243, 46, 151, ${0.15 * currentProgress})`)
      coreGradient.addColorStop(1, 'rgba(243, 46, 151, 0)')
      ctx.fillStyle = coreGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const sortedParticles = [...particles].sort((a, b) => b.z - a.z)

      sortedParticles.forEach(particle => {
        const cos = Math.cos(rotationAngle + (particle.armIndex || 0) * 0.1)
        const sin = Math.sin(rotationAngle + (particle.armIndex || 0) * 0.1)
        
        const rotatedX = particle.originalX * cos - particle.originalY * sin
        const z = particle.originalX * sin + particle.originalY * cos
        
        const perspective = 800
        const scale = perspective / (perspective + z)
        
        // При исчезновении частицы разлетаются в случайных направлениях
        const scatterX = isVisible ? 0 : (Math.random() - 0.5) * 100
        const scatterY = isVisible ? 0 : (Math.random() - 0.5) * 100
        
        const targetX = canvas.width/2 + rotatedX * scale
        const targetY = canvas.height/2 + particle.originalY * scale
        
        const currentX = particle.startX + (targetX - particle.startX + scatterX) * currentProgress
        const currentY = particle.startY + (targetY - particle.startY + scatterY) * currentProgress

        const time = Date.now() * 0.001
        const flowY = Math.sin(time + particle.flowOffset) * 
          (particle.isBorder ? 8 : 4) * currentProgress
        
        const flowX = Math.cos(time + particle.flowOffset) * 
          (particle.isBorder ? 4 : 2) * currentProgress

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
        ctx.fillStyle = `rgba(243, 46, 151, ${dynamicOpacity})`
        ctx.shadowBlur = particle.isCore ? 20 : (particle.isBorder ? 12 : 6) * currentProgress
        ctx.shadowColor = particle.isCore ? 
          'rgba(243, 46, 151, 0.8)' : 
          'rgba(243, 46, 151, 0.4)'
        ctx.fill()
      })

      if (isVisible) {
        rotationAngle += 0.002
      }
      
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      unsubscribe()
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [scrollYProgress])

  return (
    <motion.div 
      ref={containerRef}
      className="geometric-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="geometric-particles" />
    </motion.div>
  )
}

export default CreativeParticles 