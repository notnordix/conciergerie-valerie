"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useTranslation } from "@/lib/language-context"
import { Hotel, Car, Sparkles, Utensils, Map, HeadphonesIcon } from "lucide-react"

export default function SejourContent() {
  const { t } = useTranslation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Services data
  const services = [
    {
      id: "accommodations",
      icon: <Hotel className="h-6 w-6" />,
      title: t("sejourPage.accommodations.title"),
      description: t("sejourPage.accommodations.description"),
      image: "/10.jpg",
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      id: "transfers",
      icon: <Car className="h-6 w-6" />,
      title: t("sejourPage.transfers.title"),
      description: t("sejourPage.transfers.description"),
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "experiences",
      icon: <Sparkles className="h-6 w-6" />,
      title: t("sejourPage.experiences.title"),
      description: t("sejourPage.experiences.description"),
      images: [
        "/7.jpg",
        "/1.jpg",
        "/5.jpg",
        "/16.jpg"
      ],
      color: "bg-purple-50 text-purple-600 border-purple-200",
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
      icon: <Utensils className="h-6 w-6" />,
      title: t("sejourPage.dining.title"),
      description: t("sejourPage.dining.description"),
      image: "/16.jpg",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      id: "excursions",
      icon: <Map className="h-6 w-6" />,
      title: t("sejourPage.excursions.title"),
      description: t("sejourPage.excursions.description"),
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800&auto=format&fit=crop",
      color: "bg-rose-50 text-rose-600 border-rose-200",
      bullets: [
        t("sejourPage.excursions.bullet1"),
        t("sejourPage.excursions.bullet2"),
        t("sejourPage.excursions.bullet3"),
      ],
    },
    {
      id: "concierge",
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: t("sejourPage.concierge.title"),
      description: t("sejourPage.concierge.description"),
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
  ]

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
            {t("sejourPage.content.title")}
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-[#c8b6a6] mx-auto"></motion.div>
          <motion.p variants={itemVariants} className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t("sejourPage.content.subtitle")}
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceSection({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      id={service.id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* Image Section */}
      <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        {service.images ? (
          <div className="grid grid-cols-2 gap-4">
            {service.images.map((image: string, idx: number) => (
              <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} ${idx + 1}`}
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10"></div>
                {idx === 0 && (
                  <div className="absolute top-4 left-4">
                    <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-auto aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10"></div>
            <div className="absolute top-4 left-4">
              <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center`}>
                {service.icon}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

        {/* Subsections if available */}
        {service.subsections && (
          <div className="space-y-6 mt-6">
            {service.subsections.map((subsection: any, idx: number) => (
              <div key={idx} className="bg-[#f8f3ec] p-5 rounded-md">
                <h4 className="text-lg font-medium text-gray-800 mb-2">{subsection.subtitle}</h4>
                <p className="text-gray-600 mb-3">{subsection.text}</p>
                {subsection.bullets && (
                  <ul className="space-y-2 ml-5 list-disc">
                    {subsection.bullets.map((bullet: string, bulletIdx: number) => (
                      <li key={bulletIdx} className="text-gray-600">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bullets if available */}
        {service.bullets && (
          <ul className="space-y-2 ml-5 list-disc">
            {service.bullets.map((bullet: string, bulletIdx: number) => (
              <li key={bulletIdx} className="text-gray-600">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
