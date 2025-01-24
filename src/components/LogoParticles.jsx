import { useEffect, useRef } from 'react'
import logohome from '/images/logohome.svg'

const LogoParticles = () => {
  const canvasRef = useRef(null)
  const mousePosition = useRef({ x: null, y: null })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const logo = new Image()
    logo.src = logohome
    
    logo.onload = () => {
      // Устанавливаем базовый размер canvas равным размеру логотипа
      canvas.width = logo.width
      canvas.height = logo.height
      
      // Сначала рисуем логотип в оригинальном размере
      ctx.drawImage(logo, 0, 0)
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      
      // Теперь увеличиваем canvas для области движения
      canvas.width = logo.width * 6
      canvas.height = logo.height * 6
      
      // Рисуем логотип по центру увеличенного canvas с масштабом 5.5
      const scaledWidth = logo.width * 5.5
      const scaledHeight = logo.height * 5.5
      const offsetX = (canvas.width - scaledWidth) / 2
      const offsetY = (canvas.height - scaledHeight) / 2
      ctx.drawImage(logo, offsetX, offsetY, scaledWidth, scaledHeight)
      
      const particles = []
      const borderParticles = []
      
      // Создаем частицы на основе оригинальных данных с учетом масштаба
      for(let y = 0; y < logo.height; y += 8) {
        for(let x = 0; x < logo.width; x += 8) {
          const index = (y * logo.width + x) * 4
          const alpha = pixels[index + 3]
          
          if(alpha > 0) {
            const isBorder = checkIfBorder(pixels, x, y, logo.width, logo.height)
            
            // Масштабируем позиции частиц
            const scaledX = (x * 5.5) + offsetX
            const scaledY = (y * 5.5) + offsetY
            
            const particle = {
              x: scaledX + (Math.random() - 0.5) * canvas.width * 0.8,
              y: scaledY + (Math.random() - 0.5) * canvas.height * 0.8,
              size: isBorder ? 18 : 10,
              brightness: isBorder ? 1 : 0.35,
              baseX: scaledX,
              baseY: scaledY,
              density: Math.random() * 20 + 1,
              vx: (Math.random() - 0.5) * 0.3,
              vy: (Math.random() - 0.5) * 0.3,
              initialDelay: Math.random() * 500,
              startTime: Date.now() + Math.random() * 500,
              assembled: false
            }
            
            if(isBorder) {
              // Добавляем дополнительные частицы по контуру
              for(let i = 0; i < 4; i++) {
                const offset = (Math.random() - 0.5) * 6
                borderParticles.push({
                  ...particle,
                  x: scaledX + offset,
                  y: scaledY + offset,
                  baseX: scaledX + offset,
                  baseY: scaledY + offset,
                  size: 15 + Math.random() * 5,
                  brightness: 0.95 + Math.random() * 0.05,
                  density: Math.random() * 15 + 5
                })
              }
              borderParticles.push(particle)
            } else {
              particles.push(particle)
              // Добавляем дополнительные внутренние частицы
              if(Math.random() > 0.5) {
                const offset = (Math.random() - 0.5) * 15
                particles.push({
                  ...particle,
                  x: scaledX + offset,
                  y: scaledY + offset,
                  baseX: scaledX + offset,
                  baseY: scaledY + offset,
                  size: 8 + Math.random() * 4,
                  brightness: 0.2 + Math.random() * 0.15
                })
              }
            }
          }
        }
      }
      
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const currentTime = Date.now()
        const allParticles = [...particles, ...borderParticles]
        
        allParticles.forEach(particle => {
          if (!particle.assembled) {
            const timeSinceStart = currentTime - particle.startTime
            if (timeSinceStart > 0) {
              const progress = Math.min(timeSinceStart / 1000, 1)
              const easeProgress = 1 - Math.pow(1 - progress, 3)

              particle.x = particle.x + (particle.baseX - particle.x) * easeProgress
              particle.y = particle.y + (particle.baseY - particle.y) * easeProgress
              
              if (progress === 1) {
                particle.assembled = true
              }
            }
          } else {
            if (mousePosition.current.x !== null) {
              let dx = mousePosition.current.x - particle.x
              let dy = mousePosition.current.y - particle.y
              let distance = Math.sqrt(dx * dx + dy * dy)
              let forceDirectionX = dx / distance
              let forceDirectionY = dy / distance
              
              const maxDistance = 400
              let force = (maxDistance - distance) / maxDistance
              
              if (force < 0) force = 0
              
              let directionX = (forceDirectionX * force * particle.density) * -2
              let directionY = (forceDirectionY * force * particle.density) * -2
              
              if (distance < maxDistance) {
                const newX = particle.x + directionX
                const newY = particle.y + directionY
                
                const margin = particle.size * 2
                const minX = offsetX - margin
                const maxX = offsetX + scaledWidth + margin
                const minY = offsetY - margin
                const maxY = offsetY + scaledHeight + margin
                
                if (newX > minX && newX < maxX && newY > minY && newY < maxY) {
                  particle.x = newX
                  particle.y = newY
                }
              }
            }

            const newX = particle.x + particle.vx + Math.sin(Date.now() * 0.001 + particle.baseX * 0.5) * 0.3
            const newY = particle.y + particle.vy + Math.cos(Date.now() * 0.001 + particle.baseY * 0.5) * 0.3
            
            const margin = particle.size * 2
            const minX = offsetX - margin
            const maxX = offsetX + scaledWidth + margin
            const minY = offsetY - margin
            const maxY = offsetY + scaledHeight + margin
            
            if (newX > minX && newX < maxX && newY > minY && newY < maxY) {
              particle.x = newX
              particle.y = newY
            }
            
            const dx = particle.baseX - particle.x
            const dy = particle.baseY - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance > 50) {
              particle.x += dx * 0.05
              particle.y += dy * 0.05
            }
            
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size
            )
            gradient.addColorStop(0, `rgba(0, 206, 209, ${particle.brightness})`)
            gradient.addColorStop(0.4, `rgba(0, 206, 209, ${particle.brightness * 0.7})`)
            gradient.addColorStop(1, 'rgba(0, 206, 209, 0)')
            
            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fill()
          }
        })
        
        requestAnimationFrame(animate)
      }

      canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect()
        const scaleX = canvas.width / rect.width
        const scaleY = canvas.height / rect.height
        
        mousePosition.current = {
          x: (event.clientX - rect.left) * scaleX,
          y: (event.clientY - rect.top) * scaleY
        }
      })
      
      canvas.addEventListener('mouseleave', () => {
        mousePosition.current = { x: null, y: null }
      })
      
      animate()
    }
  }, [])

  function checkIfBorder(pixels, x, y, width, height) {
    const threshold = 10
    const checkRadius = 3
    
    for(let i = -checkRadius; i <= checkRadius; i++) {
      for(let j = -checkRadius; j <= checkRadius; j++) {
        if(i === 0 && j === 0) continue
        
        const newX = x + i * 3
        const newY = y + j * 3
        
        if(newX >= 0 && newX < width && newY >= 0 && newY < height) {
          const index = (newY * width + newX) * 4
          const currentAlpha = pixels[(y * width + x) * 4 + 3]
          const neighborAlpha = pixels[index + 3]
          if (Math.abs(currentAlpha - neighborAlpha) > threshold) return true
        } else {
          return true
        }
      }
    }
    return false
  }

  return (
    <canvas 
      ref={canvasRef}
      className="background-logo"
      style={{
        opacity: 1,
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default LogoParticles 