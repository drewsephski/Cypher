"use client"
import { Button } from "@/components/origin-ui/button"
import { Card } from "@/components/origin-ui/card"
import { Badge } from "@/components/origin-ui/badge"
import { ArrowRight, Sparkles, DollarSign, Github } from "lucide-react"
import { CaseStudySection } from '@/components/case-studies'
import { BentoSection } from '@/components/bento-section';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

// Tech Modal Component
function TechModal({ tech, isOpen, onClose }: { tech: string | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !tech) return null;

  const techInfo: Record<string, { title: string; description: string; features: string[]; integration: string }> = {
    'Next.js 15': {
      title: 'Next.js 15',
      description: 'The React Framework for Production',
      features: ['App Router', 'Server Components', 'Turbopack', 'React 19 Support'],
      integration: 'Powers the entire application with App Router for optimal performance, Server Components for SEO, and integrated API routes for AI functionality.'
    },
    'AI SDK v5': {
      title: 'AI SDK v5',
      description: 'Build AI-powered applications with React',
      features: ['Streaming Responses', 'Tool Calling', 'Multi-provider Support', 'Type Safety'],
      integration: 'Enables real-time AI chat, component generation, and seamless integration with Gemini 2.5 Flash for intelligent code assistance.'
    },
    'TypeScript 5': {
      title: 'TypeScript 5',
      description: 'JavaScript with syntax for types',
      features: ['Enhanced Type Inference', 'Performance Improvements', 'Better Error Messages', 'Module Resolution'],
      integration: 'Provides type safety for AI-generated components, API routes, and ensures reliable development experience with intelligent autocomplete.'
    },
    'Gemini 2.5 Flash': {
      title: 'Google Gemini 2.5 Flash',
      description: 'Advanced AI model for reasoning and generation',
      features: ['Fast Inference', 'Advanced Reasoning', 'Multi-modal Support', 'Code Generation'],
      integration: 'Drives the intelligent component generation, provides contextual code suggestions, and enables natural language programming interface.'
    },
    'React 19': {
      title: 'React 19',
      description: 'A JavaScript library for building user interfaces',
      features: ['Concurrent Features', 'Automatic Batching', 'Server Components', 'New Hooks'],
      integration: 'Latest React features enable smooth animations, efficient re-renders, and optimal performance for the AI-powered component builder.'
    },
    'Tailwind CSS 4': {
      title: 'Tailwind CSS 4',
      description: 'A utility-first CSS framework',
      features: ['Native CSS Engine', 'Better Performance', 'Enhanced DX', 'Modern CSS Features'],
      integration: 'Provides the beautiful, responsive design system with glassmorphism effects, animations, and consistent styling throughout the application.'
    }
  };

  const info = techInfo[tech];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground">{info.title}</h3>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-muted-foreground mb-4">{info.description}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {info.features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Integration:</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{info.integration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const handleLoad = (app: Application) => {
    // Optional: enforce a black scene background if the environment map is bright
    app.setBackgroundColor('#000000');
  }

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  useEffect(() => {
    const removeSplineLogo = () => {
      console.log('🔍 Scanning for Spline logo elements...');

      // Find all spline-viewer elements
      const splineViewers = document.querySelectorAll('spline-viewer');
      console.log(`Found ${splineViewers.length} spline-viewer elements`);

      splineViewers.forEach((viewer, index) => {
        console.log(`Processing spline-viewer ${index}:`, viewer);

        const shadowRoot = viewer.shadowRoot;
        if (shadowRoot) {
          console.log(`Shadow root found for viewer ${index}`);

          // Deep scan all elements in shadow DOM
          const scanElements = (root: ShadowRoot | Element) => {
            const elements = root.querySelectorAll('*');
            elements.forEach((element, elemIndex) => {
              const tagName = element.tagName?.toLowerCase();
              const id = element.id;
              const className = element.className;
              const textContent = element.textContent?.toLowerCase() || '';

              console.log(`Element ${elemIndex}:`, {
                tagName,
                id,
                className,
                textContent,
                element
              });

              // Check if this might be a logo element
              if (
                id?.toLowerCase().includes('logo') ||
                className?.toLowerCase().includes('logo') ||
                textContent.includes('spline') ||
                tagName === 'svg' ||
                tagName === 'a'
              ) {
                console.log('🎯 Potential logo element found, removing:', element);
                element.remove();
              }
            });
          };

          scanElements(shadowRoot);
        } else {
          console.log(`No shadow root found for viewer ${index}`);
        }
      });
    };

    // Run multiple times with delays to catch dynamically loaded content
    removeSplineLogo();
    setTimeout(removeSplineLogo, 100);
    setTimeout(removeSplineLogo, 500);
    setTimeout(removeSplineLogo, 1000);

    const observer = new MutationObserver(removeSplineLogo);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

  }, []);

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

          {/* Simple overlay to hide Spline watermark */}
          <div
            className="fixed bottom-4 right-4 w-40 h-12 bg-background/80 backdrop-blur-sm border border-border/50 rounded-md shadow-lg"
            style={{ zIndex: 5 }}
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
              <button
                onClick={() => setSelectedTech('Next.js 15')}
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 rounded-md"
              >
                Next.js 15
              </button>
              <button
                onClick={() => setSelectedTech('AI SDK v5')}
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 rounded-md"
              >
                AI SDK v5
              </button>
              <button
                onClick={() => setSelectedTech('TypeScript 5')}
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 rounded-md"
              >
                TypeScript 5
              </button>
              <button
                onClick={() => setSelectedTech('Gemini 2.5 Flash')}
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 rounded-md"
              >
                Gemini 2.5 Flash
              </button>
              <button
                onClick={() => setSelectedTech('React 19')}
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 rounded-md"
              >
                React 19
              </button>
              <button
                onClick={() => setSelectedTech('Tailwind CSS 4')}
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 rounded-md"
              >
                Tailwind CSS 4
              </button>
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
              <span>Built with Next.js 15 & AI SDK v5</span>
              <span>•</span>
              <span>Powered by Google Gemini</span>
              <span>•</span>
              <a
                href="https://github.com/drewsephski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit my GitHub profile"
              >
                <Github className="w-4 h-4" />
                <span className="sr-only">Visit my GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Tech Modal */}
      <TechModal tech={selectedTech} isOpen={!!selectedTech} onClose={() => setSelectedTech(null)} />
    </div>
  );
}