import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Server, Brain, Package, Zap, Cloud, Gamepad2, Briefcase, Mail, Smartphone } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "HomeLab Infrastructure Monitor",
      description: "Production-ready monitoring system providing real-time infrastructure insights with <1s data lag and <200ms API response times. Enables proactive system management and performance optimization.",
      icon: Server,
      highlights: [
        "15 REST endpoints with async ORM",
        "60% Docker image size reduction",
        "Real-time monitoring dashboard",
        "Optimized database queries"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "DevOps"],
      github: "https://github.com/louissader/homelab-infrastructure-monitor",
      featured: true,
      color: "from-primary-500 to-blue-500"
    },
    {
      title: "AWS Serverless URL Shortener",
      description: "Deployed serverless application on AWS achieving sub-10ms query latency and ~1,000 requests per second with secure, least-privilege IAM controls.",
      icon: Cloud,
      highlights: [
        "Sub-10ms query latency",
        "~1,000 requests per second",
        "CDK infrastructure-as-code (TypeScript)",
        "End-to-end CI/CD with GitHub Actions"
      ],
      technologies: ["Python", "AWS Lambda", "DynamoDB", "CDK", "API Gateway"],
      github: "https://github.com/louissader/aws-url-shortener",
      featured: true,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Strava Race Time Predictor",
      description: "Full-stack ML app with LLM integration and real-time WebSocket streaming. Achieves <5% prediction error across 1,000+ runs, transforming race planning from 2+ hours to 30 seconds.",
      icon: Brain,
      highlights: [
        "LLM-powered AI training plans (AWS Bedrock)",
        "Real-time streaming via Socket.IO",
        "15+ engineered features from Strava API",
        "GPS heatmaps & timeline visualizations"
      ],
      technologies: ["Python", "React", "Flask", "AWS Bedrock", "Socket.IO", "scikit-learn"],
      github: "https://github.com/louissader/strava-race-predictor",
      featured: true,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Product Management System",
      description: "Dual Flask + FastAPI implementations with comprehensive API functionality. Features API key authentication, rate limiting, and auto-generated documentation.",
      icon: Package,
      highlights: [
        "7 REST endpoints with full CRUD",
        "85% test coverage",
        "70% faster developer onboarding",
        "CSV/JSON export capabilities"
      ],
      technologies: ["Python", "Flask", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/louissader/product-management-api",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Oryx Technologies",
      description: "Rebuilding a client's static site (0% SEO score, no backend) into a full-stack platform with SMS notifications, first-page local search SEO, and a self-service admin and client dashboard for real-time analytics, menu, and promotion management. Eliminates developer dependency, with the same playbook applied across the active client roster.",
      icon: Briefcase,
      highlights: [
        "Active clients: The Spot Nashua, VixFix Pro, Santella Designs",
        "Multi-tenant Next.js + Prisma + Postgres SaaS",
        "Self-service tenant dashboard (menu, bookings, calendar, newsletter, contacts)",
        "Cross-tenant SEO playbook + per-client local-search optimization"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare", "Railway", "Resend"],
      github: null,
      demo: "https://oryxtechnologiesllc.com",
      featured: false,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "ESCAPE (Unity)",
      description: "2D co-op puzzle platformer built in Unity. Dual-character mechanics, custom enemy AI, and level progression. Capstone-tier game project written in C#.",
      icon: Gamepad2,
      highlights: [
        "Dual-character co-op mechanics",
        "Custom enemy AI",
        "Multi-level progression",
        "Object-oriented architecture"
      ],
      technologies: ["C#", "Unity", "OOP"],
      github: "https://github.com/louissader/ESCAPE",
      featured: false,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "ESCAPE Mobile (iOS port)",
      description: "Native iOS port of ESCAPE in Swift and SpriteKit. Same dual-character co-op puzzle mechanics, rebuilt for the App Store with touch controls.",
      icon: Smartphone,
      highlights: [
        "Swift + SpriteKit",
        "Touch-first co-op controls",
        "Game state and level loading",
        "Targeting App Store release"
      ],
      technologies: ["Swift", "SpriteKit", "iOS"],
      github: "https://github.com/louissader/ESCAPE-Mobile",
      featured: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Gmail Rejection Scanner",
      description: "Python utility that scans a Gmail account for job-application rejection emails using the Gmail API. Built it to triage my own inbox during the senior-year job hunt.",
      icon: Mail,
      highlights: [
        "Gmail API + OAuth",
        "Pattern matching across rejection-language variants",
        "CSV export for tracking",
        "Personal tool, open-sourced"
      ],
      technologies: ["Python", "Gmail API", "OAuth"],
      github: "https://github.com/louissader/gmail-rejection-scanner",
      featured: false,
      color: "from-rose-500 to-pink-500"
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real-world applications built with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Mobile: 2-col compact tile grid (4 visible at a time, fast scroll).
            Desktop: 2-col full cards with descriptions and highlights. */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-xl lg:rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                {/* Header with gradient */}
                <div className={`relative p-3 lg:p-6 bg-gradient-to-r ${project.color} bg-opacity-10`}>
                  <div className="absolute inset-0 bg-gradient-to-r opacity-10" style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                  }} />
                  <div className="relative flex items-start justify-between gap-2">
                    <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg shrink-0`}>
                      <project.icon className="text-white w-5 h-5 lg:w-7 lg:h-7" />
                    </div>
                    {/* Action buttons: compact on mobile, full text on desktop */}
                    <div className="flex gap-1.5 lg:gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on GitHub"
                          className="flex items-center gap-1.5 lg:gap-2 p-2 lg:px-3 lg:py-1.5 rounded-md lg:rounded-lg bg-dark-900/50 text-dark-400 hover:text-white hover:bg-dark-800 transition-colors text-xs lg:text-sm"
                        >
                          <Github size={16} className="lg:w-[18px] lg:h-[18px]" />
                          <span className="hidden lg:inline">View on GitHub</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open demo"
                          className="p-2 rounded-md lg:rounded-lg bg-dark-900/50 text-dark-400 hover:text-white hover:bg-dark-800 transition-colors"
                        >
                          <ExternalLink size={16} className="lg:w-5 lg:h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 lg:p-6 flex-1 flex flex-col">
                  <h3 className="text-sm lg:text-xl font-semibold text-white mb-1 lg:mb-3 group-hover:text-primary-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  {/* Description: hidden on mobile, shown on desktop */}
                  <p className="hidden lg:block text-dark-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights: hidden on mobile */}
                  <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 flex-1">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-dark-300"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Technologies: 2 first techs on mobile, all on desktop */}
                  <div className="flex flex-wrap gap-1 lg:gap-2 mt-auto lg:pt-4 lg:border-t lg:border-dark-700/50">
                    <span className="lg:hidden flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="tech-badge text-[10px] px-2 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </span>
                    <span className="hidden lg:flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2">
                  <span className={`px-2 py-0.5 lg:px-3 lg:py-1 text-[10px] lg:text-xs font-medium bg-gradient-to-r ${project.color} text-white rounded-full shadow-lg`}>
                    Featured
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/louissader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
