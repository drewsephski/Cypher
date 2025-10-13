import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "../components/theme-provider"
import { Toaster } from "../components/ui/sonner"
import { ReactFlowProvider } from "@xyflow/react"
import { Suspense } from "react"
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Navbar from "../components/navbar"

const bricolage = Bricolage_Grotesque({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Cypher AI Assistant',
  description: 'AI-powered React component generator that creates production-ready components',
  generator: "Cypher AI Assistant",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    other: [
      { url: '/logo.svg', type: 'image/svg+xml', rel: 'icon' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
  openGraph: {
    title: 'Cypher AI Assistant',
    description: 'AI-powered React component generator that creates production-ready components',
    type: 'website',
    siteName: 'Cypher AI Assistant',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cypher AI Assistant - AI-powered React component generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cypher AI Assistant',
    description: 'AI-powered React component generator that creates production-ready components',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable}`}>
      <body className={`font-sans ${bricolage.variable} antialiased bg-background`}>
        <Suspense fallback={null}>
          <ReactFlowProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </ReactFlowProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
