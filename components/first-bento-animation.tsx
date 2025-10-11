/* eslint-disable @next/next/no-img-element */
'use client';

import {
  Reasoning,
  ReasoningContent,
} from '@/components/ai-elements/reasoning';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Cpu } from 'lucide-react';

export function ReasoningBasic() {
  const reasoningText = `Perfect! I'll create a beautiful React component for a product card with hover effects, responsive design, and clean styling. The component will include image display, title, description, pricing, and action buttons with smooth animations.`;

  return (
    <Reasoning>
      <ReasoningContent className="">
        {reasoningText}
      </ReasoningContent>
    </Reasoning>
  );
}

export function FirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
        setTimeout(() => {
          setShowResponse(true);
        }, 1500);
      }, 1000);
    } else {
      setShouldAnimate(false);
      setShowResponse(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full p-4 flex flex-col items-center justify-center gap-5"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <motion.div
        className="max-w-md mx-auto w-full flex flex-col gap-2"
        animate={{
          y: shouldAnimate ? -75 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="flex items-end justify-end gap-3">
          <motion.div
            className="max-w-[280px] bg-slate-800 text-white p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:bg-secondary dark:text-white"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          >
            <p className="text-sm">
              I need a React component for displaying product cards. Can you create
              one with hover effects, responsive design, and modern styling?
            </p>
          </motion.div>
          <div className="flex items-center bg-slate-100 rounded-full w-fit border border-slate-300 flex-shrink-0 dark:bg-background dark:border-border">
            <div className="size-8 rounded-full flex-shrink-0 bg-primary/10 flex items-center justify-center">
              <MessageCircle className="size-4 text-primary" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="flex items-center bg-slate-100 rounded-full size-10 flex-shrink-0 justify-center shadow-[0_0_10px_rgba(0,0,0,0.1)] border border-slate-300 dark:bg-background dark:shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:border-border">
            <Cpu className="size-4 text-primary" />
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!showResponse ? (
                <motion.div
                  key="dots"
                  className="absolute left-0 top-0 bg-slate-100 p-4 rounded-2xl border border-slate-300 dark:bg-background dark:border-border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeOut',
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-2 h-2 bg-slate-600 rounded-full dark:bg-primary/50"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="response"
                  layout
                  className="absolute left-0 top-0 md:min-w-[300px] min-w-[220px] p-4 bg-slate-100 border border-slate-300 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:bg-accent dark:border-border dark:shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  <ReasoningBasic />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}