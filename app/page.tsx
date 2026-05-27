"use client"

import { ParticlesBackground } from "@/components/particles-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { CursorEffect } from "@/components/cursor-effect"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <ParticlesBackground />
      
      {/* Custom Cursor */}
      <CursorEffect />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
