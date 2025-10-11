"use client"
import { Button } from "@/components/origin-ui/button"
import { Card } from "@/components/origin-ui/card"
import { Badge } from "@/components/origin-ui/badge"
import { ArrowRight, Sparkles, Eye, Download, Terminal, DollarSign } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container-responsive py-20 pt-32 text-center">
        <div className="max-width-responsive mx-auto">
          <Badge variant="secondary" className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 animate-fade-in">
            <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
            Powered by Google Gemini 2.5 Flash and ai-sdk
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance font-bricolage leading-tight animate-slide-up">
            AI-powered React components in <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">seconds</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Chat, browse docs, and generate production-ready components — fast, clean, and previewed live.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" asChild className="group relative overflow-hidden">
              <Link href="/chat" className="relative z-10">
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group relative overflow-hidden">
              <Link href="/pricing" className="relative z-10">
                <DollarSign className="w-5 h-5 mr-2" />
                Pricing
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <span className="text-sm font-medium text-primary mb-4 inline-block">Built with</span>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="hover:translate-y-[-1px] transition-all hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/20 border-primary/20 px-4 py-2">Next.js 15</Badge>
              <Badge variant="outline" className="hover:translate-y-[-1px] transition-all hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/20 border-primary/20 px-4 py-2">AI SDK v5</Badge>
              <Badge variant="outline" className="hover:translate-y-[-1px] transition-all hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/20 border-primary/20 px-4 py-2">TypeScript 5</Badge>
              <Badge variant="outline" className="hover:translate-y-[-1px] transition-all hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/20 border-primary/20 px-4 py-2">Gemini 2.5 Flash</Badge>
              <Badge variant="outline" className="hover:translate-y-[-1px] transition-all hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/20 border-primary/20 px-4 py-2">React 19</Badge>
              <Badge variant="outline" className="hover:translate-y-[-1px] transition-all hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/20 border-primary/20 px-4 py-2">Tailwind CSS 4</Badge>
            </div>
          </div>


        </div>
      </section>
      <section id="features" className="container-responsive py-20">
        <div className="text-center mb-20">
          <h2 className="text-hero-responsive font-bold text-foreground mb-8 font-bricolage tracking-tight">Features</h2>
          <p className="text-responsive text-muted-foreground max-width-responsive mx-auto font-light leading-relaxed">
            Everything you need to build modern React components with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-responsive max-width-responsive mx-auto">
          <Card className="p-8 text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/10 animate-fade-in animate-stagger-1">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-6 text-xl">Real-time Component Generation</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Interactive chat with Gemini for instant component generation and refinement
            </p>
          </Card>

          <Card className="p-8 text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/10 animate-fade-in animate-stagger-2">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Terminal className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-6 text-xl">React + TypeScript + Origin UI</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Clean, typed code with Origin UI design tokens and TypeScript interfaces
            </p>
          </Card>

          <Card className="p-8 text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/10 animate-fade-in animate-stagger-3">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-6 text-xl">Live Preview with Code | Preview Tabs</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sandboxed iframe preview with Code | Preview tabs for instant feedback
            </p>
          </Card>

          <Card className="p-8 text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/10 animate-fade-in animate-stagger-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Download className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-6 text-xl">Download with Usage Docs</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Download with usage docs and crawler-based integration guide
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-responsive py-20">
        <Card className="p-12 md:p-20 text-center bg-gradient-to-br from-primary/5 via-primary/3 to-primary/8 border-primary/20 shadow-lg animate-slide-up">
          <h2 className="text-hero-responsive font-bold text-foreground mb-8 leading-tight">Ready to build amazing components?</h2>
          <p className="text-responsive text-muted-foreground mb-16 max-width-responsive mx-auto leading-relaxed">
            Start generating production-ready React components with AI in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" asChild className="group relative overflow-hidden animate-scale-in">
              <Link href="/chat" className="relative z-10">
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group relative overflow-hidden animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Link href="/pricing" className="relative z-10">
                <DollarSign className="w-5 h-5 mr-2" />
                Pricing
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
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
