"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { OrbitingCircles } from '@/components/ui/orbitting-circles';
import { Monitor, Smartphone, Wifi, Shield, Zap, Cloud, Github, Terminal, Database, Server, Bot, Cpu, Router, Layers, Code, Braces } from 'lucide-react';

export default function SecondBentoAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
  if (isInView) {
    setAnimate(false); // Reset animation state
    const timer = setTimeout(() => {
      setAnimate(true); // Start animation after a small delay
    }, 100);
    return () => clearTimeout(timer);
  } else {
    setAnimate(false); // Reset when not in view
  }
}, [isInView]);

  return (
    <div ref={ref} className="relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950">
      {/* Subtle gradients */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-20"></div>

      <motion.div 
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: animate ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          
          {/* Inner Ring */}
          <OrbitingCircles
            index={0}
            iconSize={48}
            radius={120}
            reverse
            speed={1}
            centerIcon={<Router className="size-7 text-neutral-300" strokeWidth={1.5} />}
            centerIconSize={64}
            startAnimationDelay={0}
            once={false}
          >
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-600/80 hover:bg-neutral-700/90 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Router className="size-4 text-neutral-300 group-hover:text-neutral-200 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-600/80 hover:bg-neutral-700/90 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Layers className="size-4 text-neutral-300 group-hover:text-neutral-200 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-600/80 hover:bg-neutral-700/90 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Code className="size-4 text-neutral-300 group-hover:text-neutral-200 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-600/80 hover:bg-neutral-700/90 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Terminal className="size-4 text-neutral-300 group-hover:text-neutral-200 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-600/80 hover:bg-neutral-700/90 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Monitor className="size-4 text-neutral-300 group-hover:text-neutral-200 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-600/80 hover:bg-neutral-700/90 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Database className="size-4 text-neutral-300 group-hover:text-neutral-200 transition-colors" strokeWidth={1.5} />
            </motion.div>
          </OrbitingCircles>

          {/* Middle Ring */}
          <OrbitingCircles 
            index={1} 
            iconSize={48} 
            radius={200} 
            speed={0.5} 
            centerIcon={<Code className="size-6 text-neutral-400" strokeWidth={1.5} />} 
            centerIconSize={60} 
            startAnimationDelay={0.1} 
            once={false}
          >
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Braces className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Github className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Server className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Cloud className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Bot className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <Cpu className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Shield className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-600/70 hover:bg-neutral-700/80 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <Zap className="size-3.5 text-neutral-400 group-hover:text-neutral-300 transition-colors" strokeWidth={1.5} />
            </motion.div>
          </OrbitingCircles>

          {/* Outer Ring */}
          <OrbitingCircles
            index={2}
            iconSize={48}
            radius={280}
            reverse
            speed={0.5}
            centerIcon={<Database className="size-5 text-neutral-500" strokeWidth={1.5} />}
            centerIconSize={56}
            startAnimationDelay={0.2}
            once={false}
          >
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Monitor className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Wifi className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Router className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <Terminal className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Github className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <Smartphone className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Shield className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              <Zap className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Bot className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.75 }}
            >
              <Server className="size-3 text-neutral-500 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
            </motion.div>
          </OrbitingCircles>
          
          {/* Outermost Ring */}
          <OrbitingCircles
            index={3}
            iconSize={40}
            radius={360}
            speed={0.3}
            centerIcon={<Code className="size-4 text-neutral-600" strokeWidth={1.5} />}
            centerIconSize={48}
            startAnimationDelay={0.3}
            once={false}
          >
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Terminal className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <Cloud className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Database className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <Router className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Monitor className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              <Layers className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Code className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.75 }}
            >
              <Zap className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Shield className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              className="size-6 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.85 }}
            >
              <Github className="size-2.5 text-neutral-600 group-hover:text-neutral-500 transition-colors" strokeWidth={1.5} />
            </motion.div>
          </OrbitingCircles>
        </div>
      </motion.div>

      {/* Minimal ambient icons with animations */}
      <motion.div 
        className="absolute top-8 left-16 opacity-0 hover:opacity-70 transition-opacity duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: animate ? 0.5 : 0, scale: animate ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.15 }}
      >
        <div className="size-6 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 cursor-pointer">
          <Zap className="size-3 text-neutral-500" strokeWidth={1.5} />
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-6 right-20 opacity-0 hover:opacity-70 transition-opacity duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: animate ? 0.5 : 0, scale: animate ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.15 }}
      >
        <div className="size-6 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 cursor-pointer">
          <Zap className="size-3 text-neutral-500" strokeWidth={1.5} />
        </div>
      </motion.div>
    </div>
  );
}