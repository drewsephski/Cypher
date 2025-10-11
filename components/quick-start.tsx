'use client'

import { CheckCircle2, Sparkles, Code, Zap, Download } from 'lucide-react'
import { Card } from '@/components/origin-ui/card'
import { cn } from '@/lib/utils'

const steps = [
  {
    title: 'Sign up for free',
    description: 'Create your account in seconds with GitHub or email',
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    className: 'hover:shadow-purple-100 dark:hover:shadow-purple-900/30'
  },
  {
    title: 'Describe your component',
    description: 'Tell our AI what you need with natural language',
    icon: <Code className="h-5 w-5 text-blue-500" />,
    className: 'hover:shadow-blue-100 dark:hover:shadow-blue-900/30'
  },
  {
    title: 'Generate & customize',
    description: 'Instantly get your component and tweak it as needed',
    icon: <Zap className="h-5 w-5 text-amber-500" />,
    className: 'hover:shadow-amber-100 dark:hover:shadow-amber-900/30'
  },
  {
    title: 'Export to your project',
    description: 'Copy the code or install directly via package manager',
    icon: <Download className="h-5 w-5 text-emerald-500" />,
    className: 'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30'
  }
]

export function QuickStart() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into production-ready React components with just a few clicks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={step.title}
              className={cn(
                'group relative overflow-hidden transition-all duration-300 hover:-translate-y-1',
                step.className
              )}
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Join thousands of developers already building with cypher
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/chat" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              Start Building for Free
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-border hover:bg-accent/50 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
