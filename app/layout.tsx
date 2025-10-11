import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { ReactFlowProvider } from "@xyflow/react"
import { Suspense } from "react"
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar"

const bricolage = Bricolage_Grotesque({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'cypher',
  description: 'An AI-powered code generation platform',
  generator: "cypher",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
  openGraph: {
    title: 'Agentic Code Studio',
    description: 'An AI-powered code generation platform',
    type: 'website',
    siteName: 'Agentic Code Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agentic Code Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Code Studio',
    description: 'An AI-powered code generation platform',
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
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
