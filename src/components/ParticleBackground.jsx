import { useEffect, useRef } from 'react'

const NUM_PARTICLES = 60

function generateParticles() {
  return Array.from({ length: NUM_PARTICLES }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 80,
    opacity: Math.random() * 0.6 + 0.2,
    color: Math.random() > 0.5 ? '#FF2020' : '#FF6B35',
  }))
}

const particles = generateParticles()

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationId
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    // Canvas-based ember particles
    const embers = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height + height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -(Math.random() * 0.8 + 0.3),
      size: Math.random() * 2.5 + 0.5,
      life: Math.random(),
      maxLife: Math.random() * 0.8 + 0.4,
      color: Math.random() > 0.4 ? '#FF2020' : '#FF6B35',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      embers.forEach((ember) => {
        ember.x += ember.vx
        ember.y += ember.vy
        ember.life += 0.003

        if (ember.life > ember.maxLife || ember.y < -10) {
          ember.x = Math.random() * width
          ember.y = height + 10
          ember.vx = (Math.random() - 0.5) * 0.6
          ember.vy = -(Math.random() * 0.8 + 0.3)
          ember.life = 0
          ember.maxLife = Math.random() * 0.8 + 0.4
        }

        const progress = ember.life / ember.maxLife
        const alpha = Math.sin(progress * Math.PI) * 0.8

        ctx.save()
        ctx.globalAlpha = alpha
        ctx.shadowBlur = 8
        ctx.shadowColor = ember.color
        ctx.fillStyle = ember.color
        ctx.beginPath()
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep void gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-dark via-[#08010A] to-[#120008]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-80" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Radial glow centers */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blood/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-ember/5 blur-[100px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-blood-dark/10 blur-[80px]" />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Horizontal scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="scan-overlay absolute inset-0 h-[200px] w-full" />
      </div>
    </div>
  )
}
