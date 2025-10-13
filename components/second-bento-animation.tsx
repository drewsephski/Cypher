"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { OrbitingCircles } from '@/components/ui/orbitting-circles';
import { Monitor, Smartphone, Wifi, Shield, Zap, Cloud, Github, Terminal, Database, Server, Bot, Cpu, Router, Layers, Code, Braces, Lock, Blocks, GitBranch, Workflow, PackageCheck, Globe, Heart, Star, Sparkles, Moon, Sun, Eye, Camera, Music, Headphones, Gamepad2, Palette, Coffee, Leaf } from 'lucide-react';

export default function SecondBentoAnimation() {
  const ref = useRef(null);
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
    <div ref={ref} className="relative flex h-full w-full items-center justify-center overflow-visible bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950">
      {/* Gradient overlays - Dark mode only */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full dark:bg-gradient-to-t dark:from-neutral-950 dark:to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-40 w-full dark:bg-gradient-to-b dark:from-neutral-950 dark:to-transparent"></div>
      
      {/* Subtle center glow - Dark mode only */}
      <div className="pointer-events-none absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-neutral-500/5 dark:via-transparent dark:to-transparent"></div>
      
      {/* Ambient effects - Dark mode only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden dark:block hidden">
        <motion.div 
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neutral-600/10 blur-[120px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-neutral-700/8 blur-[100px] rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        className="relative flex h-full w-full items-center justify-center overflow-visible min-h-[800px] min-w-[800px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: animate ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-16">
          
          {/* Innermost Ring - 8 icons */}
          <OrbitingCircles
            index={0}
            iconSize={52}
            radius={170}  // Increased from 150
            reverse
            speed={0.06}
            startAnimationDelay={0}
            once={false}
          >
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="size-10 bg-white/90 dark:bg-neutral-900/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-200/80 dark:border-neutral-800/70 cursor-pointer group relative shadow-sm shadow-neutral-200/50 dark:shadow-neutral-900/20 transition-all duration-300 hover:border-neutral-300/80 dark:hover:border-neutral-700/80 hover:shadow-md hover:shadow-neutral-300/50 dark:hover:shadow-neutral-900/30"
              whileHover={{
                scale: 1.1,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-600/20 via-neutral-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.15) 0%, rgba(100, 100, 100, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(120, 120, 120, 0.2) 0%, rgba(100, 100, 100, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.15) 0%, rgba(100, 100, 100, 0) 70%)",
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Terminal className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="size-10 bg-neutral-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 cursor-pointer group relative"
              whileHover={{
                scale: [1, 1.06, 1.02],
                rotate: [0, -1.5, 1.5, 0],
                transition: { duration: 0.9, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700/0 to-neutral-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.1) 0%, rgba(115, 115, 115, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.15) 0%, rgba(115, 115, 115, 0) 70%)",
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Code className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="size-10 bg-neutral-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 cursor-pointer group relative"
              whileHover={{
                scale: [1, 1.07, 1.03],
                rotate: [0, 3, -1.5, 0],
                transition: { duration: 0.85, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700/0 to-neutral-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.1) 0%, rgba(115, 115, 115, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.15) 0%, rgba(115, 115, 115, 0) 70%)",
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Database className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="size-10 bg-neutral-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 cursor-pointer group relative"
              whileHover={{
                scale: [1, 1.05, 1.02],
                rotate: [0, -2.5, 2.5, 0],
                transition: { duration: 0.95, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700/0 to-neutral-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.1) 0%, rgba(115, 115, 115, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.15) 0%, rgba(115, 115, 115, 0) 70%)",
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Server className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="size-10 bg-neutral-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 cursor-pointer group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700/0 to-neutral-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.1) 0%, rgba(115, 115, 115, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.15) 0%, rgba(115, 115, 115, 0) 70%)",
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Cpu className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="size-10 bg-neutral-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 cursor-pointer group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700/0 to-neutral-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.1) 0%, rgba(115, 115, 115, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.15) 0%, rgba(115, 115, 115, 0) 70%)",
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Router className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="size-10 bg-neutral-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 cursor-pointer group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700/0 to-neutral-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.1) 0%, rgba(115, 115, 115, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.15) 0%, rgba(115, 115, 115, 0) 70%)",
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Workflow className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="size-10 bg-neutral-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 cursor-pointer group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700/0 to-neutral-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.1) 0%, rgba(115, 115, 115, 0) 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(115, 115, 115, 0.15) 0%, rgba(115, 115, 115, 0) 70%)",
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
              <Blocks className="size-5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
          </OrbitingCircles>

          {/* Center Icon - Pulsing */}
          <motion.div
            className="absolute size-20 bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/60 shadow-2xl shadow-neutral-950/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: animate ? 1.5 : 0, 
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
              className="relative"
              animate={animate ? {
                scale: [1, 1.03, 1],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(115, 115, 115, 0.1)",
                    "0 0 30px rgba(115, 115, 115, 0.15)",
                    "0 0 20px rgba(115, 115, 115, 0.1)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Cpu className="size-12 text-neutral-300 relative z-10" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Second Ring - 10 icons */}
          <OrbitingCircles 
            index={1} 
            iconSize={48} 
            radius={120} 
            speed={0.02} 
            startAnimationDelay={0.1} 
            once={false}
          >
            {[
              { Icon: Github, delay: 0.5 },
              { Icon: GitBranch, delay: 0.55 },
              { Icon: Cloud, delay: 0.6 },
              { Icon: Shield, delay: 0.65 },
              { Icon: Lock, delay: 0.7 },
              { Icon: Bot, delay: 0.75 },
              { Icon: Zap, delay: 0.8 },
              { Icon: Braces, delay: 0.85 },
              { Icon: Layers, delay: 0.9 },
              { Icon: PackageCheck, delay: 0.95 },
            ].map(({ Icon, delay }, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay }}
                className="size-9 bg-neutral-900/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/50 cursor-pointer group relative overflow-hidden"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neutral-700/0 via-neutral-600/0 to-neutral-700/0"
                  initial={{ opacity: 0, rotate: 0 }}
                  whileHover={{ 
                    opacity: [0, 0.1, 0],
                    rotate: 180,
                  }}
                  transition={{ duration: 0.8 }}
                />
                <Icon className="size-4 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
              </motion.div>
            ))}
          </OrbitingCircles>

          {/* Third Ring - 12 icons */}
          <OrbitingCircles
            index={2}
            iconSize={44}
            radius={200}
            reverse
            speed={0.015}
            startAnimationDelay={0.2}
            once={false}
          >
            {[
              { Icon: Monitor, delay: 1.0 },
              { Icon: Smartphone, delay: 1.05 },
              { Icon: Wifi, delay: 1.1 },
              { Icon: Globe, delay: 1.15 },
              { Icon: Terminal, delay: 1.2 },
              { Icon: Database, delay: 1.25 },
              { Icon: Server, delay: 1.3 },
              { Icon: Code, delay: 1.35 },
              { Icon: Shield, delay: 1.4 },
              { Icon: Router, delay: 1.45 },
              { Icon: Cpu, delay: 1.5 },
              { Icon: Bot, delay: 1.55 },
            ].map(({ Icon, delay }, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay }}
                className="size-8 bg-neutral-900/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/40 cursor-pointer group relative"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border border-neutral-700/0 group-hover:border-neutral-700/30"
                  whileHover={{
                    scale: [1, 1.2, 1.1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                />
                <Icon className="size-3.5 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
              </motion.div>
            ))}
          </OrbitingCircles>

          {/* Outermost Ring - 14 icons */}
          <OrbitingCircles
            index={3}
            iconSize={40}
            radius={240}
            speed={0.01}
            startAnimationDelay={0.3}
            once={false}
          >
            {[
              { Icon: Github, delay: 1.6 },
              { Icon: Terminal, delay: 1.65 },
              { Icon: Database, delay: 1.7 },
              { Icon: Layers, delay: 1.75 },
              { Icon: Code, delay: 1.8 },
              { Icon: Workflow, delay: 1.85 },
              { Icon: Monitor, delay: 1.9 },
              { Icon: Shield, delay: 1.95 },
              { Icon: Server, delay: 2.0 },
              { Icon: Router, delay: 2.05 },
              { Icon: Bot, delay: 2.1 },
              { Icon: Wifi, delay: 2.15 },
              { Icon: Globe, delay: 2.2 },
              { Icon: Zap, delay: 2.25 },
            ].map(({ Icon, delay }, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay }}
                className="size-7 bg-neutral-900/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/30 cursor-pointer group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-neutral-800/0 group-hover:bg-neutral-800/10"
                  transition={{ duration: 0.6 }}
                />
                <Icon className="size-3 text-neutral-500 group-hover:text-neutral-300 transition-all duration-300 relative z-10" strokeWidth={1.5} />
              </motion.div>
            ))}
          </OrbitingCircles>

          {/* Fifth Ring - 16 icons */}
          <OrbitingCircles
            index={4}
            iconSize={36}
            radius={220}
            reverse
            speed={0.008}
            startAnimationDelay={0.4}
            once={false}
          >
            {[
              { Icon: Heart, delay: 2.3 },
              { Icon: Star, delay: 2.35 },
              { Icon: Sparkles, delay: 2.4 },
              { Icon: Moon, delay: 2.45 },
              { Icon: Sun, delay: 2.5 },
              { Icon: Eye, delay: 2.55 },
              { Icon: Camera, delay: 2.6 },
              { Icon: Music, delay: 2.65 },
              { Icon: Headphones, delay: 2.7 },
              { Icon: Gamepad2, delay: 2.75 },
              { Icon: Palette, delay: 2.8 },
              { Icon: Coffee, delay: 2.85 },
              { Icon: Leaf, delay: 2.9 },
              { Icon: Zap, delay: 2.95 },
              { Icon: Shield, delay: 3.0 },
              { Icon: Cloud, delay: 3.05 },
            ].map(({ Icon, delay }, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay }}
                className="size-6 bg-neutral-900/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/20 cursor-pointer group relative"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-neutral-800/0 group-hover:bg-neutral-800/15"
                  whileHover={{
                    scale: [1, 1.15, 1.05],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
                <Icon className="size-2.5 text-neutral-600 group-hover:text-neutral-400 transition-all duration-300 relative z-10" strokeWidth={1.5} />
              </motion.div>
            ))}
          </OrbitingCircles>

        </div>

      </motion.div>

      {/* Floating ambient icons with wave animations */}
      {[
        { Icon: Zap, position: "top-12 left-12", delay: 0.4, yOffset: -20, xOffset: -15 },
        { Icon: Shield, position: "top-8 right-16", delay: 0.8, yOffset: -20, xOffset: 15 },
        { Icon: Cloud, position: "bottom-16 left-20", delay: 1.2, yOffset: 20, xOffset: -20 },
        { Icon: Code, position: "bottom-12 right-24", delay: 1.6, yOffset: 20, xOffset: 20 },
        { Icon: Heart, position: "top-20 left-1/4", delay: 2.0, yOffset: -25, xOffset: -10 },
        { Icon: Star, position: "bottom-20 right-1/4", delay: 2.4, yOffset: 25, xOffset: 10 },
        { Icon: Sparkles, position: "top-1/3 left-8", delay: 2.8, yOffset: -15, xOffset: 25 },
        { Icon: Moon, position: "bottom-1/3 right-8", delay: 3.2, yOffset: 15, xOffset: -25 },
      ].map(({ Icon, position, delay, yOffset, xOffset }, i) => (
        <motion.div
          key={i}
          className={`absolute ${position} group cursor-pointer`}
          initial={{ opacity: 0, scale: 0, y: yOffset, x: xOffset }}
          animate={{
            opacity: animate ? 0.3 : 0,
            scale: animate ? 1 : 0,
            y: animate ? [yOffset, yOffset + 10, yOffset - 10, yOffset] : yOffset,
            x: animate ? [xOffset, xOffset - 8, xOffset + 8, xOffset] : xOffset
          }}
          transition={{
            duration: 0.4,
            delay,
            type: "spring",
            stiffness: 150,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          whileHover={{ scale: 1.15, opacity: 0.6 }}
        >
          <div className="size-8 bg-neutral-900/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/40 shadow-lg shadow-neutral-950/30 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neutral-700/0 to-neutral-600/0"
              whileHover={{
                background: [
                  "linear-gradient(135deg, rgba(115, 115, 115, 0) 0%, rgba(82, 82, 82, 0) 100%)",
                  "linear-gradient(135deg, rgba(115, 115, 115, 0.1) 0%, rgba(82, 82, 82, 0.05) 100%)",
                ]
              }}
              transition={{ duration: 0.4 }}
            />
            <Icon className="size-4 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}

      {/* Perimeter wave elements */}
      {[
        { Icon: Eye, position: "top-4 left-1/2", delay: 3.6, yOffset: -30, xOffset: 0, waveAmplitude: 15 },
        { Icon: Camera, position: "bottom-4 left-1/2", delay: 4.0, yOffset: 30, xOffset: 0, waveAmplitude: -15 },
        { Icon: Music, position: "left-4 top-1/2", delay: 4.4, yOffset: 0, xOffset: -30, waveAmplitude: 20 },
        { Icon: Headphones, position: "right-4 top-1/2", delay: 4.8, yOffset: 0, xOffset: 30, waveAmplitude: -20 },
      ].map(({ Icon, position, delay, yOffset, xOffset, waveAmplitude }, i) => (
        <motion.div
          key={i}
          className={`absolute ${position} group cursor-pointer`}
          initial={{ opacity: 0, scale: 0, y: yOffset, x: xOffset }}
          animate={{
            opacity: animate ? 0.2 : 0,
            scale: animate ? 1 : 0,
            y: animate ? [yOffset, yOffset + waveAmplitude, yOffset - waveAmplitude * 0.5, yOffset] : yOffset,
            x: animate ? [xOffset, xOffset + waveAmplitude * 0.7, xOffset - waveAmplitude * 0.3, xOffset] : xOffset
          }}
          transition={{
            duration: 0.5,
            delay,
            type: "spring",
            stiffness: 100,
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
          }}
          whileHover={{ scale: 1.2, opacity: 0.5 }}
        >
          <div className="size-6 bg-neutral-900/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/30 shadow-lg shadow-neutral-950/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neutral-700/0 to-neutral-600/0"
              whileHover={{
                background: [
                  "linear-gradient(135deg, rgba(115, 115, 115, 0) 0%, rgba(82, 82, 82, 0) 100%)",
                  "linear-gradient(135deg, rgba(115, 115, 115, 0.08) 0%, rgba(82, 82, 82, 0.04) 100%)",
                ]
              }}
              transition={{ duration: 0.3 }}
            />
            <Icon className="size-3 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}

      {/* Corner wave particles */}
      {[
        { Icon: Gamepad2, position: "top-8 left-8", delay: 5.2, yOffset: -40, xOffset: -40 },
        { Icon: Palette, position: "top-8 right-8", delay: 5.6, yOffset: -40, xOffset: 40 },
        { Icon: Coffee, position: "bottom-8 left-8", delay: 6.0, yOffset: 40, xOffset: -40 },
        { Icon: Leaf, position: "bottom-8 right-8", delay: 6.4, yOffset: 40, xOffset: 40 },
      ].map(({ Icon, position, delay, yOffset, xOffset }, i) => (
        <motion.div
          key={i}
          className={`absolute ${position} group cursor-pointer`}
          initial={{ opacity: 0, scale: 0, y: yOffset, x: xOffset }}
          animate={{
            opacity: animate ? 0.15 : 0,
            scale: animate ? 1 : 0,
            y: animate ? [yOffset, yOffset + 12, yOffset - 8, yOffset] : yOffset,
            x: animate ? [xOffset, xOffset - 10, xOffset + 6, xOffset] : xOffset
          }}
          transition={{
            duration: 0.6,
            delay,
            type: "spring",
            stiffness: 80,
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
          }}
          whileHover={{ scale: 1.25, opacity: 0.4 }}
        >
          <div className="size-5 bg-neutral-900/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-800/25 shadow-lg shadow-neutral-950/15 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neutral-700/0 to-neutral-600/0"
              whileHover={{
                background: [
                  "linear-gradient(135deg, rgba(115, 115, 115, 0) 0%, rgba(82, 82, 82, 0) 100%)",
                  "linear-gradient(135deg, rgba(115, 115, 115, 0.06) 0%, rgba(82, 82, 82, 0.03) 100%)",
                ]
              }}
              transition={{ duration: 0.25 }}
            />
            <Icon className="size-2.5 text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}