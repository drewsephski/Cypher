/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Cpu } from "lucide-react";


function StreamedResponse({ text, start }: { text: string; start: boolean }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;

    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20); // typing speed

    return () => clearInterval(interval);
  }, [text, start]);

  return (
    <div className="text-sm text-slate-700 dark:text-slate-300">
      {displayedText}
      {start && displayedText.length < text.length && (
        <motion.span
          className="inline-block w-1 h-4 bg-blue-500 ml-0.5"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </div>
  );
}

export default function FirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [showThinking, setShowThinking] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [startStream, setStartStream] = useState(false);

  const responseText = `Perfect! I'll create a beautiful React component for a product card with hover effects, responsive design, and clean styling. The component will include image display, title, description, pricing, and action buttons with smooth animations`;

  useEffect(() => {
    if (isInView) {
      // Reset states every time it comes into view
      setShouldAnimate(false);
      setShowThinking(false);
      setShowResponse(false);
      setStartStream(false);

      const animateTimer = setTimeout(() => setShouldAnimate(true), 500);

      const thinkingTimer = setTimeout(() => setShowThinking(true), 1200);

      const responseTimer = setTimeout(() => {
        setShowThinking(false);
        setShowResponse(true);
        setStartStream(true);
      }, 3500); // after “Thinking...” for ~2s

      return () => {
        clearTimeout(animateTimer);
        clearTimeout(thinkingTimer);
        clearTimeout(responseTimer);
      };
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full min-h-[400px] p-4 flex flex-col items-center justify-center gap-5 relative"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent z-20 dark:from-slate-950"></div>

      <motion.div
        className="max-w-md mx-auto w-full flex flex-col gap-2"
        animate={{
          y: shouldAnimate ? -75 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
      >
        {/* User Message */}
        <div className="flex items-end justify-end gap-3">
          <motion.div
            className="max-w-[280px] bg-slate-800 text-white p-4 rounded-2xl ml-auto shadow-lg dark:bg-secondary dark:text-white"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 20,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <p className="text-sm">
              I need a React component for displaying product cards. Can you
              create one with hover effects, responsive design, and modern
              styling?
            </p>
          </motion.div>
          <div className="flex items-center bg-slate-100 rounded-full w-fit border border-slate-300 flex-shrink-0 dark:bg-slate-900 dark:border-slate-700">
            <div className="size-8 rounded-full flex-shrink-0 bg-blue-500/10 flex items-center justify-center">
              <MessageCircle className="size-4 text-blue-500" />
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start gap-2">
          <div className="flex items-center bg-slate-100 rounded-full size-10 flex-shrink-0 justify-center shadow-md border border-slate-300 dark:bg-slate-900 dark:shadow-lg dark:border-slate-700">
            <Cpu className="size-4 text-blue-500" />
          </div>

          <div className="relative flex-1 min-h-[60px]">
            <AnimatePresence mode="wait">
              {showThinking && (
                <motion.div
                  key="thinking"
                  className="bg-slate-100 p-4 rounded-2xl border border-slate-300 dark:bg-slate-900 dark:border-slate-700 w-fit"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((index) => (
                        <motion.div
                          key={index}
                          className="w-2 h-2 bg-slate-600 rounded-full dark:bg-blue-400"
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: index * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
                      Thinking...
                    </span>
                  </div>
                </motion.div>
              )}

              {showResponse && (
                <motion.div
                  key="response"
                  className="md:min-w-[300px] min-w-[220px] p-4 bg-slate-100 border border-slate-300 rounded-xl shadow-lg dark:bg-slate-900 dark:border-slate-700"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <StreamedResponse text={responseText} start={startStream} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
