'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Database, Calendar, FileText, BarChart3, Code, Palette, Layers, Zap } from 'lucide-react';

interface TaskConfig {
  title: string;
  icon: React.ReactNode;
  status: 'pending' | 'processing' | 'completed';
  className: string;
}

const taskConfigs: TaskConfig[] = [
  {
    title: 'Component generated',
    icon: <Code className="size-4" />,
    status: 'completed',
    className: 'bg-muted border border-border text-muted-foreground',
  },
  {
    title: 'Styling applied',
    icon: <Palette className="size-4" />,
    status: 'completed',
    className: 'bg-muted border border-border text-muted-foreground',
  },
  {
    title: 'Props configured',
    icon: <Layers className="size-4" />,
    status: 'processing',
    className: 'bg-accent border border-border text-foreground',
  },
  {
    title: 'Responsive optimized',
    icon: <Zap className="size-4" />,
    status: 'pending',
    className: 'bg-muted/50 border border-border/50 text-muted-foreground/70',
  },
];

export function AITaskExecution({
  shouldAnimate,
  startAnimationDelay,
}: {
  shouldAnimate: boolean;
  startAnimationDelay?: number;
}) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [showTasks, setShowTasks] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      setShowTasks(false);
      setCurrentTaskIndex(0);
      return;
    }

    const timeoutId = setTimeout(
      () => {
        setShowTasks(true);
      },
      (startAnimationDelay || 0) * 1000,
    );

    return () => clearTimeout(timeoutId);
  }, [shouldAnimate, startAnimationDelay]);

  useEffect(() => {
    if (!showTasks) return;

    const intervalId = setInterval(() => {
      setCurrentTaskIndex((prev) => {
        if (prev < taskConfigs.length - 1) {
          return prev + 1;
        }
        return 0; // Reset to start the cycle again
      });
    }, 1500);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [showTasks]);

  return (
    <div className="w-full max-w-sm mx-auto px-6 space-y-3">
      {/* AI Brain Icon */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: showTasks ? 1 : 0,
            opacity: showTasks ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'backOut',
          }}
          className="relative"
        >
          <div className="size-12 bg-black rounded-full flex items-center justify-center">
            <Database className="size-6 filter brightness-0 invert" />
          </div>
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-2 border-secondary rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>

      {/* Task List */}
      <AnimatePresence>
        {taskConfigs.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: showTasks && index <= currentTaskIndex ? 1 : 0.3,
              x: showTasks ? 0 : -20,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              index <= currentTaskIndex ? task.className : 'bg-muted/30 border border-border/30 text-muted-foreground/50'
            }`}
          >
            {/* Status indicator */}
            <div className="flex-shrink-0">
              {index < currentTaskIndex ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="size-5 bg-primary rounded-full flex items-center justify-center"
                >
                  <svg className="size-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              ) : index === currentTaskIndex ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="size-5 border-2 border-primary border-t-transparent rounded-full"
                />
              ) : (
                <div className="size-5 border-2 border-border rounded-full" />
              )}
            </div>

            {/* Task icon and title */}
            <div className="flex items-center gap-2">
              {task.icon}
              <span className="text-sm font-medium">{task.title}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}



export function ThirdBentoAnimation({
  startAnimationDelay = 0,
  once = false,
}: {
  data?: number[];
  toolTipValues?: number[];
  color?: string;
  startAnimationDelay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative flex size-full items-center justify-center h-[300px] pt-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="flex items-center justify-center w-full h-full">
        <AITaskExecution
          shouldAnimate={shouldAnimate}
          startAnimationDelay={startAnimationDelay}
        />
      </div>
    </div>
  );
}