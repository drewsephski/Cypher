/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Sparkles, Zap } from "lucide-react";

function StreamedResponse({ text, start }: { text: string; start: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isCancelled = useRef(false);

  useEffect(() => {
    if (!start) return;

    setDisplayedText("");
    isCancelled.current = false;

    const chars = Array.from(text);
    let i = 0;

    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (isCancelled.current) return;

        if (i < chars.length) {
          setDisplayedText((prev) => prev + (chars[i] ?? ""));
          i++;
        } else {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
        }
      }, 20);
    }, 60);

    return () => {
      isCancelled.current = true;
      clearInterval(intervalRef.current!);
      clearTimeout(startDelay);
    };
  }, [text, start]);

  return (
    <div className="text-[13px] text-neutral-200 leading-relaxed whitespace-pre-wrap font-normal">
      {displayedText}
      {start && displayedText.length < text.length && (
        <motion.span
          className="inline-block w-0.5 h-4 bg-neutral-300 ml-0.5 rounded-full"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

export default function FirstBentoAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [showThinking, setShowThinking] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [startStream, setStartStream] = useState(false);

  const responseText =
    " - Building a minimal product card with refined hover states and dark aesthetics. Includes image, title, pricing, and action button with micro-interactions.";

  useEffect(() => {
    if (!isInView) return;

    setShowThinking(false);
    setShowResponse(false);
    setStartStream(false);

    const t1 = setTimeout(() => setShowThinking(true), 500);
    const t2 = setTimeout(() => {
      setShowThinking(false);
      setShowResponse(true);
      setStartStream(true);
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[360px] flex items-center justify-center py-10 px-4"
    >
      <motion.div
        className="w-full max-w-xl mx-auto flex flex-col gap-4"
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 16,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* User Message */}
        <motion.div
          className="flex items-end justify-end gap-3 group"
          initial={{ opacity: 0, x: 16, scale: 0.95 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            x: isInView ? 0 : 16,
            scale: isInView ? 1 : 0.95 
          }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div 
            className="max-w-[300px] px-4 py-3 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-neutral-800/70 rounded-2xl shadow-lg shadow-neutral-900/20 backdrop-blur-sm transition-all duration-300 group-hover:border-neutral-700/80 group-hover:shadow-xl group-hover:shadow-neutral-900/30"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-[13.5px] text-neutral-100 leading-relaxed font-normal tracking-wide">
              Can you create a product card component with subtle hover effects and dark design?
            </p>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center size-8 rounded-full bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-neutral-700/60 shadow-md shadow-neutral-900/40 group-hover:border-neutral-600/70 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className="size-4 text-primary" strokeWidth={1.8} />
          </motion.div>
        </motion.div>

        {/* AI Response */}
        <motion.div 
          className="flex items-start gap-3 group"
          initial={{ opacity: 0, x: -16, scale: 0.95 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            x: isInView ? 0 : -16,
            scale: isInView ? 1 : 0.95 
          }}
          transition={{ duration: 0.4, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div 
            className="flex items-center justify-center size-8 rounded-full bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-neutral-700/60 shadow-md shadow-neutral-900/40 relative overflow-hidden group-hover:border-neutral-600/70 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neutral-600/20 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Sparkles className="size-4 text-primary relative z-10" strokeWidth={1.8} />
          </motion.div>

          <div className="relative flex-1 min-w-0 max-w-[340px]">
            <AnimatePresence mode="wait" initial={false}>
              {showThinking && (
                <motion.div
                  key="thinking"
                  className="px-4 py-3 rounded-2xl border border-neutral-800/70 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm shadow-lg shadow-neutral-900/20"
                  initial={{ opacity: 0, scale: 0.96, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="flex items-center gap-2.5 text-neutral-400">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 bg-neutral-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 1, 0.4] 
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-normal tracking-wide">Thinking</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="size-3 text-primary" strokeWidth={2} />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {showResponse && (
                <motion.div
                  key="response"
                  className="px-4 py-3 rounded-2xl border border-neutral-800/70 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm shadow-lg shadow-neutral-900/20 transition-all duration-300 group-hover:border-neutral-700/80 group-hover:shadow-xl group-hover:shadow-neutral-900/30"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ scale: 1.01 }}
                >
                  <StreamedResponse text={responseText} start={startStream} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced ambient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neutral-600/10 blur-[120px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
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
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

    </div>
  );
}