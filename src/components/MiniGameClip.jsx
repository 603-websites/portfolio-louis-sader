import { useEffect, useRef } from 'react'

/**
 * Inline ESCAPE gameplay clip. Uses a local mp4 so there's no YouTube
 * pause/unpause overlay flashing on the small mobile tile. The clip is
 * already trimmed to the same 4:25 to 4:45 segment the desktop hero uses.
 */
const MiniGameClip = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
    tryPlay()
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden bg-dark-950">
      <video
        ref={videoRef}
        src="/videos/escape-clip.mp4"
        autoPlay
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
