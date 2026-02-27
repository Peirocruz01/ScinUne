import { useEffect, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "./SectionWrapper";
import serumBottle from "@/assets/serum-bottle.jpg";
import productLineup from "@/assets/product-lineup.jpg";
import { staggerContainer, fadeInUp } from "@/hooks/useScrollAnimation";

const products = [
  {
    step: "Step 1",
    title: "Bioflora Cleanser",
    description:
      "Microbiome-safe cleansing that respects your skin's natural defense layer. Zero stripping, full clarity.",
    tags: ["Ceramides", "Probiotics"],
    image: serumBottle,
  },
  {
    step: "Step 2",
    title: "Barrier Restore Serum",
    description:
      "Concentrated peptide complex that rebuilds and fortifies the skin barrier from within.",
    tags: ["Peptides", "Niacinamide"],
    image: productLineup,
  },
  {
    step: "Step 3",
    title: "Hydra-Lock Essence",
    description:
      "Multi-weight hyaluronic blend that locks moisture across epidermal layers for 72-hour hydration.",
    tags: ["Hyaluronic Acid", "Squalane"],
    image: serumBottle,
  },
  {
    step: "Step 4",
    title: "Shield SPF 50+",
    description:
      "Invisible mineral shield with antioxidant fusion. Protects against UV, blue light, and pollution.",
    tags: ["Zinc Oxide", "Vitamin E"],
    image: productLineup,
  },
];

const TimelineCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Alternate: even indices slide from left, odd from right
  const fromLeft = index % 2 === 0;

  return (
    <div ref={cardRef} className="flex justify-start pt-10 md:pt-20 md:gap-10">
      {/* Left: sticky step label */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-10 w-10 absolute left-3 md:left-3 rounded-full bg-card border border-border flex items-center justify-center"
        >
          <div className="h-4 w-4 rounded-full bg-primary/30 border border-primary/50" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-foreground/30"
        >
          {product.step}
        </motion.h3>
      </div>

      {/* Right: content */}
      <motion.div
        initial={{
          opacity: 0,
          x: fromLeft ? -40 : 40,
          y: 20,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: fromLeft ? -40 : 40, y: 20 }
        }
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative pl-20 pr-4 md:pl-4 w-full"
      >
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-foreground/30">
          {product.step}
        </h3>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }
            }
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="aspect-[16/9] overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="p-6"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
              {product.step}
            </p>
            <h4 className="mb-2 text-lg font-semibold text-foreground">
              {product.title}
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, tagIdx) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: 0.45 + tagIdx * 0.08,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-muted text-xs font-normal text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const EcosystemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      id="products"
      ref={containerRef}
      className="px-6 md:px-8 lg:px-10 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          className="mb-12 max-w-lg"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary border-0">
              The System
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[40px] lg:leading-[48px]"
          >
            Four Steps. One Ecosystem.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-3 text-base text-muted-foreground"
          >
            Each product is designed to work in concert — amplifying the effects
            of every other step.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative pb-20">
          {products.map((product, index) => (
            <TimelineCard key={product.title} product={product} index={index} />
          ))}

          {/* Animated timeline line */}
          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-border to-transparent"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-primary via-accent to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
