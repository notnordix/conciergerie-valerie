"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/language-context"

export default function ServicesHero() {
  const { t } = useTranslation()

  return (
    <section className="relative w-full">
      <div className="w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/6] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury villa services"
          className="w-full h-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide text-white drop-shadow-md"
              >
                {t("servicesPage.hero.title")}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-1 w-20 bg-white mt-4"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
