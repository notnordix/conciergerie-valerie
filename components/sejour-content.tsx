"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useTranslation } from "@/lib/language-context"
import { Hotel, Car, Sparkles, Utensils, Map, HeadphonesIcon, ChevronRight } from "lucide-react"

export default function SejourContent() {
  const { t } = useTranslation()

  // Services data
  const services = [
    {
      id: "accommodations",
      icon: <Hotel className="h-5 w-5" />,
      title: t("sejourPage.accommodations.title"),
      description: t("sejourPage.accommodations.description"),
      image: "/10.jpg",
      color: "bg-amber-50 text-amber-600 border-amber-200",
      gradient: "from-amber-100/80 to-amber-50/30",
    },
    {
      id: "transfers",
      icon: <Car className="h-5 w-5" />,
      title: t("sejourPage.transfers.title"),
      description: t("sejourPage.transfers.description"),
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      gradient: "from-blue-100/80 to-blue-50/30",
    },
    {
      id: "experiences",
      icon: <Sparkles className="h-5 w-5" />,
      title: t("sejourPage.experiences.title"),
      description: t("sejourPage.experiences.description"),
      image: "/1.jpg",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      gradient: "from-purple-100/80 to-purple-50/30",
      subsections: [
        {
          subtitle: t("sejourPage.experiences.wellness.title"),
          text: t("sejourPage.experiences.wellness.description"),
        },
        {
          subtitle: t("sejourPage.experiences.desert.title"),
          text: t("sejourPage.experiences.desert.description"),
          bullets: [t("sejourPage.experiences.desert.bullet1"), t("sejourPage.experiences.desert.bullet2")],
        },
        {
          subtitle: t("sejourPage.experiences.adventures.title"),
          text: t("sejourPage.experiences.adventures.description"),
          bullets: [
            t("sejourPage.experiences.adventures.bullet1"),
            t("sejourPage.experiences.adventures.bullet2"),
            t("sejourPage.experiences.adventures.bullet3"),
            t("sejourPage.experiences.adventures.bullet4"),
            t("sejourPage.experiences.adventures.bullet5"),
            t("sejourPage.experiences.adventures.bullet6"),
            t("sejourPage.experiences.adventures.bullet7"),
          ],
        },
      ],
    },
    {
      id: "dining",
      icon: <Utensils className="h-5 w-5" />,
      title: t("sejourPage.dining.title"),
      description: t("sejourPage.dining.description"),
      image: "/16.jpg",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      gradient: "from-emerald-100/80 to-emerald-50/30",
    },
    {
      id: "excursions",
      icon: <Map className="h-5 w-5" />,
      title: t("sejourPage.excursions.title"),
      description: t("sejourPage.excursions.description"),
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800&auto=format&fit=crop",
      color: "bg-rose-50 text-rose-600 border-rose-200",
      gradient: "from-rose-100/80 to-rose-50/30",
      bullets: [
        t("sejourPage.excursions.bullet1"),
        t("sejourPage.excursions.bullet2"),
        t("sejourPage.excursions.bullet3"),
      ],
    },
    {
      id: "concierge",
      icon: <HeadphonesIcon className="h-5 w-5" />,
      title: t("sejourPage.concierge.title"),
      description: t("sejourPage.concierge.description"),
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      gradient: "from-indigo-100/80 to-indigo-50/30",
    },
  ]

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-1">{t("sejourPage.content.title")}</h2>
          <div className="h-0.5 w-16 bg-[#c8b6a6] mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">{t("sejourPage.content.subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="mt-12 space-y-10">
          {services
            .filter((s) => s.subsections || s.bullets)
            .map((service, index) => (
              <DetailedSection key={service.id} service={service} index={index} />
            ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-md shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image with overlay */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-60`}></div>

        {/* Icon overlay */}
        <div className="absolute top-3 right-3">
          <div className={`w-8 h-8 rounded-full ${service.color} flex items-center justify-center`}>{service.icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-serif text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
      </div>
    </motion.div>
  )
}

function DetailedSection({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isEven = index % 2 === 0

  if (!service.subsections && !service.bullets) return null

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      id={service.id}
      className="pt-6 border-t border-gray-100"
    >
      <div className="flex items-center mb-4">
        <div className={`w-8 h-8 rounded-full ${service.color} flex items-center justify-center mr-3`}>
          {service.icon}
        </div>
        <h3 className="text-xl font-serif text-gray-800">{service.title}</h3>
      </div>

      {/* Subsections */}
      {service.subsections && (
        <div className="space-y-4 mt-4">
          {service.subsections.map((subsection: any, idx: number) => (
            <div key={idx} className="bg-[#f8f3ec]/50 p-4 rounded-md">
              <h4 className="text-base font-medium text-gray-800 mb-1.5">{subsection.subtitle}</h4>
              <p className="text-gray-600 text-sm mb-2">{subsection.text}</p>

              {subsection.bullets && (
                <ul className="space-y-1 mt-2">
                  {subsection.bullets.map((bullet: string, bulletIdx: number) => (
                    <li key={bulletIdx} className="text-gray-600 text-sm flex items-start">
                      <span className="inline-block w-1 h-1 bg-[#c8b6a6] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Direct bullets */}
      {service.bullets && !service.subsections && (
        <ul className="space-y-1 mt-2">
          {service.bullets.map((bullet: string, bulletIdx: number) => (
            <li key={bulletIdx} className="text-gray-600 text-sm flex items-start">
              <span className="inline-block w-1 h-1 bg-[#c8b6a6] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
