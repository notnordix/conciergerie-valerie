"use client"

import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"
import { useTranslation } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

export default function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useTranslation()

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-center ${
          isMobile ? "h-8 px-2 text-xs" : "h-10 px-3 text-sm"
        } rounded-md text-gray-700 hover:text-gray-900 hover:bg-[#f0e6d9]/50 transition-colors`}
        aria-label="Change language"
        aria-expanded={isOpen}
        type="button"
      >
        <Globe className={isMobile ? "h-4 w-4 mr-1" : "h-5 w-5 mr-2"} />
        <span className="font-medium">{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            isMobile ? "right-0 w-32" : "right-0 w-36"
          } mt-2 bg-[#fff5e9] shadow-lg rounded-md overflow-hidden z-50`}
        >
          <button
            onClick={() => changeLanguage("fr")}
            className={`w-full text-left ${
              isMobile ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
            } text-gray-700 hover:text-gray-900 ${
              language === "fr" ? "bg-[#f0e6d9] font-medium" : "hover:bg-[#f0e6d9]/50"
            } transition-colors`}
            type="button"
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={`w-full text-left ${
              isMobile ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
            } text-gray-700 hover:text-gray-900 ${
              language === "en" ? "bg-[#f0e6d9] font-medium" : "hover:bg-[#f0e6d9]/50"
            } transition-colors`}
            type="button"
          >
            English
          </button>
        </div>
      )}
    </div>
  )
}
