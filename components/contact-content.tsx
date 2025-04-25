"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/language-context"
import { sendContactEmail } from "@/lib/actions"
import type { ContactFormData } from "@/lib/actions"

export default function ContactContent() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Call the server action to send the email
      const result = await sendContactEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setError(result.message || "Failed to send email. Please try again later.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

   const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: t("contactPage.content.info.phone.title"),
      details: Array.isArray(t("contactPage.content.info.phone.details")) 
        ? t("contactPage.content.info.phone.details") 
        : [t("contactPage.content.info.phone.details")],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: t("contactPage.content.info.email.title"),
      details: Array.isArray(t("contactPage.content.info.email.details")) 
        ? t("contactPage.content.info.email.details") 
        : [t("contactPage.content.info.email.details")],
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: t("contactPage.content.info.address.title"),
      details: Array.isArray(t("contactPage.content.info.address.details")) 
        ? t("contactPage.content.info.address.details") 
        : [t("contactPage.content.info.address.details")],
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: t("contactPage.content.info.hours.title"),
      details: Array.isArray(t("contactPage.content.info.hours.details")) 
        ? t("contactPage.content.info.hours.details") 
        : [t("contactPage.content.info.hours.details")],
    },
  ]
  

  return (
    <section className="py-10 md:py-24 bg-[#fff5e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 lg:pr-12">
            <div className="sticky top-28">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">{t("contactPage.content.title")}</h2>
              <p className="text-gray-600 mb-10">{t("contactPage.content.description")}</p>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start space-x-3 md:space-x-5"
                  >
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#f0e6d9] flex items-center justify-center text-[#c8b6a6] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1 md:mb-2">{item.title}</h3>
                      {item.details.map((detail: string, idx: number) => (
                        <p key={idx} className="text-sm md:text-base text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 md:mt-12">
                <a
                  href="https://wa.me/33660967070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center group"
                >
                  <div className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.721 0-3.37-.338-4.875-.95l-5.475 1.45 1.475-5.45c-.675-1.55-1.05-3.27-1.05-5.05C2.075 6.043 6.518 1.6 12 1.6s9.925 4.443 9.925 9.925S17.482 21.45 12 21.45z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("contactPage.content.whatsapp")}</p>
                    <p className="text-gray-800 font-medium flex items-center">
                      {t("contactPage.content.whatsapp.description")}
                      <ArrowRight className="h-4 w-0 ml-0 opacity-0 group-hover:w-4 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300" />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 lg:pl-12 lg:border-l border-[#e6cdb1]/30">
            <div className="bg-white shadow-lg p-6 md:p-10 rounded-md">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <svg
                      className="h-10 w-10 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">{t("contactPage.form.success.title")}</h3>
                  <p className="text-gray-600 max-w-md">{t("contactPage.form.success.message")}</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {t("contactPage.form.name")} <span className="text-[#c8b6a6]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-b-2 border-gray-200 focus:border-[#c8b6a6] bg-transparent focus:outline-none transition-colors duration-300"
                        placeholder={t("contactPage.form.name.placeholder")}
                      />
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        {t("contactPage.form.email")} <span className="text-[#c8b6a6]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-[#c8b6a6] bg-transparent focus:outline-none transition-colors duration-300"
                        placeholder={t("contactPage.form.email.placeholder")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        {t("contactPage.form.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-[#c8b6a6] bg-transparent focus:outline-none transition-colors duration-300"
                        placeholder={t("contactPage.form.phone.placeholder")}
                      />
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        {t("contactPage.form.subject")} <span className="text-[#c8b6a6]">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-[#c8b6a6] bg-transparent focus:outline-none transition-colors duration-300 appearance-none"
                        style={{
                          backgroundImage:
                            "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23c8b6a6%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.7rem top 50%",
                          backgroundSize: "0.65rem auto",
                        }}
                      >
                        <option value="">{t("contactPage.form.subject.options.select")}</option>
                        <option value="Intendance Administrative">
                          {t("contactPage.form.subject.options.administrative")}
                        </option>
                        <option value="Intendance Technique">{t("contactPage.form.subject.options.technical")}</option>
                        <option value="Locations Saisonnières">{t("contactPage.form.subject.options.seasonal")}</option>
                        <option value="Valorisation de Villa">
                          {t("contactPage.form.subject.options.valorization")}
                        </option>
                        <option value="Autre">{t("contactPage.form.subject.options.other")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      {t("contactPage.form.message")} <span className="text-[#c8b6a6]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border-b-2 border-gray-200 focus:border-[#c8b6a6] bg-transparent focus:outline-none transition-colors duration-300 resize-none"
                      placeholder={t("contactPage.form.message.placeholder")}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-[#c8b6a6] hover:bg-[#b9a696] text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition-colors duration-300 flex items-center"
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? t("contactPage.form.submitting") : t("contactPage.form.submit")}
                        <Send className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-[#4a3f35] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 md:mt-12">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.95538214638!2d-8.0887209!3d31.6294723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Conciergerie by Valérie location"
                  className="shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
