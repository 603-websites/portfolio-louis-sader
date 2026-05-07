import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Real-logo highlight grid. No favicon-style placeholder icons.
  const highlights = [
    {
      logo: "/images/logos/rwu-2.webp",
      title: "B.S. Computer Science",
      description: "Roger Williams University, Dean's List",
      detail: "Minors: Math & Data Science",
      logoBg: "bg-white",
    },
    {
      logo: "/images/logos/aws.svg",
      title: "AWS Certified",
      description: "Solutions Architect, Associate (SAA-C03)",
      detail: "Cloud Practitioner valid through 2028",
      logoBg: "bg-dark-900",
    },
    {
      logo: "/images/logos/ncaa.svg",
      title: "NCAA Athlete",
      description: "Division III Cross Country & Track",
      detail: "6 conference championships",
      logoBg: "bg-white",
    },
    {
      logo: "/images/logos/ncaa.svg",
      title: "All-Conference Service Team",
      description: "CNE Postseason Award, 2025",
      detail: "Read the announcement",
      logoBg: "bg-white",
      href: "https://cnesports.org/news/2025/4/30/mens-track-and-field-cne-reveals-2025-mens-and-womens-track-field-postseason-awards.aspx",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* RWU campus background */}
      <div className="absolute inset-0">
        <img
          src="/images/about/rwu-campus.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Radial dark glow over the content area for legibility. On mobile the
          ellipse covers the full width so text stays readable on narrow screens. */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background: `radial-gradient(
            ellipse 100% 80% at center 50%,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.75) 50%,
            rgba(0, 0, 0, 0.55) 80%,
            rgba(0, 0, 0, 0.4) 100%
          )`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: `radial-gradient(
            ellipse 1100px 700px at center 55%,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.65) 45%,
            rgba(0, 0, 0, 0.4) 75%,
            transparent 100%
          )`,
        }}
      />
      {/* Section edge fades into the global dark theme */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-950 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Computer science grad, four-year NCAA athlete, full-stack developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 text-dark-300 leading-relaxed">
              <p>
                I graduated from Roger Williams University with a B.S. in Computer Science, minors in
                Mathematics and Data Science, and four years on the Cross Country and Track & Field
                teams.
              </p>
              <p>
                I work as a DevOps Software Developer building cloud and AI infrastructure with AWS,
                Terraform, Docker, and CI/CD pipelines. AWS Solutions Architect Associate certified.
              </p>
              <p>
                Outside full-time work, I run a freelance practice with my cousin Michael Sader and Logan
                Carter under Oryx Technologies LLC. We build and maintain websites for local New England
                businesses, design through hosting, SEO, and ongoing client support. Active clients
                include The Spot Nashua, VixFix Pro, and Elite Car Detailing.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
              {[
                { value: "AWS", label: "Cloud Practitioner" },
                { value: "6", label: "Conference titles" },
                { value: "8+", label: "Shipped projects" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 sm:p-4 glass rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-dark-500 text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights Grid (real logos, bigger) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => {
              const inner = (
                <div className="group p-5 sm:p-6 glass rounded-xl card-hover h-full flex gap-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${item.logoBg} flex items-center justify-center shrink-0 overflow-hidden p-2 ring-1 ring-dark-700/40`}>
                    <img src={item.logo} alt={item.title} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-dark-400 text-sm mb-1">{item.description}</p>
                    <p className="text-dark-500 text-xs flex items-center gap-1">
                      {item.detail}
                      {item.href && (
                        <ExternalLink size={12} className="text-primary-400/80 group-hover:text-primary-400 transition-colors" />
                      )}
                    </p>
                  </div>
                </div>
              )
              if (item.href) {
                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="block"
                  >
                    {inner}
                  </motion.a>
                )
              }
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  {inner}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
