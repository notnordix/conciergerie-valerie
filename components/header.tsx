"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import type { Language } from "@/lib/translations"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [viewportHeight, setViewportHeight] = useState("100vh")
  const pathname = usePathname()
  const { t } = useTranslation()
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    // Set initial scroll state
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set accurate viewport height that accounts for mobile browser UI
  useEffect(() => {
    const updateViewportHeight = () => {
      // Use window.innerHeight which accounts for browser UI elements
      setViewportHeight(`${window.innerHeight}px`)
    }

    // Initial set
    updateViewportHeight()

    // Update on resize and orientation change
    window.addEventListener("resize", updateViewportHeight)
    window.addEventListener("orientationchange", updateViewportHeight)

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
      window.removeEventListener("orientationchange", updateViewportHeight)
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 bg-white shadow-sm backdrop-blur-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={scrolled ? "/logo.png" : "/white-logo.png"}
                alt="Conciergerie by Valérie"
                width={180}
                height={60}
                className={`transition-all duration-300 ${scrolled ? "h-10" : "h-12"} w-auto`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLinks pathname={pathname} scrolled={scrolled} />
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcherDesktop scrolled={scrolled} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <LanguageSwitcherMobile scrolled={scrolled} />
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`flex items-center justify-center w-10 h-10 ${
                scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              } transition-colors`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop - fixed positioning with explicit z-index and full viewport coverage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: viewportHeight,
                width: "100%",
              }}
            />

            {/* Menu Panel - fixed positioning with higher z-index and dynamic height */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-[280px] bg-white shadow-xl z-[51] md:hidden"
              style={{
                position: "fixed",
                height: viewportHeight,
                overflowY: "auto",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header - fixed at top */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-gray-100 bg-white">
                  <Image src="/logo.png" alt="Conciergerie by Valérie" width={120} height={40} className="h-8 w-auto" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Menu Links - scrollable content */}
                <div className="flex-1 py-6 px-5 space-y-1 overflow-y-auto">
                  <MobileNavLinks setIsMenuOpen={setIsMenuOpen} pathname={pathname} />
                </div>

                {/* Menu Footer - fixed at bottom */}
                <div className="sticky bottom-0 p-5 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#f0e6d9] flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 text-[#c8b6a6]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <a href="tel:+33660967070" className="text-sm font-medium text-gray-900 hover:underline">
                        +33 6 60 96 70 70
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLinks({ pathname = "/", scrolled = false }: { pathname?: string; scrolled?: boolean }) {
  const { t } = useTranslation()

  const links = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.sejour"), href: "/sejour" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return links.map((link) => {
    const isActive =
      pathname === link.href ||
      (pathname === "/" && link.href === "/") ||
      (pathname.startsWith(link.href) && link.href !== "/")

    return (
      <Link
        key={link.name}
        href={link.href}
        className={`text-sm tracking-widest relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
          scrolled
            ? isActive
              ? "text-gray-900 font-semibold after:bg-gray-900 after:w-full"
              : "text-gray-700 hover:text-gray-900 after:bg-gray-900"
            : isActive
              ? "text-white font-semibold after:bg-white after:w-full"
              : "text-white hover:text-gray-200 after:bg-white"
        } transition-colors`}
      >
        {link.name}
      </Link>
    )
  })
}

function MobileNavLinks({
  setIsMenuOpen,
  pathname = "/",
}: { setIsMenuOpen: (value: boolean) => void; pathname?: string }) {
  const { t } = useTranslation()

  const links = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.sejour"), href: "/sejour" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return links.map((link, index) => {
    const isActive =
      pathname === link.href ||
      (pathname === "/" && link.href === "/") ||
      (pathname.startsWith(link.href) && link.href !== "/")

    return (
      <motion.div
        key={link.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Link
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className={`flex items-center py-3 px-4 rounded-lg text-base ${
            isActive ? "bg-[#f0e6d9] text-gray-900 font-medium" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          } transition-colors`}
        >
          {link.name}
        </Link>
      </motion.div>
    )
  })
}

function LanguageSwitcherDesktop({ scrolled = false }: { scrolled?: boolean }) {
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
        className={`flex items-center space-x-2 h-10 px-4 rounded-full ${
          scrolled
            ? "border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900"
            : "border border-white/30 hover:border-white text-white hover:text-white"
        } transition-colors`}
        aria-label="Change language"
        aria-expanded={isOpen}
        type="button"
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">{language.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50"
          >
            <button
              onClick={() => changeLanguage("fr")}
              className={`w-full text-left px-4 py-3 text-sm flex items-center space-x-3 ${
                language === "fr" ? "bg-[#f0e6d9] text-gray-900 font-medium" : "hover:bg-gray-50 text-gray-700"
              } transition-colors`}
              type="button"
            >
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-800">
                FR
              </span>
              <span>Français</span>
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`w-full text-left px-4 py-3 text-sm flex items-center space-x-3 ${
                language === "en" ? "bg-[#f0e6d9] text-gray-900 font-medium" : "hover:bg-gray-50 text-gray-700"
              } transition-colors`}
              type="button"
            >
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-800">
                EN
              </span>
              <span>English</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LanguageSwitcherMobile({ scrolled = false }: { scrolled?: boolean }) {
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
        className={`flex items-center justify-center w-10 h-10 ${
          scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
        } transition-colors`}
        aria-label="Change language"
        aria-expanded={isOpen}
        type="button"
      >
        <Globe className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg overflow-hidden z-50"
          >
            <button
              onClick={() => changeLanguage("fr")}
              className={`w-full text-left px-3 py-2.5 text-sm flex items-center space-x-2 ${
                language === "fr" ? "bg-[#f0e6d9] text-gray-900 font-medium" : "hover:bg-gray-50 text-gray-700"
              } transition-colors`}
              type="button"
            >
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-800">
                FR
              </span>
              <span>Français</span>
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`w-full text-left px-3 py-2.5 text-sm flex items-center space-x-2 ${
                language === "en" ? "bg-[#f0e6d9] text-gray-900 font-medium" : "hover:bg-gray-50 text-gray-700"
              } transition-colors`}
              type="button"
            >
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-800">
                EN
              </span>
              <span>English</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
