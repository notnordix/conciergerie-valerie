"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/language-context"
import { Star, Clock, Home, Award } from "lucide-react"

export default function About() {
  const { t } = useTranslation()

  // Remove triggerOnce to make animations restart on each scroll
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  // Stats with icons
  const stats = [
    {
      value: 10,
      suffix: "+",
      label: t("about.stats.experience"),
      icon: <Clock className="h-5 w-5" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      value: 50,
      suffix: "+",
      label: t("about.stats.villas"),
      icon: <Home className="h-5 w-5" />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      value: 100,
      suffix: "%",
      label: t("about.stats.satisfaction"),
      icon: <Star className="h-5 w-5" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      value: 24,
      suffix: "/7",
      label: t("about.stats.service"),
      icon: <Award className="h-5 w-5" />,
      color: "bg-purple-50 text-purple-600",
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 bg-[#fff5e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with animated underline */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("about.title")}
          </motion.h2>
          <motion.div
            className="h-0.5 w-16 bg-[#c8b6a6] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side: Image collage - made smaller */}
          <motion.div
            className="lg:col-span-5 relative px-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              <div className="space-y-3">
                <div className="aspect-[3/4] overflow-hidden md:rounded-md">
                  <img
                    src="/2.jpg"
                    alt="Luxury villa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden md:rounded-md">
                  <img
                    src="/3.jpg"
                    alt="Villa interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="aspect-square overflow-hidden md:rounded-md">
                  <img
                    src="/4.jpg"
                    alt="Villa pool"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden md:rounded-md">
                  <img
                    src="/5.jpg"
                    alt="Villa garden"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-[#c8b6a6] hidden lg:block"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#c8b6a6] hidden lg:block"></div>
          </motion.div>

          {/* Right side: Content - shortened text */}
          <div className="lg:col-span-7 lg:pl-6">
            <motion.h3
              className="text-2xl md:text-3xl font-serif text-gray-800 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("about.subtitle")}
            </motion.h3>

            <div className="space-y-4">
              {/* Shortened paragraphs */}
              <motion.p
                className="text-gray-600 line-clamp-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("about.description1")}
              </motion.p>

              <motion.p
                className="text-gray-600 line-clamp-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("about.description2")}
              </motion.p>

              <motion.p
                className="text-gray-600 line-clamp-2 hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t("about.description3")}
              </motion.p>
            </div>

            {/* Stats row - animation will restart on scroll */}
            <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} animate={inView} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, animate, delay = 0 }: { stat: any; animate: boolean; delay?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<NodeJS.Timeout | null>(null)

  // Reset count when animate changes
  useEffect(() => {
    // Clear any existing interval
    if (countRef.current) {
      clearInterval(countRef.current)
      countRef.current = null
    }

    // Reset count to 0 when not in view
    if (!animate) {
      setCount(0)
      return
    }

    // Start animation when in view
    if (animate) {
      const duration = 800 // Reduced from 1500ms to 800ms
      const steps = 15 // Reduced from 25 to 15 steps
      const stepValue = stat.value / steps
      const stepTime = duration / steps
      let currentStep = 0

      countRef.current = setInterval(() => {
        currentStep += 1
        const newValue = Math.min(Math.round(stepValue * currentStep), stat.value)
        setCount(newValue)

        if (currentStep >= steps) {
          if (countRef.current) clearInterval(countRef.current)
        }
      }, stepTime)
    }

    return () => {
      if (countRef.current) clearInterval(countRef.current)
    }
  }, [animate, stat.value])

  return (
    <motion.div
      className="flex flex-col items-center text-center p-3 md:p-4 bg-white md:rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: 0.2 + delay }} // Reduced duration from 0.5 to 0.3 and base delay from 0.6 to 0.2
    >
      <div className={`w-10 h-10 ${stat.color} rounded-full flex items-center justify-center mb-2`}>{stat.icon}</div>
      <div className="font-serif text-xl md:text-2xl font-bold text-gray-800">
        {count}
        {stat.suffix}
      </div>
      <p className="text-xs md:text-sm text-gray-600 mt-1">{stat.label}</p>
    </motion.div>
  )
}
