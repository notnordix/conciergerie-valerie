"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/language-context"
import { Star, Clock, Home, Award } from "lucide-react"

export default function AboutContent() {
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

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
                {t("aboutPage.content.history.title")}
              </h2>
              <div className="h-1 w-20 bg-[#c8b6a6]"></div>
            </div>

            <p className="text-gray-600 leading-relaxed">{t("aboutPage.content.history.p1")}</p>
            <p className="text-gray-600 leading-relaxed">{t("aboutPage.content.history.p2")}</p>
            <p className="text-gray-600 leading-relaxed">{t("aboutPage.content.history.p3")}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-md">
              <img
                src="/6.jpg"
                alt="Luxury villa"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-md mt-8">
              <img
                src="/3.jpg"
                alt="Villa interior"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg shadow-md">
              <img
                src="/2.jpg"
                alt="Luxury villa in Marrakech"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 order-1 lg:order-2">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
                {t("aboutPage.content.philosophy.title")}
              </h2>
              <div className="h-1 w-20 bg-[#c8b6a6]"></div>
            </div>

            <p className="text-gray-600 leading-relaxed">{t("aboutPage.content.philosophy.p1")}</p>
            <p className="text-gray-600 leading-relaxed">{t("aboutPage.content.philosophy.p2")}</p>
            <p className="text-gray-600 leading-relaxed">{t("aboutPage.content.philosophy.p3")}</p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">Notre Excellence</h2>
            <div className="h-1 w-20 bg-[#c8b6a6] mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Découvrez pourquoi Conciergerie by Valérie est le choix privilégié des propriétaires de villas à
              Marrakech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<Clock className="h-6 w-6" />}
              value="10+"
              label={t("about.stats.experience")}
              color="bg-amber-50 text-amber-600 border-amber-200"
            />
            <StatCard
              icon={<Home className="h-6 w-6" />}
              value="50+"
              label={t("about.stats.villas")}
              color="bg-emerald-50 text-emerald-600 border-emerald-200"
            />
            <StatCard
              icon={<Star className="h-6 w-6" />}
              value="100%"
              label={t("about.stats.satisfaction")}
              color="bg-blue-50 text-blue-600 border-blue-200"
            />
            <StatCard
              icon={<Award className="h-6 w-6" />}
              value="24/7"
              label={t("about.stats.service")}
              color="bg-purple-50 text-purple-600 border-purple-200"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  value,
  label,
  color,
}: { icon: React.ReactNode; value: string; label: string; color: string }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg border ${color} flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300`}
    >
      <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-4`}>{icon}</div>
      <div className="font-serif text-3xl font-bold text-gray-800 mb-2">{value}</div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  )
}
