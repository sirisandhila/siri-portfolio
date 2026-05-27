"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin, Calendar, Code2, Trophy, Users } from "lucide-react"

const stats = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "+" },
]

const journey = [
  {
    year: "2016-2021",
    title: "Ravindra Bharathi School",
    description: "Completed 10th Grade with a perfect CGPA of 10",
  },
  {
    year: "2021-2023",
    title: "Narayana Junior College",
    description: "Completed 12th Grade with 80% marks",
  },
  {
    year: "2023",
    title: "Started B.E in AI & ML",
    description: "Enrolled at NNRG, Hyderabad for AI & Machine Learning",
  },
  {
    year: "2024-Present",
    title: "Building & Learning",
    description: "Working on AI chatbots, voice assistants, and data visualization projects",
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="text-4xl md:text-5xl font-bold gradient-text"
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      )}
    </motion.span>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">01. About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Crafting Intelligent Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            {"I'm Siri Sandhila, an AI & ML enthusiast currently pursuing my Bachelor's in Engineering. My passion lies in building intelligent applications that solve real-world problems through AI, NLP, and data visualization."}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover-glow transition-all"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-primary" />
                Who Am I
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {"I'm a dedicated AI & Machine Learning student at Nalla Narasimha Reddy Group of Institutions, Hyderabad. My journey in tech started with a curiosity for how machines can learn and make intelligent decisions."}
                </p>
                <p>
                  {"My expertise spans across building AI-powered chatbots, voice assistants using NLP, and transforming complex datasets into meaningful visual insights. I enjoy working with Python, TensorFlow, and modern web technologies."}
                </p>
                <p>
                  {"Beyond coding, I'm actively involved in leadership roles - serving as Coordinator for TARA Cultural Committee, Head of Designing at NNRG MUN, and Secretariat of the MUN Club."}
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium">B.E in AI & ML</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Hyderabad, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="font-medium">Open to Opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Leadership</p>
                    <p className="font-medium">MUN Secretariat</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
              
              <div className="space-y-8">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1.5 w-4 h-4 rounded-full bg-primary glow-primary" />
                    
                    <span className="text-primary font-mono text-sm">{item.year}</span>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
