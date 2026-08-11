import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Accessibility as AccessibilityIcon } from 'lucide-react'

const Accessibility = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="accessibility" className="py-12 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12"
        >
          <h2 className="section-heading">
            <span className="gradient-text">Accessibility</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-2xl p-6 sm:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="hidden sm:flex w-11 h-11 rounded-lg bg-primary-500/15 items-center justify-center shrink-0">
              <AccessibilityIcon size={22} className="text-primary-400" />
            </div>
            <p className="text-dark-300 text-base sm:text-lg">
              This site is built to be usable by everyone, including visitors who rely on assistive technologies.
            </p>
          </div>

          <p className="text-dark-400 text-sm sm:text-base mb-4">
            It aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. The site uses semantic HTML and clear headings, supports keyboard navigation, respects your device's reduce-motion setting, provides text alternatives for meaningful images, and keeps color contrast readable.
          </p>

          <p className="text-dark-400 text-sm sm:text-base">
            Accessibility is ongoing work and some areas may still fall short. If you encounter a barrier or have a suggestion, reach out through the{' '}
            <a
              href="#contact"
              className="text-primary-400 hover:text-primary-300 underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70"
            >
              contact section
            </a>{' '}
            and it will be addressed promptly.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Accessibility
