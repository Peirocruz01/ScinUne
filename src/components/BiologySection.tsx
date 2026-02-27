import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import skinAnalysis from "@/assets/skin-analysis.jpg";
import skincareApp from "@/assets/skincare-application.jpg";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  dissolve,
} from "@/hooks/useScrollAnimation";

const cards = [
  {
    id: "signals",
    title: "Capture the hidden signals",
    description:
      "Our diagnostic maps your skin's microbiome, barrier function, and hydration patterns at a cellular level.",
    image: skinAnalysis,
  },
  {
    id: "data",
    title: "Decode your data",
    description:
      "AI-analyzed results reveal the precise imbalances driving your skin concerns.",
    image: null,
    metrics: [
      { label: "Barrier Strength", value: 82, color: "bg-accent" },
      { label: "Hydration Index", value: 78, color: "bg-accent" },
      { label: "Elasticity", value: 91, color: "bg-accent" },
      { label: "Sensitivity", value: 34, color: "bg-destructive" },
    ],
  },
  {
    id: "strategy",
    title: "Craft a responsive strategy",
    description:
      "Your routine adapts in real-time as your skin evolves with the seasons, stress, and environment.",
    image: skincareApp,
  },
  {
    id: "ingredients",
    title: "Bioactive ingredient matching",
    description:
      "Every formula is built from clinically validated botanicals, matched to your specific skin profile for maximum efficacy.",
    image: skinAnalysis,
  },
  {
    id: "tracking",
    title: "Track your skin's evolution",
    description:
      "Monitor real progress over weeks and months with visual skin mapping that reveals improvements invisible to the naked eye.",
    image: skincareApp,
  },
];

const BiologySection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const carouselInView = useInView(carouselRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
      setScrollSnaps(carouselApi.scrollSnapList());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <SectionWrapper dark id="science">
      {/* Header with nav arrows */}
      <motion.div
        ref={headerRef}
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? "show" : "hidden"}
        className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
      >
        <motion.div variants={fadeInLeft}>
          <Badge className="mb-4 rounded-full bg-secondary px-4 py-1 text-xs font-medium text-primary-foreground border-0">
            Our Approach
          </Badge>
          <h2 className="text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl lg:text-[40px] lg:leading-[48px]">
            From Biology to a Better Routine
          </h2>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          className="hidden shrink-0 gap-2 md:flex"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 disabled:pointer-events-auto"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 disabled:pointer-events-auto"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        ref={carouselRef}
        initial={{ opacity: 0, y: 40 }}
        animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="w-full"
      >
        <Carousel
          setApi={setCarouselApi}
          opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {cards.map((card, index) => (
              <CarouselItem
                key={card.id}
                className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={
                    carouselInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 30, scale: 0.95 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-secondary/50 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  {card.image ? (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : card.metrics ? (
                    <div className="p-5 pb-0">
                      <div className="rounded-xl bg-primary/50 p-4">
                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary-foreground/50">
                          Skin Profile
                        </p>
                        {card.metrics.map((metric, mIdx) => (
                          <div key={metric.label} className="mb-3">
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-xs text-primary-foreground/70">
                                {metric.label}
                              </span>
                              <span className="text-xs font-semibold text-primary-foreground">
                                {metric.value}%
                              </span>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-foreground/10">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={
                                  carouselInView
                                    ? { width: `${metric.value}%` }
                                    : { width: 0 }
                                }
                                transition={{
                                  duration: 1.2,
                                  delay: 0.3 + mIdx * 0.15,
                                  ease: [0.25, 0.4, 0.25, 1],
                                }}
                                className={`h-full rounded-full ${metric.color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-primary-foreground">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-primary-foreground/60">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-accent" />
                      <span className="text-xs text-primary-foreground/50">
                        Included in Bioflora
                      </span>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide
                  ? "w-6 bg-primary-foreground"
                  : "w-2 bg-primary-foreground/30"
              }`}
              onClick={() => carouselApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default BiologySection;
