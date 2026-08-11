import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Inline ESCAPE gameplay clip. Uses a local mp4 so there's no YouTube
 * pause/unpause overlay flashing on the small mobile tile. The clip is
 * already trimmed to the same 4:25 to 4:45 segment the desktop hero uses.
 */
const MiniGameClip = () => {
  const videoRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    // Honor prefers-reduced-motion: leave the clip paused on its first frame.
    if (reduceMotion) return
    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
    tryPlay()
  }, [reduceMotion])

  return (
    <div className="relative w-full h-full overflow-hidden bg-dark-950">
      <video
        ref={videoRef}
        src="/videos/escape-clip.mp4"
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

export default MiniGameClip
