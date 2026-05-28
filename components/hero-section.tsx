"use client"

import { motion } from "framer-motion"
import { Download, ArrowDown, Sparkles } from "lucide-react"
import Image from "next/image"

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
      <div className="absolute inset-0 aurora-bg" />

      <Hero3DScene />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          <div className="text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-10 mt-12"
            >
              <Sparkles className="w-4 h-4 text-primary" />

              <span className="text-sm text-muted-foreground">
                B.E in AI & Machine Learning
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Siri Sandhila
                </span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
                AI & ML Student
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 h-12"
            >
              <TypingAnimation words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12"
            >
              Passionate about building AI-powered applications and
              transforming complex data into meaningful visual insights.
              Currently pursuing B.E in AI & ML at NNRG, Hyderabad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 mb-16"
            >
              <MagneticButton variant="primary" href="/resume.pdf">
                <Download className="w-4 h-4" />
                Download Resume
              </MagneticButton>

              <MagneticButton variant="outline" href="#projects">
                View Projects
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10"
            >
              <span className="text-sm text-muted-foreground">
                Tech Stack:
              </span>

              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-full glass-card text-sm font-medium hover-glow cursor-default"
                  style={{
                    borderColor: tech.color + "30",
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-full" />

              <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden backdrop-blur-xl bg-white/5 p-2 border border-white/10 shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="Siri Sandhila"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>

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
          <span className="text-sm">
            Scroll Down
          </span>

          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
