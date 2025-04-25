"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { useTranslation } from "@/lib/language-context"

export default function CTA() {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-[#fff5e9] relative overflow-hidden">
      {/* Decorative element at the top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[#f8f3ec] transform -skew-y-3 origin-left -translate-y-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white md:rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Image with overlay */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury villa interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4a3f35]/80 to-[#4a3f35]/40"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {t("cta.title")}
                </motion.h2>
                <motion.p
                  className="text-white/90 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t("cta.description")}
                </motion.p>
              </div>
            </div>

            {/* Right side: Contact options */}
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <motion.h3
                className="text-xl md:text-2xl font-serif text-gray-800 mb-6 hidden sm:block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t("contactPage.content.title")}
              </motion.h3>

              {/* Contact options - hidden on mobile */}
              <div className="space-y-6 mb-8 hidden sm:block">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="h-10 w-10 rounded-full bg-[#f0e6d9] flex items-center justify-center text-[#c8b6a6] mr-4">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t("contactPage.content.info.phone.title")}</p>
                    <p className="text-gray-800 font-medium">+33 6 60 96 70 70</p>
                    <p className="text-gray-800 font-medium">+212 6 63 26 44 34</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="h-10 w-10 rounded-full bg-[#f0e6d9] flex items-center justify-center text-[#c8b6a6] mr-4">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t("contactPage.content.info.email.title")}</p>
                    <p className="text-gray-800 font-medium">contact@conciergerieinmarrakech.com</p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.div
                    className="relative overflow-hidden bg-[#c8b6a6] text-white px-6 py-3 md:rounded-md text-center group cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <span className="relative z-10 flex items-center justify-center font-serif">
                      {t("cta.button1")}
                      <ArrowRight
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
                      />
                    </span>
                    <span className="absolute inset-0 bg-[#4a3f35] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </motion.div>
                </Link>

                <Link href="/about">
                  <motion.div
                    className="relative overflow-hidden border border-[#c8b6a6] text-[#4a3f35] px-6 py-3 md:rounded-md text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <span className="relative z-10 flex items-center justify-center font-serif">
                      {t("cta.button2")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-[#f0e6d9] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element removed */}
    </section>
  )
}
