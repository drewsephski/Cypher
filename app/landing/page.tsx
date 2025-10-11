"use client"
import { Button } from "@/components/origin-ui/button"
import { Card } from "@/components/origin-ui/card"
import { Badge } from "@/components/origin-ui/badge"
import { ArrowRight, Sparkles, DollarSign } from "lucide-react"
import { CaseStudySection } from '@/components/case-studies'
import { BentoSection } from '@/components/bento-section';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

export default function LandingPage() {
  const handleLoad = (app: Application) => {
    // Optional: enforce a black scene background if the environment map is bright
    app.setBackgroundColor('#000000');
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
        <section className="container-responsive py-20 pt-32 text-center relative min-h-[80vh]">
        {/* Spline 3D Background - FULLY INTERACTIVE with proper layering */}
        <div 
          className="fixed inset-0 w-full h-full"
          style={{ 
            zIndex: 1,
            pointerEvents: 'auto', // Spline receives ALL mouse events
            opacity: 0.3 // Make background blob more transparent
          }}
        >
      <Spline
        scene="https://prod.spline.design/sKnKawFTQQ5K03yR/scene.splinecode" 
        onLoad={handleLoad}
      />
        </div>

        {/* Foreground content - strategic pointer-events */}
        <div 
          className="max-width-responsive mx-auto relative"
          style={{ 
            zIndex: 10,
            pointerEvents: 'none' // Container doesn't block Spline
          }}
        >
          <Badge 
            variant="secondary" 
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-primary/30 backdrop-blur-md animate-fade-in"
            style={{ pointerEvents: 'auto' }} // Badge is clickable
          >
            <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
            Powered by Google Gemini 2.5 Flash and ai-sdk
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance font-bricolage leading-tight animate-slide-up drop-shadow-2xl">
            AI-powered React components in <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">seconds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto font-light leading-relaxed animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Chat, browse docs, and generate production-ready components — fast, clean, and previewed live.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{ pointerEvents: 'auto' }} // Buttons are clickable
          >
            <Button size="lg" asChild className="group relative overflow-hidden backdrop-blur-md bg-primary/95 hover:bg-primary shadow-2xl hover:shadow-primary/50 transition-all duration-300">
              <Link href="/chat" className="relative z-10">
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group relative overflow-hidden backdrop-blur-md bg-background/80 hover:bg-background/90 shadow-2xl border-primary/30 hover:border-primary/50 transition-all duration-300">
              <Link href="/pricing" className="relative z-10">
                <DollarSign className="w-5 h-5 mr-2" />
                Pricing
              </Link>
            </Button>
          </div>
          
          <div 
            className="mt-12"
            style={{ pointerEvents: 'auto' }} // Tech badges are clickable
          >
            <span className="text-sm font-medium text-primary mb-4 inline-block drop-shadow-md">Built with</span>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="hover:translate-y-[-2px] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-primary/20 border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 px-4 py-2">Next.js 15</Badge>
              <Badge variant="outline" className="hover:translate-y-[-2px] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-primary/20 border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 px-4 py-2">AI SDK v5</Badge>
              <Badge variant="outline" className="hover:translate-y-[-2px] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-primary/20 border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 px-4 py-2">TypeScript 5</Badge>
              <Badge variant="outline" className="hover:translate-y-[-2px] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-primary/20 border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 px-4 py-2">Gemini 2.5 Flash</Badge>
              <Badge variant="outline" className="hover:translate-y-[-2px] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-primary/20 border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 px-4 py-2">React 19</Badge>
              <Badge variant="outline" className="hover:translate-y-[-2px] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-primary/20 border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 px-4 py-2">Tailwind CSS 4</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="container-responsive py-20 relative" style={{ zIndex: 10, pointerEvents: 'auto' }}>
        <div className="max-width-responsive mx-auto">
          <CaseStudySection />
        </div>
      </section>
      <BentoSection />

      {/* CTA Section */}
      <section className="container-responsive py-20 relative" style={{ zIndex: 10, pointerEvents: 'auto' }}>
        <Card className="p-12 md:p-20 text-center bg-gradient-to-br from-primary/5 via-primary/3 to-primary/8 border-primary/20 shadow-lg animate-slide-up backdrop-blur-sm">
          <h2 className="text-hero-responsive font-bold text-foreground mb-8 leading-tight">Ready to build amazing components?</h2>
          <p className="text-responsive text-muted-foreground mb-16 max-width-responsive mx-auto leading-relaxed">
            Start generating production-ready React components with AI in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" asChild className="group relative overflow-hidden animate-scale-in backdrop-blur-md bg-primary/95 hover:bg-primary shadow-2xl hover:shadow-primary/50 transition-all duration-300">
              <Link href="/chat" className="relative z-10">
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group relative overflow-hidden animate-scale-in backdrop-blur-md bg-background/80 hover:bg-background/90 shadow-2xl border-primary/30 hover:border-primary/50 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <Link href="/pricing" className="relative z-10">
                <DollarSign className="w-5 h-5 mr-2" />
                Pricing
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm relative" style={{ zIndex: 10, pointerEvents: 'auto' }}>
        <div className="container-responsive py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-responsive mobile-stack">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">AI Component Generator</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built with Next.js 15 & Origin UI</span>
              <span>•</span>
              <span>Powered by Google Gemini 2.5 Flash</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
