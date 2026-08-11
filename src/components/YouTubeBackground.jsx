import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const VIDEO_ID = 'jY7CTSlAO1w'

/**
 * Fixed gameplay loop window: 4:25 to 4:45. Hard-coded per Louis's pick.
 * Edit start/end here if you want a different window or want to randomize
 * across multiple gameplay segments later.
 */
const SEGMENT = { start: 265, end: 285 }
const pickSegment = () => SEGMENT

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

const YouTubeBackground = () => {
  const containerRef = useRef(null)
  const playerRef = useRef(null)
  const intervalRef = useRef(null)
  // One-shot reveal: once the video has hit PLAYING once, we keep the iframe
  // at full opacity forever. Subsequent BUFFERING transitions (every 30s when
  // the loop seeks back) used to flip this off and re-trigger the fade-in,
  // which read as the video "getting brighter every couple seconds." Now it
  // snaps to bright and stays.
  const [revealed, setRevealed] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    // Reduced-motion visitors get the static dark underlay, not the motion clip.
    if (reduceMotion) return
    let cancelled = false
    const segment = pickSegment()

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
          start: segment.start,
        },
        events: {
          onReady: (event) => {
            event.target.mute()
            event.target.seekTo(segment.start, true)
            event.target.playVideo()
            intervalRef.current = setInterval(() => {
              const t = event.target.getCurrentTime?.()
              if (typeof t === 'number' && (t >= segment.end || t < segment.start - 1)) {
                event.target.seekTo(segment.start, true)
              }
            }, 500)
          },
          onStateChange: (event) => {
            // YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
            // Reveal iframe the FIRST time PLAYING fires and never hide it again.
            // The 1.35x iframe scale already crops the YouTube title and play-button overlays.
            if (event.data === 1) setRevealed(true)
            // If anything pauses it (network blip, tab visibility), just resume
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
  }, [reduceMotion])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* iframe pops to full opacity in a quick 120ms transition the first time
          PLAYING fires. After that it stays put. No more recurring fade-ins. */}
      <div className={`youtube-bg-iframe transition-opacity duration-150 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        <div ref={containerRef} />
      </div>
      {/* Black underlay only matters during the brief pre-PLAYING window. */}
      <div className={`absolute inset-0 bg-dark-950 transition-opacity duration-150 ${revealed ? 'opacity-0' : 'opacity-100'}`} />
      {/* Bottom fade keeps a clean transition into the next section. */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-dark-950" />
    </div>
  )
}

export default YouTubeBackground
