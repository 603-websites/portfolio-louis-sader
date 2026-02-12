import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Trophy, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: GraduationCap,
      title: "B.S. Computer Science",
      description: "Roger Williams University, Dean's List",
      detail: "Minors: Math & Data Science"
    },
    {
      icon: Award,
      title: "AWS Certified",
      description: "Cloud Practitioner (CLF-C02)",
      detail: "Solutions Architect in progress"
    },
    {
      icon: Trophy,
      title: "NCAA Athlete",
      description: "Division III Cross Country & Track",
      detail: "6 Conference Championships"
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "All-Community Service Team",
      detail: "40+ volunteer hours"
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            A passionate developer with a unique blend of technical expertise and athletic discipline.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-dark-300 leading-relaxed">
              <p>
                I'm a <span className="text-primary-400 font-medium">DevOps Software Developer</span> at
                Solid State Scientific Corporation, based in New Hampshire. My journey in
                tech started during my computer science studies at Roger Williams University, where I graduated
                with a focus on both theoretical foundations and practical application development.
              </p>
              <p>
                At <span className="text-primary-400 font-medium">SSSC</span>, I support programs and internal R&D
                in cloud computing, artificial intelligence, and emerging technologies. I also build and maintain
                CI/CD pipelines, prepare technical documentation, and support design, test, and integration of
                developed technologies.
              </p>
              <p>
                As a former <span className="text-primary-400 font-medium">NCAA Division III athlete</span>,
                I bring the same discipline, teamwork, and perseverance to my development work. I thrive in
                environments that challenge me to grow and deliver results under pressure.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
              {[
                { value: "1", label: "AWS Certification" },
                { value: "6+", label: "Production Apps" },
                { value: "3", label: "Tech Stacks" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 sm:p-4 glass rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-dark-500 text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group p-4 sm:p-6 glass rounded-xl card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <item.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-dark-400 text-sm mb-1">{item.description}</p>
                <p className="text-dark-500 text-xs">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
