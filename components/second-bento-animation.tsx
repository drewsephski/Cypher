"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { OrbitingCircles } from '@/components/ui/orbitting-circles';
import { Monitor, Smartphone, Wifi, Shield, Zap, Cloud, Github, Terminal, Database, Server, Bot, Cpu, Router, Layers, Code, Braces, Lock, Blocks, GitBranch, Workflow, PackageCheck, Globe } from 'lucide-react';

export default function SecondBentoAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimate(false);
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950">
      {/* Enhanced gradients with glow effects */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-transparent"></div>
      
      {/* Subtle radial glow in center */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/10 via-transparent to-transparent"></div>

      <motion.div 
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: animate ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          
          {/* Innermost Ring - 8 icons */}
          <OrbitingCircles
            index={0}
            iconSize={52}
            radius={130}
            reverse
            speed={1.2}
            startAnimationDelay={0}
            once={false}
          >
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Database className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Server className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Cpu className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Router className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Workflow className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
            <motion.div 
              className="size-10 bg-neutral-800/90 rounded-full flex items-center justify-center border border-neutral-700/70 hover:border-neutral-500/90 hover:bg-neutral-700/95 hover:shadow-lg hover:shadow-neutral-700/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Blocks className="size-5 text-neutral-100 group-hover:text-white transition-colors" strokeWidth={2} />
            </motion.div>
          </OrbitingCircles>

          {/* Center Icon - Pulsing */}
          <motion.div
            className="absolute size-20 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center border-2 border-neutral-700/80 shadow-xl shadow-neutral-900/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: animate ? 1 : 0, 
              opacity: animate ? 1 : 0,
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <motion.div
              animate={animate ? {
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Cpu className="size-10 text-neutral-100" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Second Ring - 10 icons */}
          <OrbitingCircles 
            index={1} 
            iconSize={48} 
            radius={220} 
            speed={0.8} 
            startAnimationDelay={0.1} 
            once={false}
          >
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitBranch className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Cloud className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lock className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Braces className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Layers className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-9 bg-neutral-800/80 rounded-full flex items-center justify-center border border-neutral-700/60 hover:border-neutral-500/80 hover:bg-neutral-700/90 hover:shadow-md hover:shadow-neutral-700/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <PackageCheck className="size-4 text-neutral-200 group-hover:text-neutral-50 transition-colors" strokeWidth={1.8} />
            </motion.div>
          </OrbitingCircles>

          {/* Third Ring - 12 icons */}
          <OrbitingCircles
            index={2}
            iconSize={44}
            radius={310}
            reverse
            speed={0.6}
            startAnimationDelay={0.2}
            once={false}
          >
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Monitor className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Smartphone className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wifi className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Database className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Server className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Router className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Cpu className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 hover:shadow-md hover:shadow-neutral-700/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="size-3.5 text-neutral-300 group-hover:text-neutral-100 transition-colors" strokeWidth={1.8} />
            </motion.div>
          </OrbitingCircles>

          {/* Outermost Ring - 14 icons */}
          <OrbitingCircles
            index={3}
            iconSize={40}
            radius={400}
            speed={0.4}
            startAnimationDelay={0.3}
            once={false}
          >
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Database className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Layers className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Workflow className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Monitor className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Server className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Router className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
            <motion.div 
              className="size-7 bg-neutral-800/60 rounded-full flex items-center justify-center border border-neutral-700/40 hover:border-neutral-500/60 hover:bg-neutral-700/70 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wifi className="size-3 text-neutral-400 group-hover:text-neutral-200 transition-colors" strokeWidth={1.8} />
            </motion.div>
          </OrbitingCircles>
        </div>
      </motion.div>

      {/* Enhanced floating ambient icons with staggered animations */}
      <motion.div 
        className="absolute top-12 left-12 opacity-0 hover:opacity-80 transition-opacity duration-300"
        initial={{ opacity: 0, scale: 0, y: -20 }}
        animate={{ opacity: animate ? 0.4 : 0, scale: animate ? 1 : 0, y: animate ? 0 : -20 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.2, opacity: 0.8 }}
      >
        <div className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 cursor-pointer shadow-lg shadow-neutral-900/30">
          <Zap className="size-4 text-neutral-300" strokeWidth={1.8} />
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-8 right-16 opacity-0 hover:opacity-80 transition-opacity duration-300"
        initial={{ opacity: 0, scale: 0, y: -20 }}
        animate={{ opacity: animate ? 0.4 : 0, scale: animate ? 1 : 0, y: animate ? 0 : -20 }}
        transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.2, opacity: 0.8 }}
      >
        <div className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 cursor-pointer shadow-lg shadow-neutral-900/30">
          <Shield className="size-4 text-neutral-300" strokeWidth={1.8} />
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 left-20 opacity-0 hover:opacity-80 transition-opacity duration-300"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: animate ? 0.4 : 0, scale: animate ? 1 : 0, y: animate ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.2, opacity: 0.8 }}
      >
        <div className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 cursor-pointer shadow-lg shadow-neutral-900/30">
          <Cloud className="size-4 text-neutral-300" strokeWidth={1.8} />
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 right-24 opacity-0 hover:opacity-80 transition-opacity duration-300"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: animate ? 0.4 : 0, scale: animate ? 1 : 0, y: animate ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.2, opacity: 0.8 }}
      >
        <div className="size-8 bg-neutral-800/70 rounded-full flex items-center justify-center border border-neutral-700/50 cursor-pointer shadow-lg shadow-neutral-900/30">
          <Code className="size-4 text-neutral-300" strokeWidth={1.8} />
        </div>
      </motion.div>
    </div>
  );
}