import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Gamepad2, Trophy, Sparkles, ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import YouTubeBackground from './YouTubeBackground'
import MiniGameClip from './MiniGameClip'

const HERO_NCAA_PHOTOS = [
  { src: '/images/ncaa/steeple.webp',  caption: 'Steeplechase',     objectPosition: 'center 15%' },
  { src: '/images/ncaa/conn.webp',     caption: 'Conn College Inv', objectPosition: 'center'      },
  { src: '/images/ncaa/wickham.webp',  caption: 'Wickham Park',     objectPosition: 'center'      },
  { src: '/images/ncaa/brown.webp',    caption: 'Brown University', objectPosition: 'center'      },
  { src: '/images/ncaa/IMG_8700.webp', caption: 'Cross Country',    objectPosition: 'center'      },
  { src: '/images/ncaa/IMG_5013.webp', caption: 'Track & Field',    objectPosition: 'center'      },
]

const MiniNCAACarousel = () => {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_NCAA_PHOTOS.length), 2000)
    return () => clearInterval(id)
  }, [])
  const photo = HERO_NCAA_PHOTOS[idx]
  return (
    <div className="relative w-full h-full overflow-hidden bg-dark-950">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={photo.src}
          alt={photo.caption}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: photo.objectPosition }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  )
}

const ImageWithLoader = ({ src, webpSrc, alt, className, eager = false }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative">
      {!loaded && (
        <div className={`${className} bg-dark-800 animate-pulse`} />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          loading={eager ? 'eager' : 'lazy'}
          fetchpriority={eager ? 'high' : 'auto'}
        />
      </picture>
    </div>
  )
}

const Hero = () => {
  return (
    <section id="home" className="lg:min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-20 pb-8 lg:pb-0">
      {/* Game-dev clip background. Desktop only. Mobile shows the global
          dark theme + orbs/particles instead. */}
      <div className="hidden lg:block absolute inset-0">
        <YouTubeBackground />
      </div>

      {/* Desktop-only: radial dark glow over the video, behind the hero text. */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden lg:block"
        style={{
          background: `radial-gradient(
            ellipse 720px 520px at 28% 50%,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.55) 40%,
            transparent 75%
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile inline profile pic + name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-4 lg:hidden"
            >
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-primary-500/50">
                <picture>
                  <source srcSet="/images/profile/louis-sader.webp" type="image/webp" />
                  <img
                    src="/images/profile/louis-sader.jpeg"
                    alt="Louis Sader"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </picture>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Louis Sader</span>
              </h1>
            </motion.div>

            {/* Desktop name only */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Louis Sader</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-2xl text-dark-100 mb-2 sm:mb-3 font-medium"
            >
              DevOps Software Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-dark-200 text-sm lg:text-base mb-4 sm:mb-6 max-w-xl leading-relaxed"
            >
              Building cloud and AI infrastructure with AWS, Terraform, Docker, and CI/CD pipelines. AWS Solutions Architect Associate certified, pursuing CompTIA Security+ next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4"
            >
              <a href="/documents/DevOps Software Developer - Louis Sader - Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Resume
              </a>
              <a href="https://github.com/louissader" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                <Github size={18} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/louis-sader/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 relative z-10 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </motion.div>

            {/* Mobile-only "fun" row: ESCAPE game clip + NCAA mini carousel.
                Two square tiles below the buttons. Hidden on lg where the
                desktop hero already has the video background + code window. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="lg:hidden grid grid-cols-2 gap-3 mt-[34px]"
            >
              <a
                href="https://github.com/louissader/ESCAPE"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-visible border border-primary-500/30 hover:border-primary-400/70 transition-colors"
              >
                {/* Floating "I built this" sticker, bobs gently to draw the eye */}
                <motion.div
                  animate={{ y: [0, -3, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-2 z-20 px-2 py-1 bg-[#0a1f44] border border-[#1e3a8a] text-white text-[10px] font-bold rounded-md shadow-lg shadow-black/50 flex items-center gap-1 whitespace-nowrap"
                >
                  <Sparkles size={10} />
                  I built this
                </motion.div>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-1 right-2 z-20 text-primary-400 drop-shadow-[0_0_6px_rgba(14,165,233,0.6)]"
                >
                  <ArrowDown size={14} />
                </motion.div>

                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <MiniGameClip />
                  <div className="absolute inset-x-0 bottom-0 px-2 py-1.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center gap-1.5 text-white text-[11px] font-medium">
                    <Gamepad2 size={12} />
                    ESCAPE (Unity)
                  </div>
                </div>
              </a>

              <a
                href="#ncaa"
                className="group relative aspect-square rounded-xl overflow-hidden border border-primary-500/30 hover:border-primary-400/70 transition-colors"
              >
                <MiniNCAACarousel />
                <div className="absolute inset-x-0 bottom-0 px-2 py-1.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center gap-1.5 text-white text-[11px] font-medium">
                  <Trophy size={12} />
                  NCAA Athlete
                </div>
                <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 text-[9px] font-mono bg-black/60 backdrop-blur rounded text-primary-300 uppercase tracking-wider">6×</span>
              </a>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden lg:flex items-center gap-6 mt-12"
            >
              <span className="text-white text-sm font-medium">Stack:</span>
              <div className="flex items-center gap-3 sm:gap-4">
                {[
                  { src: '/images/logos/aws.svg',        label: 'AWS' },
                  { src: '/images/logos/docker.svg',     label: 'Docker' },
                  { src: '/images/logos/kubernetes.svg', label: 'Kubernetes' },
                  { src: '/images/logos/terraform.svg',  label: 'Terraform' },
                  { src: '/images/logos/comptia.svg',    label: 'CompTIA Security+' },
                ].map(({ src, label }) => (
                  <motion.div
                    key={label}
                    className="group relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-3 rounded-lg bg-dark-800/50 border border-dark-700/50 group-hover:border-primary-500/50 transition-colors">
                      <img src={src} alt={label} className="w-6 h-6 object-contain" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-dark-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image & Code Card (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block -mt-10"
          >
            <div className="relative flex flex-col gap-6">
              {/* Profile Image */}
              <div className="relative w-[70%] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
                <div className="relative glass rounded-2xl overflow-hidden p-2">
                  <ImageWithLoader
                    src="/images/profile/louis-sader.jpeg"
                    webpSrc="/images/profile/louis-sader.webp"
                    alt="Louis Sader - DevOps Software Developer"
                    className="w-full h-auto rounded-xl object-cover"
                    eager
                  />
                </div>
                {/* Floating Element - AWS */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 -right-3 px-3 py-1.5 glass rounded-lg"
                >
                  <span className="text-primary-400 font-mono text-xs">AWS Certified</span>
                </motion.div>
              </div>

              {/* Code Window */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-2xl blur-xl" />
                <div className="relative glass rounded-2xl overflow-hidden">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/80 border-b border-dark-700/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-dark-500 text-sm font-mono ml-2">developer.js</span>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm">
                    <pre className="text-dark-300 leading-relaxed">
                      <code>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-yellow-400">louis</span>{' '}
                        <span className="text-primary-400">=</span>{' '}
                        <span className="text-dark-300">{'{'}</span>
                        {'\n'}
                        {'  '}<span className="text-cyan-400">role</span>:{' '}
                        <span className="text-green-400">"DevOps Developer"</span>,
                        {'\n'}
                        {'  '}<span className="text-cyan-400">skills</span>:{' '}
                        <span className="text-dark-300">[</span>
                        <span className="text-green-400">"Python"</span>,{' '}
                        <span className="text-green-400">"React"</span>,{' '}
                        <span className="text-green-400">"FastAPI"</span>
                        <span className="text-dark-300">]</span>,
                        {'\n'}
                        {'  '}<span className="text-cyan-400">passion</span>:{' '}
                        <span className="text-green-400">"Building scalable apps"</span>,
                        {'\n'}
                        {'  '}<span className="text-cyan-400">status</span>:{' '}
                        <span className="text-green-400">"Building at SSSC"</span>
                        {'\n'}
                        <span className="text-dark-300">{'};'}</span>
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Floating Element - RWU */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 glass rounded-lg"
                >
                  <span className="text-cyan-400 font-mono text-sm">RWU '25</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden lg:block absolute lg:left-1/2 lg:-translate-x-[calc(50%+60px)] lg:bottom-[55px]"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white hover:text-primary-400 transition-colors scale-100 lg:scale-150"
          >
            <span className="text-sm font-bold mb-2">Scroll to explore</span>
            <ChevronDown size={30} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
