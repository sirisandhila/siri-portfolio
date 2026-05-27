"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Lightbulb, 
  Code2, 
  Palette, 
  Brain, 
  Trophy, 
  Users, 
  Zap, 
  Sparkles 
} from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to breaking down complex problems into manageable solutions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end applications with modern frontend and backend technologies.",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, accessible, and visually appealing user interfaces.",
    color: "from-accent to-pink-400",
  },
  {
    icon: Brain,
    title: "AI/ML Interest",
    description: "Exploring artificial intelligence and machine learning applications.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Sharpening algorithmic thinking through coding challenges and competitions.",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in teams using agile methodologies and Git workflows.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks with enthusiasm.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Sparkles,
    title: "Creative Thinking",
    description: "Bringing innovative ideas and unique perspectives to every project.",
    color: "from-rose-500 to-pink-400",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 h-full hover-glow transition-all">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
          <feature.icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">What I Bring</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Core Strengths
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            The skills and qualities that define my approach to software development.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
