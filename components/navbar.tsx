"use client"
import { Button } from "@/components/origin-ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="border-b border-border/30 bg-card/30 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/landing" className="flex items-center group">
       <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="16" height="16" rx="1" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <rect x="12" y="12" width="8" height="8" fill="#FF8C42"/>
          <path d="M8 6V4M16 6V4M24 6V4M8 28V26M16 28V26M24 28V26" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 8H6M4 16H6M4 24H6M26 8H28M26 16H28M26 24H28" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="2" fill="#FFA500"/>
        </svg>
          <span className="font-bold text-4xl bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent tracking-tight">cypher</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="hover:bg-accent/50 transition-colors">
            <Link href="https://github.com/drewsephski" target="_blank">
              <Github className="w-4 h-4" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}