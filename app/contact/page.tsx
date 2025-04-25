"use client"

import Header from "@/components/header"
import Footer from "@/components/footer-new"
import FloatingContact from "@/components/fixed-contact"
import ContactHero from "@/components/contact-hero"
import ContactContent from "@/components/contact-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
      <FloatingContact />
    </main>
  )
}
