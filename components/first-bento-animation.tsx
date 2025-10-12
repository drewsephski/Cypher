/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";

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
      }, 24);
    }, 80);

    return () => {
      isCancelled.current = true;
      clearInterval(intervalRef.current!);
      clearTimeout(startDelay);
    };
  }, [text, start]);

  return (
    <div className="text-[13px] text-neutral-300 leading-relaxed whitespace-pre-wrap font-light">
      {displayedText}
      {start && displayedText.length < text.length && (
        <motion.span
          className="inline-block w-0.5 h-3.5 bg-neutral-400 ml-0.5"
          animate={{ opacity: [1, 0.3] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
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
    "Building a minimal product card with refined hover states and dark aesthetics. Includes image, title, pricing, and action button with micro-interactions.";

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
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[320px] flex items-center justify-center py-8"
    >
      <motion.div
        className="w-full max-w-lg mx-auto flex flex-col gap-3"
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 12,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* User Message */}
        <motion.div
          className="flex items-end justify-end gap-2.5 group"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 12 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <div className="max-w-[280px] px-3.5 py-2.5 bg-neutral-900/50 border border-neutral-800/60 rounded-xl transition-colors duration-200 group-hover:border-neutral-700/60">
            <p className="text-[13px] text-neutral-200 leading-relaxed font-light">
              Can you create a product card component with subtle hover effects and dark design?
            </p>
          </div>
          <div className="flex items-center justify-center size-7 rounded-full bg-neutral-900/60 border border-neutral-800/50">
            <MessageCircle className="size-3.5 text-neutral-400" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* AI Response */}
        <div className="flex items-start gap-2.5 group">
          <div className="flex items-center justify-center size-7 rounded-full bg-neutral-900/60 border border-neutral-800/50">
            <Sparkles className="size-3.5 text-neutral-400" strokeWidth={1.5} />
          </div>

          <div className="relative flex-1 min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              {showThinking && (
                <motion.div
                  key="thinking"
                  className="px-3.5 py-2.5 rounded-xl border border-neutral-800/60 bg-neutral-900/40"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-2 text-neutral-500">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 bg-neutral-500 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-light">Thinking</span>
                  </div>
                </motion.div>
              )}

              {showResponse && (
                <motion.div
                  key="response"
                  className="px-3.5 py-2.5 rounded-xl border border-neutral-800/60 bg-neutral-900/40 transition-colors duration-200 group-hover:border-neutral-700/60"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <StreamedResponse text={responseText} start={startStream} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Subtle ambient effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-neutral-700/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}