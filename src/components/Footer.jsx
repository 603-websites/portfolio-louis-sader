import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/louissader', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/louis-sader-a6a391287/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@louissader.dev', label: 'Email' },
  ]

  return (
    <footer className="relative py-12 border-t border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold gradient-text inline-block mb-2">
              LS
            </a>
            <p className="text-dark-500 text-sm">
              Full-Stack Software Developer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center
                         text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                whileHover={{ y: -3 }}
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm flex items-center gap-1">
            {currentYear} Louis Sader. Built with
            <Heart size={14} className="text-red-500" />
            using React & Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
