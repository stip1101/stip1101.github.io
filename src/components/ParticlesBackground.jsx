import { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    const particles = []
    const particleCount = 25 // Уменьшили с 50 до 25

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.angle = Math.random() * 360
        this.speed = 0.2 + Math.random() * 0.3
        this.color = 'rgba(0, 206, 209, 0.4)' // Оставили только голубой цвет
      }

      update() {
        // Плавное движение по синусоиде
        this.angle += this.speed
        this.x += Math.cos(this.angle * Math.PI / 180) * 0.5
        this.y += Math.sin(this.angle * Math.PI / 180) * 0.5

        // Возвращаем частицы в пределы экрана
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let animationFrameId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(setCanvasSize, 200)
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 3
      }}
    />
  )
}

export default ParticlesBackground 