import { useEffect, useRef, useState } from 'react'

const VIDEO_ID = 'jY7CTSlAO1w'
const SEGMENT = { start: 265, end: 285 }

let apiPromise = null
const loadYouTubeAPI = () => {
  if (apiPromise) return apiPromise
  apiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) return resolve(window.YT)
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
    window.onYouTubeIframeAPIReady = () => resolve(window.YT)
  })
  return apiPromise
}

const MiniGameClip = () => {
  const containerRef = useRef(null)
  const playerRef = useRef(null)
  const intervalRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadYouTubeAPI().then((YT) => {
      if (cancelled || !containerRef.current) return
      playerRef.current = new YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          start: SEGMENT.start,
        },
        events: {
          onReady: (event) => {
            event.target.mute()
            event.target.seekTo(SEGMENT.start, true)
            event.target.playVideo()
            intervalRef.current = setInterval(() => {
              const t = event.target.getCurrentTime?.()
              if (typeof t === 'number' && (t >= SEGMENT.end || t < SEGMENT.start - 1)) {
                event.target.seekTo(SEGMENT.start, true)
              }
            }, 500)
          },
          onStateChange: (event) => {
            if (event.data === 1) setRevealed(true)
            if (event.data === 2) {
              try { event.target.playVideo() } catch (_) { /* noop */ }
            }
          },
        },
      })
    })
    return () => {
      cancelled = true
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy() } catch (_) { /* noop */ }
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden bg-dark-950">
      <div
        className={`absolute inset-0 transition-opacity duration-150 ${revealed ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: 'none' }}
      >
        {/* Inner box scaled to crop the YouTube chrome (title/play button) */}
        <div className="absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0" style={{ transform: 'scale(1.4)', transformOrigin: 'center' }}>
          <div ref={containerRef} className="w-full h-full" />
        </div>
      </div>
      {!revealed && <div className="absolute inset-0 bg-dark-900 animate-pulse" />}
    </div>
  )
}

export default MiniGameClip
