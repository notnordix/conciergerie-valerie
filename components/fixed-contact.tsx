"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const phoneNumbers = [
    { city: "France", number: "+33 6 60 96 70 70" },
    { city: "Maroc", number: "+212 6 63 26 44 34" },
  ]

  // Close menu when scrolling
  useEffect(() => {
    if (!isOpen) return // Only add listener if menu is open

    const handleScroll = () => setIsOpen(false)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return // Only add listener if menu is open

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Add bouncing animation variants
  const bounceAnimation = {
    initial: { y: 0 },
    animate: isOpen
      ? { y: 0 }
      : {
          y: [0, -10, 0],
          transition: {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop" as const,
            ease: "easeInOut",
          },
        },
  }

  return (
    <div className="fixed bottom-8 left-8 z-40" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-56 mb-2"
          >
            <div className="flex flex-col space-y-3">
              {phoneNumbers.map((item, index) => (
                <motion.a
                  key={index}
                  href={`tel:${item.number.replace(/\s/g, "")}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className="flex items-center p-2 hover:bg-gray-50 rounded-md group transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200">
                    <Phone size={14} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{item.city}</p>
                    <p className="text-sm font-medium text-gray-800">{item.number}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative triangle */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-gray-800" : "bg-green-600 hover:bg-green-700"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={bounceAnimation}
          initial="initial"
          animate="animate"
        >
          {isOpen ? <X size={24} className="text-white" /> : <Phone size={24} className="text-white" />}
        </motion.button>
      </div>
    </div>
  )
}
