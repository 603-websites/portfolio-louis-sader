import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'

// Apple logo glyph for the App Store status pill (official-shape path,
// self-hosted inline since the CSP blocks external images).
const AppleLogo = ({ className }) => (
  <svg viewBox="0 0 814 1000" className={className} fill="currentColor" aria-hidden="true">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>
)

const CardFooter = ({ project }) => (
  <div className="mt-auto pt-4 space-y-3">
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {project.technologies.map((tech) => (
        <span key={tech} className="tech-badge text-[11px] sm:text-xs">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-dark-800/80 border border-dark-700/60 text-dark-200 text-sm font-medium hover:bg-primary-600 hover:border-primary-500 hover:text-white transition-colors"
        >
          <Github size={18} />
          View on GitHub
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-dark-800/80 border border-dark-700/60 text-dark-200 text-sm font-medium hover:bg-primary-600 hover:border-primary-500 hover:text-white transition-colors"
        >
          <ExternalLink size={18} />
          {project.demoLabel || 'Live site'}
        </a>
      )}
    </div>
  </div>
)

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Descriptions kept in sync with the GitHub repo descriptions.
  const projects = [
    {
      title: "ESCAPE: Cave Duo",
      appIcon: "/images/projects/escape-cave-duo.png",
      appStore: "In review",
      subtitle: "iOS game · Swift + SpriteKit",
      description: "Native iOS co-op puzzle platformer, ported from my Unity original in Swift and SpriteKit. Two characters, one cave: dual-character puzzle mechanics rebuilt for touch, with full level progression, enemies, and power-ups. Submitted to the App Store and currently in review.",
      highlights: [
        "Full SpriteKit rebuild of the Unity game",
        "Touch-first dual-character co-op controls",
        "8 levels with enemies, coins, and power-ups",
        "Own support + privacy site shipped for review"
      ],
      technologies: ["Swift", "SpriteKit", "iOS", "Xcode"],
      github: "https://github.com/louissader/ESCAPE-Mobile",
      featured: true,
      hero: true
    },
    {
      title: "HomeLab Infrastructure Monitor",
      description: "Production-ready infrastructure monitoring system with real-time metrics, <1s data lag, and <200ms API response times. FastAPI backend, Python collection agent, Docker deployment.",
      highlights: [
        "15 REST endpoints with async ORM",
        "60% Docker image size reduction",
        "Real-time monitoring dashboard",
        "Optimized database queries"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "DevOps"],
      github: "https://github.com/louissader/homelab-infrastructure-monitor",
      featured: true
    },
    {
      title: "AWS Serverless URL Shortener",
      description: "Production-ready AWS serverless URL shortener with Lambda, DynamoDB, and API Gateway. Sub-10ms query latency at ~1,000 requests per second with least-privilege IAM controls.",
      highlights: [
        "Sub-10ms query latency",
        "~1,000 requests per second",
        "CDK infrastructure-as-code (TypeScript)",
        "End-to-end CI/CD with GitHub Actions"
      ],
      technologies: ["Python", "AWS Lambda", "DynamoDB", "CDK", "API Gateway"],
      github: "https://github.com/louissader/aws-url-shortener",
      featured: true
    },
    {
      title: "Strava Race Time Predictor",
      description: "Full-stack ML app with LLM integration and real-time WebSocket streaming. Under 5% prediction error across 1,000+ runs, with AI-generated training plans and GPS heatmaps.",
      highlights: [
        "LLM-powered AI training plans (AWS Bedrock)",
        "Real-time streaming via Socket.IO",
        "15+ engineered features from the Strava API",
        "GPS heatmaps & timeline visualizations"
      ],
      technologies: ["Python", "React", "Flask", "AWS Bedrock", "Socket.IO", "scikit-learn"],
      github: "https://github.com/louissader/strava-race-predictor",
      featured: true
    },
    {
      title: "Oryx Technologies",
      description: "Co-founded web agency for local New England businesses. Rebuilt a client's static site (0% SEO score, no backend) into a full-stack platform: SMS notifications, first-page local SEO, and a self-service multi-tenant dashboard.",
      highlights: [
        "Active clients: The Spot Nashua, VixFix Pro, Santella Designs",
        "Multi-tenant Next.js + Prisma + Postgres SaaS",
        "Self-service tenant dashboard (menu, bookings, newsletter)",
        "Cross-tenant SEO playbook + local-search optimization"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare", "Railway"],
      github: null,
      demo: "https://oryxtechnologiesllc.com",
      demoLabel: "Visit oryxtechnologiesllc.com",
      featured: false
    },
    {
      title: "VixFix Contracting and Home Improvement",
      logo: "/images/projects/vixfix-logo.png",
      description: "Oryx client build for Justin Vickery, who runs a painting, drywall, water damage, flooring, and carpentry business in Concord, NH and serves southern New Hampshire. Mobile-first static site on Cloudflare Pages: free estimate form on every page, sticky call button on mobile, structured data, security headers, and an accessibility statement. Privacy-friendly analytics on every page, with lead conversions tracked. Ongoing engagement since April 2026.",
      highlights: [
        "32 page static build on Cloudflare Pages",
        "16 service and town guide pages across southern NH",
        "Google Business Profile launched: 5.0 stars, 6 reviews",
        "Silently dropped form submissions found, fixed, retested live"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Cloudflare Pages", "Umami", "Local SEO"],
      github: null,
      demo: "https://vixfixpro.com",
      demoLabel: "Visit vixfixpro.com",
      featured: false
    },
    {
      title: "ESCAPE (Unity)",
      description: "Co-op 2D puzzle platformer built in Unity and C#. Fireboy & Watergirl-inspired dual-character mechanics with custom enemy AI and level progression. The original the iOS port grew from.",
      highlights: [
        "Dual-character co-op mechanics",
        "Custom enemy AI",
        "Multi-level progression",
        "Object-oriented architecture"
      ],
      technologies: ["C#", "Unity", "OOP"],
      github: "https://github.com/louissader/ESCAPE",
      featured: false
    },
    {
      title: "Product Management System",
      description: "Dual Flask + FastAPI product management system with API key auth, rate limiting, auto-generated docs, and 85% test coverage. PostgreSQL and Docker underneath.",
      highlights: [
        "7 REST endpoints with full CRUD",
        "85% test coverage",
        "70% faster developer onboarding",
        "CSV/JSON export capabilities"
      ],
      technologies: ["Python", "Flask", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/louissader/product-management-api",
      featured: false
    },
    {
      title: "Gmail Rejection Scanner",
      description: "Python utility that scans a Gmail inbox for job-application rejection emails through the Gmail API. Built to triage my own senior-year job hunt, then open-sourced.",
      highlights: [
        "Gmail API + OAuth",
        "Pattern matching across rejection-language variants",
        "CSV export for tracking",
        "Personal tool, open-sourced"
      ],
      technologies: ["Python", "Gmail API", "OAuth"],
      github: "https://github.com/louissader/gmail-rejection-scanner",
      featured: false
    }
  ]

  const hero = projects.find((p) => p.hero)
  const rest = projects.filter((p) => !p.hero)

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

        {/* Hero card: the iOS game currently in App Store review. */}
        {hero && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <div className="glass rounded-2xl p-5 sm:p-8 card-hover border border-primary-500/20">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <div className="shrink-0 flex sm:flex-col items-center gap-4">
                  <img
                    src={hero.appIcon}
                    alt="ESCAPE: Cave Duo app icon"
                    className="w-24 h-24 sm:w-36 sm:h-36 rounded-[22%] ring-1 ring-dark-700/60 shadow-xl shadow-black/40"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-800/80 border border-dark-700/60 text-dark-200 text-xs font-medium whitespace-nowrap">
                    <AppleLogo className="w-3.5 h-3.5" />
                    App Store · {hero.appStore}
                  </span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                    {hero.title}
                  </h3>
                  <p className="text-primary-300 text-sm sm:text-base font-medium mt-1 mb-3">
                    {hero.subtitle}
                  </p>
                  <p className="text-dark-300 text-sm sm:text-base leading-relaxed mb-4">
                    {hero.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    {hero.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs sm:text-sm text-dark-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <CardFooter project={hero} />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining projects: single column on mobile with full descriptions,
            two columns on desktop. No icon headers; content leads. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-5 sm:p-6 card-hover h-full flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-start gap-3 min-w-0">
                    {project.logo && (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl ring-1 ring-dark-700/60 shadow-lg shadow-black/40 shrink-0"
                        loading="lazy"
                      />
                    )}
                    <h3 className="text-base sm:text-xl font-semibold text-white group-hover:text-primary-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-medium bg-primary-600/80 text-white rounded-full shrink-0">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-dark-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-dark-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <CardFooter project={project} />
              </div>
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
