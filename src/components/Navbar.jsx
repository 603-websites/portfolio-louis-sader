import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LS
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-dark-300 hover:text-primary-400 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/louissader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              whileHover={{ y: -2, scale: 1.1 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/louis-sader-a6a391287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              whileHover={{ y: -2, scale: 1.1 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="/documents/Software Developer - Louis Sader - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-dark-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-dark-300 hover:text-primary-400 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-dark-700">
                <a
                  href="https://github.com/louissader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/louis-sader-a6a391287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
