"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "R", level: 75 },
      { name: "MySQL", level: 82 },
      { name: "Java", level: 78 },
    ],
  },
  {
    name: "Web Dev",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "React", level: 75 },
    ],
  },
  {
    name: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 82 },
      { name: "PyTorch", level: 78 },
      { name: "Scikit-learn", level: 85 },
      { name: "NumPy/Pandas", level: 90 },
      { name: "NLP", level: 80 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter", level: 90 },
      { name: "MATLAB", level: 75 },
      { name: "AutoCAD", level: 70 },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Leadership", level: 88 },
      { name: "Team Player", level: 90 },
      { name: "Adaptability", level: 87 },
      { name: "Time Management", level: 85 },
    ],
  },
]

const techIcons = [
  { name: "Python", color: "#3776AB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "MySQL", color: "#4479A1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Git", color: "#F05032" },
  { name: "C++", color: "#00599C" },
  { name: "Flask", color: "#FFFFFF" },
  { name: "NumPy", color: "#013243" },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  )
}

function OrbitingIcons() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Center circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
          <span className="text-2xl font-bold text-primary-foreground">SS</span>
        </div>
      </div>

      {/* Orbiting icons */}
      {techIcons.map((tech, index) => {
        const angle = (index / techIcons.length) * 360
        const radius = 120
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.2 }}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center cursor-pointer hover-glow"
              style={{ borderColor: `${tech.color}40` }}
            >
              <span
                className="text-xs font-bold"
                style={{ color: tech.color }}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </span>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Orbit rings */}
      <div className="absolute inset-8 rounded-full border border-border/30" />
      <div className="absolute inset-16 rounded-full border border-border/20" />
    </div>
  )
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Programming")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || []

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">02. Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            A comprehensive toolkit spanning AI/ML, web development, and data science that I use to build intelligent solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Orbiting Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <OrbitingIcons />
          </motion.div>

          {/* Skills Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="glass-card rounded-2xl p-8">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skillCategories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      activeCategory === category.name
                        ? "bg-primary text-primary-foreground glow-primary"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>

              {/* Skill Bars */}
              <div className="space-y-6">
                {currentSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
