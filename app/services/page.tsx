"use client"
import Header from "@/components/header"
import Footer from "@/components/footer-new"
import FloatingContact from "@/components/fixed-contact"
import ServicesHero from "@/components/services-hero"
import ServicesDetail from "@/components/services-detail-new"
import CTA from "@/components/cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ServicesHero />
      <ServicesDetail />
      <CTA />
      <Footer />
      <FloatingContact />
    </main>
  )
}
