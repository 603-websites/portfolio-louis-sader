import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "DevOps Software Developer",
      company: "Solid State Scientific Corporation",
      location: "Nashua, NH",
      period: "February 2026 - Present",
      type: "current",
      logo: "/images/logos/sssc.jpg",
      description: [],
      technologies: []
    },
    {
      title: "Co-Founder, Full-Stack Developer",
      company: "Oryx Technologies LLC (Website Upgraders)",
      location: "New England based",
      period: "2025 - Present",
      type: "current",
      logo: "/images/logos/oryx.png",
      description: [
        "Rebuilding a static site (0% SEO score, no backend) into a full-stack platform with SMS notifications to boost customer retention, SEO optimization targeting first-page local search visibility, and a self-service admin and client dashboard for real-time analytics monitoring, menu/promotion management, eliminating developer dependency.",
        "Active clients: The Spot Nashua (kava bar and live music venue), VixFix Pro (handyman and general contractor), Elite Car Detailing.",
        "Stack: static HTML/CSS/JS client sites on Cloudflare Pages, Next.js plus Prisma SaaS dashboard on Railway, Resend email, Plausible analytics, GitHub Actions CI."
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare", "Railway"]
    },
    {
      title: "Software Developer",
      company: "Rogo",
      location: "Remote",
      period: "October 2025 - February 2026",
      type: "past",
      logo: "/images/logos/rogo.svg",
      description: [
        "Rogo is a startup transforming how athletes connect with coaching, like Airbnb for finding local training. As a former collegiate runner, I know firsthand how valuable access to the right coach can be.",
        "Streamlined the signup flow, password reset, and email verification system, contributing to a 30% increase in active users.",
        "Built OAuth integration and real-time form validation with SvelteKit, TypeScript, and Firebase."
      ],
      technologies: ["SvelteKit", "TypeScript", "Firebase", "OAuth"]
    },
    {
      title: "IT Support Specialist",
      company: "Beth Israel Lahey Health",
      location: "Exeter, NH",
      period: "Sep 2025 - Oct 2025 (Contract)",
      type: "past",
      logo: "/images/logos/bilh.png",
      description: [
        "Resolved 50+ IT support tickets for doctors and staff across the hospital.",
        "Diagnosed hardware, software, and network issues, cutting hospital downtime."
      ],
      technologies: ["Helpdesk", "Networking", "Hardware troubleshooting"]
    },
    {
      title: "IT Support Technician",
      company: "Brigham and Women's Hospital (Mass General Brigham)",
      location: "Boston, MA",
      period: "2025",
      type: "past",
      logo: "/images/logos/mgb.jpg",
      description: [
        "Deployment-installation work on a hospital-wide refresh of approximately 8,000 devices: client systems, peripherals, and reused monitors.",
        "Deinstallation of legacy systems with automated peer-to-peer data migration (averaging under 1 GB per machine), plus on-campus package logistics."
      ],
      technologies: ["Hardware deployment", "Data migration", "Imaging"]
    },
    {
      title: "IT Support Specialist",
      company: "Roger Williams University IT Department",
      location: "Bristol, RI",
      period: "2024 - 2025",
      type: "past",
      logo: "/images/logos/rwu-hawk.webp",
      description: [
        "Resolved 100+ IT support tickets with ~80% first-response resolution rate.",
        "Hardware, software, and network troubleshooting in classrooms and labs across campus.",
        "Reduced operational downtime by approximately 80% across the year."
      ],
      technologies: ["Helpdesk", "Networking", "Imaging", "AV"]
    },
    {
      title: "Delivery Driver",
      company: "DoorDash",
      location: "New England based",
      period: "2024 - 2025",
      type: "past",
      logo: "/images/logos/doordash.png",
      description: [
        "Completed over 1,000 deliveries with 100% on-time performance and a 4.93 / 5.00 customer rating."
      ],
      technologies: []
    },
    {
      title: "Crew Member",
      company: "Chipotle Mexican Grill",
      location: "Salem, NH",
      period: "2022 - 2024",
      type: "past",
      logo: "/images/logos/chipotle.png",
      description: [
        "Cashier trainer, grill, line cook, prep, and dish stations. Worked across the entire line.",
        "On track for a management promotion before leaving for college."
      ],
      technologies: []
    },
    {
      title: "Crew Member",
      company: "Panera Bread",
      location: "Salem, NH",
      period: "2020 - 2021",
      type: "past",
      logo: "/images/logos/panera.jpg",
      description: [
        "Cashier, quality control, and food preparation across sandwiches, salads, and beverages."
      ],
      technologies: []
    },
    {
      title: "Bagger, Dairy Associate",
      company: "Market Basket",
      location: "Londonderry, NH",
      period: "2020 - 2021",
      type: "past",
      logo: "/images/logos/marketbasket.png",
      description: [
        "Started as a bagger; promoted to the dairy department after three months."
      ],
      technologies: []
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
      name: "CompTIA Security+",
      code: "SY0-701",
      status: "In progress",
      active: false
    },
    {
      name: "AWS Solutions Architect - Associate",
      code: "SAA-C03",
      status: "Earned April 2026",
      active: true
    },
    {
      name: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      status: "Valid: January 2025-2028",
      active: true
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building real-world applications and delivering results in production environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-8">
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
                  <div className="absolute left-[28px] top-[56px] sm:left-[38px] sm:top-[76px] w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
                )}

                <div className="flex gap-3 sm:gap-6">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-14 h-14 sm:w-[76px] sm:h-[76px] rounded-full flex items-center justify-center shrink-0 overflow-hidden ${
                    exp.type === 'current'
                      ? 'bg-gradient-to-r from-primary-500 to-cyan-500'
                      : 'bg-dark-800 border border-dark-700'
                  }`}>
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full bg-white p-1.5 sm:p-2"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    ) : (
                      <Briefcase size={24} className="sm:hidden text-white" />
                    )}
                    {!exp.logo && <Briefcase size={32} className="hidden sm:block text-white" />}
                  </div>

                  {/* Content. Mobile: title + company + Current tag + period
                      + location only. Description bullets and tech badges
                      hide on mobile so the section scrolls fast. */}
                  <div className="flex-1 glass rounded-xl p-3 sm:p-6 card-hover min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2 sm:mb-4">
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-lg font-semibold text-white leading-tight">{exp.title}</h3>
                        <p className="text-primary-400 font-medium text-xs sm:text-base leading-snug">{exp.company}</p>
                      </div>
                      {exp.type === 'current' && (
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30 shrink-0">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-4 text-[11px] sm:text-sm text-dark-400 mb-0 sm:mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="hidden sm:block space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="hidden sm:flex flex-wrap gap-2">
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

          {/* Sidebar - Education & Certifications. Side-by-side on mobile,
              stacked on desktop. Compact paddings + small headers on mobile
              so the column titles don't get clipped at narrow widths. */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1 lg:gap-6 lg:space-y-0">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-3 sm:p-6 min-w-0"
            >
              <h3 className="text-sm sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full shrink-0" />
                Education
              </h3>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img src="/images/logos/rwu.svg" alt="Roger Williams University" className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0" />
                <div className="min-w-0">
                  <p className="text-dark-300 font-medium text-xs sm:text-base leading-tight">{education.school}</p>
                  <p className="text-dark-500 text-[10px] sm:text-xs">{education.location}</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-primary-400 font-medium text-xs sm:text-base leading-snug">{education.degree}</p>
                <div className="text-[11px] sm:text-sm text-dark-400 space-y-1 leading-snug">
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
              className="glass rounded-xl p-3 sm:p-6 min-w-0"
            >
              <h3 className="text-sm sm:text-lg font-semibold text-white mb-3 sm:mb-5 flex items-center gap-2 sm:gap-3 flex-wrap">
                <img src="/images/logos/comptia.svg" alt="CompTIA" className="w-7 h-7 sm:w-12 sm:h-12 object-contain shrink-0" />
                <img src="/images/logos/aws.svg" alt="AWS" className="w-7 h-7 sm:w-12 sm:h-12 object-contain shrink-0" />
                Certifications
              </h3>
              <div className="space-y-2 sm:space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`p-2.5 sm:p-4 rounded-lg ${
                      cert.active
                        ? 'bg-primary-500/10 border border-primary-500/30'
                        : 'bg-dark-800/50 border border-dark-700/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className={`font-medium text-xs sm:text-base leading-snug ${cert.active ? 'text-primary-400' : 'text-dark-300'}`}>
                          {cert.name}
                        </p>
                        <p className="text-[10px] sm:text-xs text-dark-500 mt-1">{cert.code}</p>
                      </div>
                      {cert.active && (
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-[10px] sm:text-xs text-dark-400 mt-1.5 sm:mt-2">{cert.status}</p>
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
