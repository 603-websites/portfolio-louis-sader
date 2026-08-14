import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// Curl-noise particle flow field, ported from the Oryx Technologies landing
// page (HeroParticles.tsx) and in the original Oryx gold/silver palette:
// short particle streaks drift along a value-noise curl field, with a swirl +
// soft bloom that follows the cursor on hover-capable devices. The canvas is
// fixed to the viewport so the field runs behind every section, and stays
// transparent: trails fade via destination-out so the page gradient and orbs
// show through. Reduced motion: the field is skipped entirely and the static
// orbs in App.jsx carry the background.

/* gold weighted double so the field reads warm, silver as accent —
 * identical to the Oryx landing page palette */
const PALETTE = [
  [212, 162, 86],
  [212, 162, 86],
  [232, 200, 150],
  [184, 134, 60],
  [196, 196, 205],
  [220, 220, 228],
]

const FREQ = 0.0016
const SWIRL_RADIUS = 210
const MAX_PARTICLES = 1000

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined
    const canvas = canvasRef.current
    if (!canvas) return undefined

    let raf = 0
    let disposed = false
    let visible = true
    let cleanupLoop = null

    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    const init = () => {
      if (disposed) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      let W = 0
      let H = 0
      let particles = []

      const spawn = () => {
        const c = PALETTE[(Math.random() * PALETTE.length) | 0]
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: 0,
          vy: 0,
          life: Math.random() * 300 + 120,
          age: 0,
          w: Math.random() * 1.2 + 0.4,
          c,
          a: Math.random() * 0.5 + 0.25,
        }
      }

      const resize = () => {
        W = canvas.clientWidth
        H = canvas.clientHeight
        canvas.width = Math.max(1, Math.floor(W * dpr))
        canvas.height = Math.max(1, Math.floor(H * dpr))
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        const count = Math.min(MAX_PARTICLES, Math.floor((W * H) / 1500))
        particles = []
        for (let i = 0; i < count; i++) particles.push(spawn())
        ctx.clearRect(0, 0, W, H)
      }
      resize()
      window.addEventListener('resize', resize)

      /* value-noise curl field */
      const hash = (ix, iy) => {
        let h = (ix * 374761393 + iy * 668265263) | 0
        h = ((h ^ (h >> 13)) * 1274126177) | 0
        h = (h ^ (h >> 16)) | 0
        return (h & 0x7fffffff) / 0x7fffffff
      }
      const smooth = (t) => t * t * (3 - 2 * t)
      const noise2 = (x, y) => {
        const x0 = Math.floor(x)
        const y0 = Math.floor(y)
        const fx = x - x0
        const fy = y - y0
        const v00 = hash(x0, y0)
        const v10 = hash(x0 + 1, y0)
        const v01 = hash(x0, y0 + 1)
        const v11 = hash(x0 + 1, y0 + 1)
        const ux = smooth(fx)
        const uy = smooth(fy)
        const a = v00 + (v10 - v00) * ux
        const b = v01 + (v11 - v01) * ux
        return a + (b - a) * uy
      }
      const curl = (x, y, t) => {
        const e = 1.2
        const n1 = noise2(x * FREQ, (y + e) * FREQ + t)
        const n2 = noise2(x * FREQ, (y - e) * FREQ + t)
        const n3 = noise2((x + e) * FREQ + t, y * FREQ)
        const n4 = noise2((x - e) * FREQ + t, y * FREQ)
        return { x: n1 - n2, y: -(n3 - n4) }
      }

      const mouse = { x: -9999, y: -9999, active: false }
      const bloom = { x: -9999, y: -9999, a: 0 }
      const onPointerMove = (e) => {
        const r = canvas.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        if (x < 0 || y < 0 || x > r.width || y > r.height) {
          mouse.active = false
          return
        }
        mouse.x = x
        mouse.y = y
        if (!mouse.active) {
          bloom.x = x
          bloom.y = y
        }
        mouse.active = true
      }
      if (hasHover) window.addEventListener('pointermove', onPointerMove, { passive: true })

      let t = 0
      const R2 = SWIRL_RADIUS * SWIRL_RADIUS
      const loop = () => {
        if (disposed) return
        raf = requestAnimationFrame(loop)
        if (!visible) return
        t += 0.0008

        /* erode previous frame's alpha instead of clearing: keeps the streak
         * trails while the canvas stays transparent over the page gradient */
        ctx.globalCompositeOperation = 'destination-out'
        ctx.fillStyle = 'rgba(0,0,0,0.075)'
        ctx.fillRect(0, 0, W, H)

        if (mouse.active) {
          bloom.x += (mouse.x - bloom.x) * 0.08
          bloom.y += (mouse.y - bloom.y) * 0.08
          bloom.a += (0.9 - bloom.a) * 0.06
        } else {
          bloom.a += (0 - bloom.a) * 0.05
        }

        ctx.globalCompositeOperation = 'lighter'
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const f = curl(p.x, p.y, t)
          p.vx += f.x * 42
          p.vy += f.y * 42
          if (mouse.active) {
            const dx = p.x - bloom.x
            const dy = p.y - bloom.y
            const d2 = dx * dx + dy * dy
            if (d2 < R2) {
              const d = Math.sqrt(d2) || 1
              const fall = 1 - d / SWIRL_RADIUS
              const s = fall * fall
              p.vx += (-dy / d) * 0.9 * s
              p.vy += (dx / d) * 0.9 * s
              p.vx += (-dx / d) * 0.7 * s
              p.vy += (-dy / d) * 0.7 * s
            }
          }
          p.vx *= 0.86
          p.vy *= 0.86
          const sp = Math.hypot(p.vx, p.vy)
          const max = 2.6
          if (sp > max) {
            p.vx = (p.vx / sp) * max
            p.vy = (p.vy / sp) * max
          }
          const nx = p.x + p.vx
          const ny = p.y + p.vy
          const glow = Math.min(1, 0.25 + sp * 0.42)
          ctx.strokeStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${p.a * glow})`
          ctx.lineWidth = p.w
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(nx, ny)
          ctx.stroke()
          p.x = nx
          p.y = ny
          p.age++
          if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20 || p.age > p.life) {
            particles[i] = spawn()
          }
        }

        if (bloom.a > 0.01) {
          const rad = 20
          const g = ctx.createRadialGradient(bloom.x, bloom.y, 0, bloom.x, bloom.y, rad)
          g.addColorStop(0, `rgba(232,200,150,${0.16 * bloom.a})`)
          g.addColorStop(0.4, `rgba(212,162,86,${0.07 * bloom.a})`)
          g.addColorStop(1, 'rgba(212,162,86,0)')
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.arc(bloom.x, bloom.y, rad, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(loop)
      canvas.style.opacity = '0.62'

      cleanupLoop = () => {
        window.removeEventListener('resize', resize)
        if (hasHover) window.removeEventListener('pointermove', onPointerMove)
        cancelAnimationFrame(raf)
      }
    }

    // Defer init until the browser is idle so hero content paints first.
    const idleId =
      'requestIdleCallback' in window
        ? requestIdleCallback(init, { timeout: 1200 })
        : setTimeout(init, 350)

    const onVisibility = () => {
      visible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      disposed = true
      if ('requestIdleCallback' in window) cancelIdleCallback(idleId)
      else clearTimeout(idleId)
      document.removeEventListener('visibilitychange', onVisibility)
      cleanupLoop?.()
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-1000"
      style={{ opacity: 0 }}
    />
  )
}

export default ParticleBackground
