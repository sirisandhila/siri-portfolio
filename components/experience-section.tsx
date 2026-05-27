"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Award, Code, Trophy, Calendar, ExternalLink, Users } from "lucide-react"

const experiences = [
  {
    type: "position",
    title: "Secretariat of MUN Club",
    company: "NNRG MUN CUB",
    period: "2024 - Present",
    description: "Leading the Model United Nations club as Secretariat, organizing debates and diplomatic simulations.",
    skills: ["Leadership", "Public Speaking", "Diplomacy"],
    link: null,
  },
  {
    type: "position",
    title: "Head of Designing Committee",
    company: "NNRG MUN",
    period: "2024 - Present",
    description: "Leading the design team and serving as a member of the Secretariat for MUN events.",
    skills: ["Design", "Leadership", "Event Management"],
    link: null,
  },
  {
    type: "position",
    title: "Coordinator",
    company: "TARA Cultural Committee",
    period: "2023 - Present",
    description: "Maintained and promoted cultural events, coordinating activities and managing event logistics.",
    skills: ["Coordination", "Event Promotion", "Team Management"],
    link: null,
  },
  {
    type: "certification",
    title: "OCI Generative AI Professional",
    company: "Oracle",
    period: "Nov 2025",
    description: "Professional certification in Oracle Cloud Infrastructure Generative AI technologies.",
    skills: ["Generative AI", "Cloud", "Oracle"],
    link: "https://oracle.com/certification",
  },
  {
    type: "certification",
    title: "Artificial Intelligence Fundamentals",
    company: "IBM",
    period: "Oct 2025",
    description: "Comprehensive certification covering AI fundamentals and applications.",
    skills: ["AI", "Machine Learning", "IBM"],
    link: "https://ibm.com/certification",
  },
  {
    type: "certification",
    title: "OCI AI Fundamentals",
    company: "Oracle",
    period: "Oct 2025",
    description: "Certification in Oracle Cloud Infrastructure AI fundamentals and services.",
    skills: ["AI", "Cloud Computing", "Oracle"],
    link: "https://oracle.com/certification",
  },
  {
    type: "certification",
    title: "Front-End Web Development",
    company: "IBM",
    period: "June 2025",
    description: "Professional certification in front-end web development technologies and best practices.",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://ibm.com/certification",
  },
  {
    type: "achievement",
    title: "Deloitte Technology Job Simulation",
    company: "Deloitte Australia on Forage",
    period: "July 2025",
    description: "Completed job simulation creating a dashboard proposal for Deloitte Australia Technology team.",
    skills: ["Data Analysis", "Dashboard Design", "Business"],
    link: "https://forage.com",
  },
  {
    type: "certification",
    title: "MongoDB Skill-a-thon",
    company: "MongoDB",
    period: "2024",
    description: "Successfully completed MongoDB Skill-a-thon demonstrating database expertise.",
    skills: ["MongoDB", "NoSQL", "Database"],
    link: "https://mongodb.com",
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "position":
      return Users
    case "achievement":
      return Trophy
    case "certification":
      return Award
    default:
      return Code
  }
}

const getColor = (type: string) => {
  switch (type) {
    case "position":
      return "from-primary to-primary/50"
    case "achievement":
      return "from-accent to-accent/50"
    case "certification":
      return "from-chart-2 to-chart-2/50"
    default:
      return "from-primary to-accent"
  }
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">04. Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Positions & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            My leadership roles, professional certifications, and achievements in the tech industry.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type)
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  isLeft ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${getColor(
                    exp.type
                  )} glow-primary z-10`}
                />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pl-0 md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 hover-glow"
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColor(exp.type)} flex items-center justify-center shrink-0`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className={isLeft ? "md:text-right" : ""}>
                        <h3 className="text-lg font-bold">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {exp.link && (
                      <motion.a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline ${isLeft ? "md:ml-auto" : ""}`}
                      >
                        View <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
