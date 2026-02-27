import { useRef } from "react";
import { useInView, Variant } from "framer-motion";

type AnimationDirection = "left" | "right" | "up" | "down" | "none";

interface ScrollAnimationOptions {
  direction?: AnimationDirection;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  scale?: number;
  rotate?: number;
  blur?: number;
}

/**
 * A reusable hook that generates scroll-triggered animation props for framer-motion.
 * Supports: fade-in from left/right/up/down, scale, rotate, blur dissolve.
 */
export function useScrollAnimation({
  direction = "up",
  distance = 60,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  scale,
  rotate,
  blur,
}: ScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const getInitialTransform = () => {
    const initial: Record<string, number | string> = { opacity: 0 };

    switch (direction) {
      case "left":
        initial.x = -distance;
        break;
      case "right":
        initial.x = distance;
        break;
      case "up":
        initial.y = distance;
        break;
      case "down":
        initial.y = -distance;
        break;
      case "none":
        break;
    }

    if (scale !== undefined) initial.scale = scale;
    if (rotate !== undefined) initial.rotate = rotate;
    if (blur !== undefined) initial.filter = `blur(${blur}px)`;

    return initial;
  };

  const getAnimateTransform = () => {
    const animate: Record<string, number | string> = { opacity: 1 };

    if (direction === "left" || direction === "right") animate.x = 0;
    if (direction === "up" || direction === "down") animate.y = 0;
    if (scale !== undefined) animate.scale = 1;
    if (rotate !== undefined) animate.rotate = 0;
    if (blur !== undefined) animate.filter = "blur(0px)";

    return animate;
  };

  return {
    ref,
    initial: getInitialTransform(),
    animate: isInView ? getAnimateTransform() : getInitialTransform(),
    transition: {
      duration,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  };
}

/**
 * Pre-configured animation variants for staggered children animations.
 */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp: Record<string, Variant> = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const fadeInLeft: Record<string, Variant> = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const fadeInRight: Record<string, Variant> = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const dissolve: Record<string, Variant> = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 0.95 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const scaleIn: Record<string, Variant> = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const morphIn: Record<string, Variant> = {
  hidden: { opacity: 0, scale: 0.9, borderRadius: "50%" },
  show: {
    opacity: 1,
    scale: 1,
    borderRadius: "1rem",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};
