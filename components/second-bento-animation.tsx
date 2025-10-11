import { OrbitingCircles } from '@/components/ui/orbitting-circles';
import { Monitor, Smartphone, Wifi, Shield, Zap, Cloud, Github, Terminal, Database, Server, Bot, Cpu, Router, Layers, Palette, Code, Braces, Settings, Grid3X3 } from 'lucide-react';

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={120}
            reverse
            speed={1}
            centerIcon={<Router className="size-10 text-primary" />}
            centerIconSize={80}
          >
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-primary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Router className="size-8 text-primary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-primary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Layers className="size-8 text-primary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-primary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Palette className="size-8 text-primary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-primary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Code className="size-8 text-primary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-primary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Settings className="size-8 text-primary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-primary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Monitor className="size-8 text-primary" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} radius={200} speed={0.5} centerIcon={<Code className="size-10 text-secondary" />} centerIconSize={80}>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Braces className="size-8 text-secondary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Github className="size-8 text-secondary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Terminal className="size-8 text-secondary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Database className="size-8 text-secondary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Server className="size-8 text-secondary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Monitor className="size-8 text-secondary" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Bot className="size-8 text-secondary" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={280}
            reverse
            speed={0.5}
            centerIcon={<Settings className="size-10 text-accent" />}
            centerIconSize={80}
          >
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Monitor className="size-8 text-accent" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Bot className="size-8 text-accent" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Zap className="size-8 text-accent" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Shield className="size-8 text-accent" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Router className="size-8 text-accent" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Terminal className="size-8 text-accent" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 hover:border-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              <Github className="size-8 text-accent" />
            </div>
          </OrbitingCircles>
          
          {/* Additional outer ring for more tools */}
          <OrbitingCircles
            index={3}
            iconSize={50}
            radius={380}
            speed={0.3}
            centerIcon={<Database className="size-8 text-muted" />}
            centerIconSize={70}
          >
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Terminal className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Github className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Cloud className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Server className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Router className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Monitor className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Bot className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Zap className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Shield className="size-6 text-muted" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 hover:border-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Code className="size-6 text-muted" />
            </div>
          </OrbitingCircles>
        </div>
      </div>

      {/* Additional decorative tech icons around the perimeter - TOP ROW */}
      <div className="absolute top-8 left-12 opacity-90 hover:opacity-100 transition-opacity">
        <div className="size-8 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30 hover:bg-orange-500/30 hover:scale-110 hover:shadow-lg transition-all duration-300">
          <Zap className="size-4 text-orange-600" />
        </div>
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-85 hover:opacity-100 transition-opacity">
        <div className="size-7 bg-blue-500/15 rounded-full flex items-center justify-center border border-blue-500/25 hover:bg-blue-500/25 hover:scale-110 hover:shadow-md transition-all duration-300">
          <Code className="size-3.5 text-blue-600" />
        </div>
      </div>

      <div className="absolute top-8 right-12 opacity-90 hover:opacity-100 transition-opacity">
        <div className="size-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30 hover:bg-purple-500/30 hover:scale-110 hover:shadow-lg transition-all duration-300">
          <Shield className="size-4 text-purple-600" />
        </div>
      </div>

      {/* MIDDLE ROW - LEFT/RIGHT SIDES */}
      <div className="absolute top-1/2 left-6 opacity-75 hover:opacity-95 transition-opacity">
        <div className="size-6 bg-green-500/15 rounded-full flex items-center justify-center border border-green-500/25 hover:bg-green-500/25 hover:scale-110 hover:shadow-md transition-all duration-300">
          <Terminal className="size-3 text-green-600" />
        </div>
      </div>

      <div className="absolute top-1/2 right-6 opacity-75 hover:opacity-95 transition-opacity">
        <div className="size-6 bg-red-500/15 rounded-full flex items-center justify-center border border-red-500/25 hover:bg-red-500/25 hover:scale-110 hover:shadow-md transition-all duration-300">
          <Bot className="size-3 text-red-600" />
        </div>
      </div>

      <div className="absolute top-1/3 left-14 opacity-65 hover:opacity-85 transition-opacity">
        <div className="size-5 bg-yellow-500/15 rounded-full flex items-center justify-center border border-yellow-500/25 hover:bg-yellow-500/25 hover:scale-110 hover:shadow-md transition-all duration-300">
          <Github className="size-2.5 text-yellow-600" />
        </div>
      </div>

      <div className="absolute top-2/3 right-14 opacity-65 hover:opacity-85 transition-opacity">
        <div className="size-5 bg-pink-500/15 rounded-full flex items-center justify-center border border-pink-500/25 hover:bg-pink-500/25 hover:scale-110 hover:shadow-md transition-all duration-300">
          <Database className="size-2.5 text-pink-600" />
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="absolute bottom-6 left-8 opacity-90 hover:opacity-100 transition-opacity">
        <div className="size-8 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 hover:bg-cyan-500/30 hover:scale-110 hover:shadow-lg transition-all duration-300">
          <Router className="size-4 text-cyan-600" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-85 hover:opacity-100 transition-opacity">
        <div className="size-7 bg-indigo-500/15 rounded-full flex items-center justify-center border border-indigo-500/25 hover:bg-indigo-500/25 hover:scale-110 hover:shadow-md transition-all duration-300">
          <Monitor className="size-3.5 text-indigo-600" />
        </div>
      </div>

      <div className="absolute bottom-6 right-8 opacity-90 hover:opacity-100 transition-opacity">
        <div className="size-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30 hover:bg-emerald-500/30 hover:scale-110 hover:shadow-lg transition-all duration-300">
          <Layers className="size-4 text-emerald-600" />
        </div>
      </div>

      {/* CORNER ACCENTS - More mixed positioning */}
      <div className="absolute top-16 left-16 opacity-60 hover:opacity-80 transition-opacity">
        <div className="size-4 bg-violet-500/15 rounded-full flex items-center justify-center border border-violet-500/25 hover:bg-violet-500/25 hover:scale-110 hover:shadow-sm transition-all duration-300">
          <Zap className="size-2 text-violet-600" />
        </div>
      </div>

      <div className="absolute top-16 right-16 opacity-60 hover:opacity-80 transition-opacity">
        <div className="size-4 bg-teal-500/15 rounded-full flex items-center justify-center border border-teal-500/25 hover:bg-teal-500/25 hover:scale-110 hover:shadow-sm transition-all duration-300">
          <Code className="size-2 text-teal-600" />
        </div>
      </div>

      <div className="absolute bottom-16 left-16 opacity-60 hover:opacity-80 transition-opacity">
        <div className="size-4 bg-rose-500/15 rounded-full flex items-center justify-center border border-rose-500/25 hover:bg-rose-500/25 hover:scale-110 hover:shadow-sm transition-all duration-300">
          <Terminal className="size-2 text-rose-600" />
        </div>
      </div>

      <div className="absolute bottom-16 right-16 opacity-60 hover:opacity-80 transition-opacity">
        <div className="size-4 bg-amber-500/15 rounded-full flex items-center justify-center border border-amber-500/25 hover:bg-amber-500/25 hover:scale-110 hover:shadow-sm transition-all duration-300">
          <Bot className="size-2 text-amber-600" />
        </div>
      </div>
    </div>
  );
}