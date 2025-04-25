import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Conciergerie by Valérie",
    template: "%s | Conciergerie by Valérie",
  },
  description:
    "Services de conciergerie de luxe pour votre villa à Marrakech. Gestion administrative, technique, locations saisonnières et valorisation de villa.",
  keywords: ["conciergerie", "Marrakech", "villa", "gestion", "location", "luxe", "Maroc", "Valérie"],
  authors: [{ name: "Conciergerie by Valérie" }],
  creator: "Conciergerie by Valérie",
  publisher: "Conciergerie by Valérie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Conciergerie by Valérie | Services de conciergerie de luxe à Marrakech",
    description:
      "Services de conciergerie de luxe pour votre villa à Marrakech. Gestion administrative, technique, locations saisonnières et valorisation de villa.",
    url: "https://conciergerieinmarrakech.com",
    siteName: "Conciergerie by Valérie",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conciergerie by Valérie | Services de conciergerie de luxe à Marrakech",
    description: "Services de conciergerie de luxe pour votre villa à Marrakech",
  },
}

export const viewport: Viewport = {
  themeColor: "#fff5e9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth" translate="no">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/optima" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/white-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
