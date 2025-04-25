"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/lib/language-context"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { t } = useTranslation()
  const [key, setKey] = useState(0)

  // Reset animation periodically to create infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1)
    }, 3000) // Reset every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury villa in Marrakech"
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
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide text-white drop-shadow-md"
                >
                  {t("hero.title")}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-1 sm:mt-2 md:mt-4"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic text-white drop-shadow-md">
                    by{" "}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={key}
                        className="inline-block"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                      >
                        <AnimatedText text="Valérie" />
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-md drop-shadow-md"
                >
                  {t("hero.tagline")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-3 sm:gap-4"
                >
                  <Link
                    href="/services"
                    className="group relative overflow-hidden bg-[#c8b6a6] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition-all duration-300 flex items-center"
                  >
                    <span className="relative z-10 flex items-center">
                      {t("cta.button2")}
                      <ArrowRight className="ml-1.5 sm:ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-[#4a3f35] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative overflow-hidden bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/50 hover:border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition-all duration-300"
                  >
                    {t("cta.button1")}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Animated Text Component
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{
            filter: "blur(8px)",
            opacity: 0,
            y: 5,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.05 * index,
          }}
          className="inline-block text-white drop-shadow-lg"
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}
