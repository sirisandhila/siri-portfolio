"use client"

import { motion } from "framer-motion"
import { Download, ArrowDown, Sparkles } from "lucide-react"
import { TypingAnimation } from "./typing-animation"
import { MagneticButton } from "./magnetic-button"
import { Hero3DScene } from "./hero-3d-scene"

const roles = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Data Visualization Expert",
  "Problem Solver",
]

const techStack = [
  { name: "Python", color: "#3776AB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "MySQL", color: "#4479A1" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg" />
      
      {/* 3D Scene */}
      <Hero3DScene />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 min-h-screen flex items-center">
       <div className="max-w-5xl mx-auto text-center lg:text-left">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-10 mt-12"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">B.E in AI & Machine Learning</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-foreground">{"Hi, I'm "}</span>
            <span className="gradient-text">Siri Sandhila</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 h-12"
          >
            <TypingAnimation words={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty"
          >
            Passionate about building AI-powered applications and transforming complex data into meaningful visual insights. Currently pursuing B.E in AI & ML at NNRG, Hyderabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <MagneticButton
  variant="primary"
  href="/siri resume.pdf"
>
  <Download className="w-4 h-4" />
  Download Resume
</MagneticButton>
            <MagneticButton variant="outline" href="#projects">
              View Projects
            </MagneticButton>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <span className="text-sm text-muted-foreground">Tech Stack:</span>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium hover-glow cursor-default"
                style={{ borderColor: `${tech.color}30` }}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
