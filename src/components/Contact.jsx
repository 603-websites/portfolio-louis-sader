import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'louissader42@gmail.com',
      href: 'mailto:louissader42@gmail.com',
      primary: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/louis-sader',
      href: 'https://www.linkedin.com/in/louis-sader/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/louissader',
      href: 'https://github.com/louissader',
    },
    {
      icon: MapPin,
      label: 'Based in',
      value: 'Windham, NH',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12"
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            Open to engineering roles, freelance work, and chats with fellow builders.
          </p>
        </motion.div>

        {/* Primary CTA + secondary channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid lg:grid-cols-5 gap-6 lg:gap-5"
        >
          {/* Big email card (spans 3 columns on desktop) */}
          <a
            href="mailto:louissader42@gmail.com"
            className="lg:col-span-3 group relative overflow-hidden rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-primary-500/15 via-cyan-500/10 to-dark-900/60 border border-primary-500/30 hover:border-primary-400/60 transition-all"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-colors" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-primary-400 text-xs uppercase tracking-widest font-mono mb-3">Best way to reach me</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Send an email</h3>
                <p className="text-dark-300 text-sm sm:text-base mb-5 max-w-md">
                  Best way to reach me. I read every message and reply within a day or two.
                </p>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/95 text-dark-950 font-semibold text-sm group-hover:bg-white transition-colors">
                  louissader42@gmail.com
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <div className="hidden sm:flex w-14 h-14 rounded-xl bg-white/10 items-center justify-center shrink-0">
                <Mail size={28} className="text-white" />
              </div>
            </div>
          </a>

          {/* Secondary channels stack (2 columns on desktop) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {channels.slice(1).map((c) => (
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-dark-900/60 border border-dark-700/50 hover:border-primary-500/50 hover:bg-dark-900/80 transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-dark-800/80 flex items-center justify-center shrink-0 group-hover:bg-primary-500/15 transition-colors">
                    <c.icon size={20} className="text-dark-300 group-hover:text-primary-400 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-dark-500 text-xs uppercase tracking-wider font-mono">{c.label}</p>
                    <p className="text-white text-sm font-medium truncate">{c.value}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-dark-600 group-hover:text-primary-400 transition-colors shrink-0" />
                </a>
              ) : (
                <div
                  key={c.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/60 border border-dark-700/50"
                >
                  <div className="w-11 h-11 rounded-lg bg-dark-800/80 flex items-center justify-center shrink-0">
                    <c.icon size={20} className="text-dark-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-dark-500 text-xs uppercase tracking-wider font-mono">{c.label}</p>
                    <p className="text-white text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
