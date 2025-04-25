"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import CTA from "@/components/cta"
import Footer from "@/components/footer-new"
import FloatingContact from "@/components/fixed-contact"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />
      <FloatingContact />
    </main>
  )
}
