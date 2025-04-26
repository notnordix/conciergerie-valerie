"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ClipboardList, Home, Calendar, Paintbrush, Check } from "lucide-react"
import { useTranslation } from "@/lib/language-context"

export default function ServicesDetail() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("administrative")

  // Check URL hash on component mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && services.some((service) => service.id === hash)) {
        setActiveTab(hash)

        // Scroll to the section with a small delay to ensure rendering is complete
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            // Scroll with offset for header
            const headerOffset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      }
    }

    // Initial check
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const services = [
    {
      id: "administrative",
      title: t("servicesPage.administrative.title"),
      icon: <ClipboardList className="h-6 w-6" />,
      image: "/17.jpg",
      description: t("servicesPage.administrative.description"),
      features: t("servicesPage.administrative.features") as string[],
      color: "bg-blue-50 text-blue-600 border-blue-200",
      gradientFrom: "from-blue-800/10",
      gradientTo: "to-blue-900/30",
    },
    {
      id: "technical",
      title: t("servicesPage.technical.title"),
      icon: <Home className="h-6 w-6" />,
      image: "/4.jpg",
      description: t("servicesPage.technical.description"),
      features: t("servicesPage.technical.features") as string[],
      color: "bg-amber-50 text-amber-600 border-amber-200",
      gradientFrom: "from-amber-800/10",
      gradientTo: "to-amber-900/30",
    },
    {
      id: "seasonal",
      title: t("servicesPage.seasonal.title"),
      icon: <Calendar className="h-6 w-6" />,
      image: "/12.jpg",
      description: t("servicesPage.seasonal.description"),
      features: t("servicesPage.seasonal.features") as string[],
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      gradientFrom: "from-emerald-800/10",
      gradientTo: "to-emerald-900/30",
    },
    {
      id: "valorization",
      title: t("servicesPage.valorization.title"),
      icon: <Paintbrush className="h-6 w-6" />,
      image: "/18.jpg",
      description: t("servicesPage.valorization.description"),
      features: t("servicesPage.valorization.features") as string[],
      color: "bg-purple-50 text-purple-600 border-purple-200",
      gradientFrom: "from-purple-800/10",
      gradientTo: "to-purple-900/30",
    },
  ]

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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const activeService = services.find((service) => service.id === activeTab) || services[0]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
            Nos Services
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-[#c8b6a6] mx-auto"></motion.div>
          <motion.p variants={itemVariants} className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de conciergerie pour votre villa à Marrakech.
          </motion.p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveTab(service.id)
                // Update URL hash without scrolling
                history.pushState(null, "", `#${service.id}`)
              }}
              className={`flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                activeTab === service.id ? `${service.color} shadow-sm` : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2">{service.icon}</span>
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <motion.div
          key={activeTab}
          id={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Service Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={activeService.image || "/placeholder.svg"}
              alt={activeService.title}
              className="w-full h-auto aspect-[4/3] object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeService.gradientFrom} ${activeService.gradientTo}`}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-20 h-20 rounded-full ${activeService.color} flex items-center justify-center`}>
                {activeService.icon}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">{activeService.title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">{activeService.description}</p>

            <h4 className="text-lg font-medium text-gray-800 mb-4">Ce que nous offrons:</h4>
            <motion.ul initial="hidden" animate="visible" variants={containerVariants} className="space-y-3">
              {activeService.features.map((feature, idx) => (
                <motion.li key={idx} variants={featureVariants} className="flex items-start">
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full ${activeService.color} flex items-center justify-center mr-3`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* All Services Mobile View */}
        <div className="mt-20 lg:hidden space-y-12">
          {services.map((service) => (
            <div key={service.id} id={`mobile-${service.id}`} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo}`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>

                <h4 className="text-sm font-medium text-gray-800 mb-3">Ce que nous offrons:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full ${service.color} flex items-center justify-center mr-2`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.features.length > 3 && (
                  <p className="text-sm text-[#c8b6a6] mt-2">+ {service.features.length - 3} autres avantages</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
