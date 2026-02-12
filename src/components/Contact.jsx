import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "louissader42@gmail.com",
      href: "mailto:louissader42@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(603) 275-7513",
      href: "tel:+16032757513"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Windham, NH",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/louissader",
      username: "@louissader"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/louis-sader-a6a391287/",
      username: "Louis Sader"
    }
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            Have a question or want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {contactInfo.map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-primary-400" size={20} />
                </div>
                <p className="text-dark-500 text-sm mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-dark-200 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-dark-200 text-sm">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-dark-700/50 mb-10" />

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary-500/50 transition-all"
              >
                <link.icon className="text-dark-400 group-hover:text-primary-400 transition-colors" size={24} />
                <div>
                  <p className="text-dark-300 font-medium group-hover:text-white transition-colors">
                    {link.label}
                  </p>
                  <p className="text-dark-500 text-sm">{link.username}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Availability Status */}
          <div className="text-center p-6 rounded-xl bg-dark-800/30 border border-dark-700/30">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-400 font-medium">Currently Employed</span>
            </div>
            <p className="text-dark-400 text-sm">
              DevOps Software Developer at Solid State Scientific Corporation.
              Always open to connecting, and I typically respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
