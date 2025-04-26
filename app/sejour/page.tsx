"use client"

import Header from "@/components/header"
import Footer from "@/components/footer-new"
import FloatingContact from "@/components/fixed-contact"
import SejourHero from "@/components/sejour-hero"
import SejourContent from "@/components/sejour-content"
import CTA from "@/components/cta"

export default function SejourPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <SejourHero />
      <SejourContent />
      <CTA />
      <Footer />
      <FloatingContact />
    </main>
  )
}
