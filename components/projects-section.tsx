"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Folder, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "AI Voice Assistant Chatbot",
    description: "A voice-based AI system using speech recognition, NLU, and text-to-speech (Eleven Labs) for real-time interactions and improved user accessibility.",
    image: "/projects/voice-assistant.jpg",
    tags: ["Python", "Flask", "NLP", "MongoDB", "Eleven Labs"],
    github: "https://github.com/sirisandhila/AI-voice-assistance-chat-bot",
    demo: "https://github.com/sirisandhila/AI-voice-assistance-chat-bot",
    featured: true,
    stats: { stars: 45, forks: 12 },
  },
  {
    title: "AI-Powered Chatbot Platform",
    description: "Full-stack chatbot platform combining AI technologies with web development. Features natural language processing and interactive user interface.",
    image: "/projects/ai-chatbot.jpg",
    tags: ["Java", "NLP", "MySQL", "React", "Node.js"],
    github: "https://github.com/sirisandhila/AI-POWERED-CHAT-BOT",
    demo: "https://github.com/sirisandhila/AI-POWERED-CHAT-BOT",
    featured: true,
    stats: { stars: 67, forks: 18 },
  },
  {
    title: "Code To Visualization",
    description: "Transform raw datasets into meaningful visual insights using Python. Converts data into graphical and interactive formats using Pandas, Matplotlib, Seaborn, and Plotly.",
    image: "/projects/data-viz.jpg",
    tags: ["Python", "NLP", "NL4DV", "Pandas", "Matplotlib"],
    github: "https://github.com/sirisandhila/Code-to-visualisation",
    demo: "https://github.com/sirisandhila/Code-to-visualisation",
    featured: true,
    stats: { stars: 89, forks: 21 },
  },
  {
    title: "Amazon Clone",
    description: "Responsive replica of Amazon homepage with structured navigation and clean layouts. Cross-browser and mobile compatible with semantic HTML and modular CSS.",
    image: "/projects/amazon-clone.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sirisandhila",
    demo: "https://github.com/sirisandhila",
    featured: false,
    stats: { stars: 34, forks: 8 },
  },
  {
    title: "Dino Game",
    description: "A 2D side-scrolling endless running game with ASCII art dinosaur. Obstacles move from left to right while the player jumps to avoid them.",
    image: "/projects/dino-game.jpg",
    tags: ["C++", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/sirisandhila/DINO-GAME",
    demo: "https://github.com/sirisandhila/DINO-GAME",
    featured: false,
    stats: { stars: 28, forks: 6 },
  },
]

const filters = ["All", "Featured", "AI/ML", "Web Dev"]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="glass-card rounded-2xl overflow-hidden h-full"
      >
        {/* Project Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Folder className="w-16 h-16 text-primary/30" />
          </div>
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {project.stats.stars}
            </span>
            <span className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              {project.stats.forks} forks
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Featured") return project.featured
    if (activeFilter === "AI/ML") {
      return project.tags.some(tag => ["Python", "NLP", "Flask", "TensorFlow", "NL4DV"].includes(tag))
    }
    if (activeFilter === "Web Dev") {
      return project.tags.some(tag => ["HTML", "CSS", "JavaScript", "React", "Node.js"].includes(tag))
    }
    return project.tags.includes(activeFilter)
  })

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">03. Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            A selection of projects showcasing my skills in AI, machine learning, and web development.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "glass hover:bg-secondary"
              )}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sirisandhila"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-secondary transition-colors"
          >
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
