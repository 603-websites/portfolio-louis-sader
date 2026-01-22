import { motion } from 'framer-motion'
import { ChevronDown, Terminal, Code2, Database, Cloud } from 'lucide-react'

const Hero = () => {
  const codeSnippet = `const louis = {
  role: "Full-Stack Developer",
  skills: ["Python", "React", "FastAPI"],
  passion: "Building scalable apps",
  status: "Open to opportunities"
};`

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-primary-400 font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Louis Sader</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-dark-300 mb-6 font-medium"
            >
              Full-Stack Software Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-dark-400 text-lg mb-8 max-w-xl leading-relaxed"
            >
              I build scalable, production-ready applications with Python, React, and cloud infrastructure.
              AWS Certified with a passion for clean code and efficient systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 mt-12"
            >
              <span className="text-dark-500 text-sm">Tech Stack:</span>
              <div className="flex items-center gap-4">
                {[
                  { icon: Terminal, label: 'Python' },
                  { icon: Code2, label: 'React' },
                  { icon: Database, label: 'PostgreSQL' },
                  { icon: Cloud, label: 'AWS' },
                ].map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    className="group relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-3 rounded-lg bg-dark-800/50 border border-dark-700/50 group-hover:border-primary-500/50 transition-colors">
                      <Icon size={20} className="text-dark-400 group-hover:text-primary-400 transition-colors" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-dark-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-2xl blur-xl" />

              {/* Code Window */}
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
                      <span className="text-green-400">"Full-Stack Developer"</span>,
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
                      <span className="text-green-400">"Open to opportunities"</span>
                      {'\n'}
                      <span className="text-dark-300">{'};'}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-lg"
              >
                <span className="text-primary-400 font-mono text-sm">AWS Certified</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-lg"
              >
                <span className="text-cyan-400 font-mono text-sm">RWU '25</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-dark-500 hover:text-primary-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
