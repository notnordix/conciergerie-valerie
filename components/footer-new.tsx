"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram, Facebook, ChevronUp } from "lucide-react"
import { useTranslation } from "@/lib/language-context"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Wave SVG separator */}
      <div className="text-[#fff5e9] w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-24"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="bg-white pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* Main grid container */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12">
              {/* Logo and description - full width on mobile */}
              <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo.png"
                    alt="Conciergerie by Valérie"
                    width={180}
                    height={60}
                    className="h-14 w-auto"
                  />
                </Link>
                <p className="text-gray-600 max-w-md">{t("footer.description")}</p>

                <div className="flex space-x-4">
                  {/* Instagram with original color */}
                  <a
                    href="#"
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-2 rounded-full">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                  </a>
                  {/* Facebook with original color */}
                  <a
                    href="#"
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <div className="bg-[#1877F2] p-2 rounded-full">
                      <Facebook className="h-5 w-5 text-white" />
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Navigation and Services - side by side on mobile, separate columns on desktop */}
              <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-2 md:gap-8">
                {/* Quick Links */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-serif text-gray-800 mb-6 relative">
                    {t("footer.navigation")}
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-[#c8b6a6] -mb-2"></span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: t("nav.home"), href: "/" },
                      { name: t("nav.about"), href: "/about" },
                      { name: t("nav.services"), href: "/services" },
                      { name: t("nav.contact"), href: "/contact" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-gray-700 hover:text-gray-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full font-serif"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-serif text-gray-800 mb-6 relative">
                    {t("footer.services")}
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-[#c8b6a6] -mb-2"></span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: t("services.administrative.title"), href: "/services#administrative" },
                      { name: t("services.technical.title"), href: "/services#technical" },
                      { name: t("services.seasonal.title"), href: "/services#seasonal" },
                      { name: t("services.valorization.title"), href: "/services#valorization" },
                    ].map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.href}
                          className="text-gray-700 hover:text-gray-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Contact - full width on mobile */}
              <motion.div variants={itemVariants} className="md:col-span-3">
                <h3 className="text-lg font-serif text-gray-800 mb-6 relative">
                  {t("footer.contact")}
                  <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-[#c8b6a6] -mb-2"></span>
                </h3>
                <ul className="space-y-4">
                  {/* Phone with original color */}
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Phone className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">+33 6 60 96 70 70</p>
                      <p className="text-gray-600">+212 6 63 26 44 34</p>
                    </div>
                  </li>
                  {/* Mail with original color */}
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 break-all">contact@conciergerieinmarrakech.com</p>
                    </div>
                  </li>
                  {/* MapPin with original color */}
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <MapPin className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Marrakech, Maroc</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Copyright */}
            <div className="mt-16 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                &copy; {currentYear} Conciergerie by Valérie. {t("footer.copyright")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#c8b6a6] text-white shadow-lg flex items-center justify-center hover:bg-[#b9a696] transition-all duration-300 hover:scale-110"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>
    </footer>
  )
}
