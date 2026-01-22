import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Full-Stack Software Developer",
      company: "Rogo - SvelteKit Coaching Platform",
      location: "Remote Startup",
      period: "October 2025 - Present",
      type: "current",
      description: [
        "Optimized authentication flow enabling 10+ coaches to successfully onboard. Streamlined signup model, password reset functionality, and email verification system.",
        "Built secure OAuth integration and real-time form validation system using SvelteKit, TypeScript, and Firebase, reducing authentication errors through proper state management."
      ],
      technologies: ["SvelteKit", "TypeScript", "Firebase", "OAuth"]
    },
    {
      title: "Founder, Full-Stack Web Developer",
      company: "Luxury Auto Detailing Platform",
      location: "Remote Startup",
      period: "December 2025 - Present",
      type: "current",
      description: [
        "Launched end-to-end SaaS platform (React + Supabase) processing 50+ test bookings with 100% data integrity, validating market demand.",
        "Built REST API (5 endpoints) with automated email confirmations (~2s delivery, 98% deliverability).",
        "Deployed to Vercel with CI/CD pipeline achieving 99.9% uptime and <200ms response times."
      ],
      technologies: ["React", "Supabase", "Vercel", "REST API", "CI/CD"]
    }
  ]

  const education = {
    degree: "Bachelor of Science in Computer Science",
    school: "Roger Williams University",
    location: "Bristol, RI",
    period: "Graduated May 2025",
    honors: "Dean's List | ABET Accredited",
    minors: "Mathematics, Data Science"
  }

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      status: "Valid: January 2025-2028",
      active: true
    },
    {
      name: "AWS Solutions Architect - Associate",
      code: "SAA-C03",
      status: "In Progress - Expected Q3 2026",
      active: false
    }
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building real-world applications and delivering results in production environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    exp.type === 'current'
                      ? 'bg-gradient-to-r from-primary-500 to-cyan-500'
                      : 'bg-dark-800 border border-dark-700'
                  }`}>
                    <Briefcase size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass rounded-xl p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      {exp.type === 'current' && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar - Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Education
              </h3>
              <div className="space-y-3">
                <p className="text-primary-400 font-medium">{education.degree}</p>
                <p className="text-dark-300">{education.school}</p>
                <div className="text-sm text-dark-400 space-y-1">
                  <p>{education.location}</p>
                  <p>{education.period}</p>
                  <p className="text-primary-400/80">{education.honors}</p>
                  <p>Minors: {education.minors}</p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`p-4 rounded-lg ${
                      cert.active
                        ? 'bg-primary-500/10 border border-primary-500/30'
                        : 'bg-dark-800/50 border border-dark-700/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className={`font-medium ${cert.active ? 'text-primary-400' : 'text-dark-300'}`}>
                          {cert.name}
                        </p>
                        <p className="text-xs text-dark-500 mt-1">{cert.code}</p>
                      </div>
                      {cert.active && (
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs text-dark-400 mt-2">{cert.status}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
