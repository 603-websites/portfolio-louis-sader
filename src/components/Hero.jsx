import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import YouTubeBackground from './YouTubeBackground'

const ImageWithLoader = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative">
      {!loaded && (
        <div className={`${className} bg-dark-800 animate-pulse`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Game-dev clip background (random gameplay segment, ~30s loop) */}
      <YouTubeBackground />

      {/* Radial gradient: dark glow behind the hero text only.
          Inspired by the elite-detailing About-page pattern (Louis's own work). */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse 720px 520px at 28% 50%,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.55) 40%,
            transparent 75%
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="flex items-center gap-4 mb-6 lg:hidden"
            >
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-primary-500/50">
                <img
                  src="/images/profile/louis-sader.jpeg"
                  alt="Louis Sader"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
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
              className="text-xl sm:text-2xl text-dark-100 mb-3 font-medium"
            >
              DevOps Software Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-dark-200 text-base mb-6 max-w-xl"
            >
              Building cloud and AI infrastructure with AWS, Terraform, Docker, and CI/CD pipelines. AWS Solutions Architect Associate certified, pursuing CompTIA Security+ next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/documents/DevOps Software Developer - Louis Sader - Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                View My Resume
              </a>
              <a href="https://github.com/louissader" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/louis-sader/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 relative z-10">
                <Linkedin size={20} />
                LinkedIn
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
                    alt="Louis Sader - DevOps Software Developer"
                    className="w-full h-auto rounded-xl object-cover"
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
          className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 lg:left-1/2 lg:-translate-x-[calc(50%+60px)] lg:bottom-[55px]"
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
