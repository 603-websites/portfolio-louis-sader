import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 75 },
        { name: "C#", level: 70 },
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", level: 95 },
        { name: "Flask", level: 90 },
        { name: "REST API Design", level: 90 },
        { name: "SQLAlchemy", level: 85 },
        { name: "Async/Await", level: 85 },
        { name: "API Auth", level: 90 },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React 18", level: 90 },
        { name: "SvelteKit", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vite", level: 85 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "Supabase", level: 90 },
        { name: "Firebase Firestore", level: 85 },
        { name: "JSONB", level: 80 },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "Vercel", level: 95 },
        { name: "AWS", level: 80 },
        { name: "Nginx", level: 75 },
      ]
    },
    {
      title: "Data & ML",
      skills: [
        { name: "pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "scikit-learn", level: 80 },
        { name: "Feature Engineering", level: 85 },
      ]
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
              className="p-6 glass rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-dark-300">{skill.name}</span>
                      <span className="text-dark-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
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
          className="mt-12"
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
                className="tech-badge"
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
