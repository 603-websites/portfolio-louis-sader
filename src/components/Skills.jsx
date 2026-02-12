import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Layout, Database, Cloud, Brain } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C#"]
    },
    {
      icon: Server,
      title: "Backend & APIs",
      skills: ["FastAPI", "Flask", "REST APIs", "SQLAlchemy", "OAuth", "Async/Await"]
    },
    {
      icon: Layout,
      title: "Frontend",
      skills: ["React", "SvelteKit", "Tailwind CSS", "Vite", "Framer Motion"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "Supabase", "Firebase", "JSONB"]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Nginx"]
    },
    {
      icon: Brain,
      title: "Data & ML",
      skills: ["pandas", "NumPy", "scikit-learn", "Feature Engineering"]
    },
  ]

  return (
    <section id="skills" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit built through hands-on experience with production systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 glass rounded-xl card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <category.icon className="text-primary-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 glass rounded-xl p-8"
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Engineering Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AGILE",
              "Test-Driven Development",
              "Object-Oriented Design",
              "Data Structures",
              "Database Schema Design",
              "OpenAPI",
              "Monitoring & Logging",
              "CI/CD Pipelines",
              "Code Review",
              "Git Flow"
            ].map((practice, index) => (
              <motion.span
                key={practice}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-4 py-2 text-sm rounded-lg bg-dark-800/50 border border-dark-700/50 text-dark-300 hover:border-primary-500/30 hover:text-primary-400 transition-colors"
              >
                {practice}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
