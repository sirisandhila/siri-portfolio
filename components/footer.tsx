"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp, Heart, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/sirisandhila", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/siri-sandhila-163870373/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/siri_sandhila/", label: "Instagram" },
  { icon: Mail, href: "mailto:sirisandhila0805@gmail.com", label: "Email" },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 aurora-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text mb-8"
          >
            Siri Sandhila
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>
            <span>by Siri Sandhila</span>
            <span className="hidden sm:inline">|</span>
            <span>{new Date().getFullYear()} All rights reserved</span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-primary z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
