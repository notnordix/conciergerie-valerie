"use client"
import Header from "@/components/header"
import Footer from "@/components/footer-new"
import FloatingContact from "@/components/fixed-contact"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content-new"
import TeamSection from "@/components/team-section-new"
import CTA from "@/components/cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <CTA />
      <Footer />
      <FloatingContact />
    </main>
  )
}
