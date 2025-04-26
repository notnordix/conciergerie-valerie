"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ClipboardList, Home, Calendar, Paintbrush, ArrowRight } from "lucide-react"
import { useTranslation } from "@/lib/language-context"
import { motion } from "framer-motion"

export default function Services() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0) // First service is active by default

  const services = [
    {
      title: t("services.administrative.title"),
      description: t("services.administrative.description"),
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      image: "/17.jpg",
      feature: t("services.administrative.feature1"),
      id: "administrative",
      color: "from-blue-800/20 to-blue-900/20",
    },
    {
      title: t("services.technical.title"),
      description: t("services.technical.description"),
      icon: <Home className="h-8 w-8 text-white" />,
      image: "/4.jpg",
      feature: t("services.technical.feature1"),
      id: "technical",
      color: "from-amber-800/20 to-amber-900/20",
    },
    {
      title: t("services.seasonal.title"),
      description: t("services.seasonal.description"),
      icon: <Calendar className="h-8 w-8 text-white" />,
      image: "/12.jpg",
      feature: t("services.seasonal.feature1"),
      id: "seasonal",
      color: "from-emerald-800/20 to-emerald-900/20",
    },
    {
      title: t("services.valorization.title"),
      description: t("services.valorization.description"),
      icon: <Paintbrush className="h-8 w-8 text-white" />,
      image: "/18.jpg",
      feature: t("services.valorization.feature1"),
      id: "valorization",
      color: "from-purple-800/20 to-purple-900/20",
    },
  ]

  // Function to handle button click and prevent event propagation
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-[#f8f3ec] compact-mobile">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-2xl md:text-3xl">{t("services.title")}</h2>
        </div>

        {/* Mobile view - stacked cards */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-md">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-black/30 backdrop-blur-sm rounded-md">{service.icon}</div>
                  <h3 className="text-xl font-serif text-white">{service.title}</h3>
                </div>

                <div className="space-y-3">
                  <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-white bg-black/30 hover:bg-black/40 px-4 py-2 rounded-md text-sm font-medium transition-colors z-10 relative"
                    onClick={handleButtonClick}
                  >
                    {t("cta.button2")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - expandable row with gaps */}
        <div className="hidden md:flex h-[500px] gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer rounded-md ${
                index === activeIndex ? "flex-grow" : "flex-shrink"
              }`}
              style={{
                flexBasis: index === activeIndex ? "42%" : "19.33%",
                transition: "all 0.5s ease",
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Background image */}
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Content */}
              <div className="relative h-full w-full p-8 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-black/30 backdrop-blur-sm rounded-md">{service.icon}</div>
                  <h3 className="text-2xl font-serif text-white drop-shadow-md">{service.title}</h3>
                </div>

                <div
                  className={`transition-opacity duration-300 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                >
                  {index === activeIndex && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <p className="text-white/90 max-w-md drop-shadow-md">{service.description}</p>
                      <div className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-white mt-1.5 mr-2 rounded-full"></span>
                        <span className="text-white/90 drop-shadow-md">{service.feature}</span>
                      </div>
                      <div className="relative z-20">
                        <Link
                          href={`/services#${service.id}`}
                          className="inline-flex items-center text-white bg-black/30 hover:bg-black/40 px-6 py-3 rounded-md text-sm font-medium transition-colors group"
                          onClick={handleButtonClick}
                        >
                          {t("cta.button2")}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Vertical title for collapsed state */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    index === activeIndex ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="h-full flex items-center justify-center">
                    <h3 className="text-2xl font-serif text-white transform -rotate-90 whitespace-nowrap drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
