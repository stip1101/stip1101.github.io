import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/LogoAnimation.scss'

const LogoAnimation = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image = new Image()
    image.src = '/images/logohome.svg'

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height
      
      mouseRef.current.x = (e.clientX - rect.left) * scaleX
      mouseRef.current.y = (e.clientY - rect.top) * scaleY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = 0
      mouseRef.current.y = 0
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    image.onload = () => {
      canvas.width = image.width
      canvas.height = image.height
      
      ctx.drawImage(image, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      
      const particles = []
      const step = 6

      // Улучшенная проверка на принадлежность к логотипу
      const isPartOfLogo = (x, y) => {
        const index = (y * canvas.width + x) * 4
        const alpha = pixels[index + 3]
        // Проверяем, что точка действительно является частью логотипа
        return alpha > 128 // Увеличили порог прозрачности
      }
      
      const isEdge = (x, y) => {
        if (!isPartOfLogo(x, y)) return false
        const index = (y * canvas.width + x) * 4
        const current = pixels[index + 3]
        const neighbors = [
          pixels[((y-1) * canvas.width + x) * 4 + 3],
          pixels[((y+1) * canvas.width + x) * 4 + 3],
          pixels[(y * canvas.width + x-1) * 4 + 3],
          pixels[(y * canvas.width + x+1) * 4 + 3]
        ]
        return neighbors.some(n => (current > 128 && n <= 128) || (current <= 128 && n > 128))
      }

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          if (isPartOfLogo(x, y)) {
            const edge = isEdge(x, y)
            if (edge || Math.random() > 0.3) {
              // Случайное начальное положение в пределах canvas
              const randomAngle = Math.random() * Math.PI * 2
              const randomRadius = Math.random() * canvas.width * 0.8
              const startX = canvas.width/2 + Math.cos(randomAngle) * randomRadius
              const startY = canvas.height/2 + Math.sin(randomAngle) * randomRadius

              const particle = {
                x: startX,
                y: startY,
                targetX: x,
                targetY: y,
                size: edge ? 2.5 : 2,
                baseX: x,
                baseY: y,
                density: edge ? 15 : (Math.random() * 8) + 2,
                opacity: edge ? 1 : 0.8,
                initialProgress: 0
              }
              particles.push(particle)
            }
          }
        }
      }
      
      particlesRef.current = particles

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        particles.forEach(particle => {
          // Анимация появления
          if (particle.initialProgress < 1) {
            particle.initialProgress += 0.02
            particle.x += (particle.baseX - particle.x) * 0.05
            particle.y += (particle.baseY - particle.y) * 0.05
          } else {
            // Обычная анимация взаимодействия с мышью
            let dx = mouseRef.current.x - particle.x
            let dy = mouseRef.current.y - particle.y
            let distance = Math.sqrt(dx * dx + dy * dy)
            let forceDirectionX = dx / distance
            let forceDirectionY = dy / distance
            
            const maxDistance = mouseRef.current.radius
            
            if (distance < maxDistance) {
              const force = (maxDistance - distance) / maxDistance
              const directionX = forceDirectionX * force * particle.density
              const directionY = forceDirectionY * force * particle.density
              
              particle.x -= directionX
              particle.y -= directionY
            } else {
              if (particle.x !== particle.baseX) {
                dx = particle.baseX - particle.x
                particle.x += dx * 0.05
              }
              if (particle.y !== particle.baseY) {
                dy = particle.baseY - particle.y
                particle.y += dy * 0.05
              }
            }
          }

          // Отрисовка с учетом прогресса появления
          ctx.beginPath()
          ctx.arc(
            particle.x,
            particle.y,
            particle.size * particle.initialProgress,
            0,
            Math.PI * 2
          )
          ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity * particle.initialProgress})`
          ctx.shadowBlur = (particle.density > 10 ? 15 : 8) * particle.initialProgress
          ctx.shadowColor = 'rgba(0, 255, 255, 0.5)'
          ctx.fill()
        })
        
        requestAnimationFrame(animate)
      }
      
      animate()
    }

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div 
      className="logo-animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <canvas ref={canvasRef} />
    </motion.div>
  )
}

export default LogoAnimation 