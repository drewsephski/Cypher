'use client';

import { cn } from '@/lib/utils';
import { cubicBezier, HTMLMotionProps, motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export interface OrbitingCirclesProps extends HTMLMotionProps<'div'> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  index?: number;
  startAnimationDelay?: number;
  once?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  index = 0,
  startAnimationDelay = 0,
  once = false,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

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
    <>
      {path && (
        <motion.div ref={ref}>
          {shouldAnimate && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{
                duration: 1,
                ease: [0.23, 1, 0.32, 1],
                delay: index * 0.15 + startAnimationDelay,
                type: 'spring',
                stiffness: 100,
                damping: 20,
                mass: 1.2,
              }}
              className="pointer-events-none absolute inset-0"
              style={{
                width: radius * 2,
                height: radius * 2,
                left: `calc(50% - ${radius}px)`,
                top: `calc(50% - ${radius}px)`,
              }}
            >
              <div
                className={cn(
                  'size-full rounded-full',
                  'border border-neutral-700/50 dark:border-neutral-700/50',
                  'bg-gradient-to-b from-neutral-800/20 via-transparent to-transparent',
                  'shadow-[0_0_20px_rgba(0,0,0,0.3)]',
                  className,
                )}
              />
            </motion.div>
          )}
        </motion.div>
      )}
      {shouldAnimate &&
        React.Children.map(children, (child, childIndex) => {
          const angle = (360 / React.Children.count(children)) * childIndex;
          return (
            <div
              style={
                {
                  '--duration': calculatedDuration,
                  '--radius': radius * 0.98,
                  '--angle': angle,
                  '--icon-size': `${iconSize}px`,
                } as React.CSSProperties
              }
              className={cn(
                'absolute flex size-[var(--icon-size)] z-20 p-1 transform-gpu animate-orbit items-center justify-center rounded-full',
                { '[animation-direction:reverse]': reverse },
              )}
            >
              <motion.div
                key={`orbit-child-${childIndex}`}
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + childIndex * 0.1 + startAnimationDelay,
                  ease: cubicBezier(0.34, 1.56, 0.64, 1),
                  type: 'spring',
                  stiffness: 150,
                  damping: 15,
                  mass: 0.8,
                }}
                {...props}
              >
                {child}
              </motion.div>
            </div>
          );
        })}
    </>
  );
}