"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface VerticalMarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function VerticalMarquee({
  children,
  reverse = false,
  className,
  speed = 30,
}: VerticalMarqueeProps) {
  return (
    <div className={cn("relative flex flex-col overflow-hidden", className)}>
      <div
        className="flex flex-col"
        style={{
          animation: `marquee-vertical ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex flex-col"
        style={{
          animation: `marquee-vertical ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Sensitive Skin",
  "Oily & Acne-Prone",
  "Dry & Dehydrated",
  "Mature & Aging",
  "Combination Skin",
  "Hyperpigmentation",
  "Barrier Repair",
];

const CTASection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-primary px-6 py-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-3xl border border-primary-foreground/10 bg-secondary/40 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
                Start Your Skin Journey Today
              </h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-primary-foreground/60 md:text-lg">
                Discover biology-driven skincare designed to decode your unique
                skin profile. Take our free skin test and get a personalized
                routine in minutes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start justify-center">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent/90"
                >
                  Take the Skin Test
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary-foreground/10"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Marquee */}
            <div className="hidden w-64 lg:block">
              <div ref={marqueeRef} className="relative h-[340px] overflow-hidden">
                <VerticalMarquee speed={25}>
                  {marqueeItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="marquee-item py-3 text-center text-2xl font-semibold text-primary-foreground/80"
                    >
                      {item}
                    </div>
                  ))}
                </VerticalMarquee>

                {/* Top vignette */}
                <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-secondary/40 to-transparent" />
                {/* Bottom vignette */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-secondary/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
