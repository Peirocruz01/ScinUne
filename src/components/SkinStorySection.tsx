import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import face3d from "@/assets/face-3d.jpg";
import skinAnalysis from "@/assets/skin-analysis.jpg";
import skincareApp from "@/assets/skincare-application.jpg";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/hooks/useScrollAnimation";

const features = [
  {
    id: 1,
    title: "Capture the hidden signals",
    image: face3d,
    description:
      "Our proprietary 3D facial mapping technology analyzes over 200 skin parameters across five key dimensions. Every contour, pore, and zone is cataloged to build a complete biological portrait.",
  },
  {
    id: 2,
    title: "Decode your skin data",
    image: skinAnalysis,
    description:
      "AI-analyzed results reveal the precise imbalances driving your skin concerns. The result? A treatment protocol uniquely calibrated to your biology — not a generic skin type.",
  },
  {
    id: 3,
    title: "Craft a responsive strategy",
    image: skincareApp,
    description:
      "Your routine adapts in real-time as your skin evolves with the seasons, stress, and environment. Continuous feedback ensures your protocol stays perfectly tuned.",
  },
];

const SkinStorySection = () => {
  const [activeId, setActiveId] = useState(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });

  return (
    <SectionWrapper id="about">
      {/* Header */}
      <motion.div
        ref={headerRef}
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? "show" : "hidden"}
        className="mb-10"
      >
        <motion.div variants={fadeInUp}>
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary border-0">
            Diagnostics
          </Badge>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[40px] lg:leading-[48px]"
        >
          Your Skin Story Revealed
        </motion.h2>
      </motion.div>

      <motion.div
        ref={contentRef}
        variants={staggerContainer}
        initial="hidden"
        animate={contentInView ? "show" : "hidden"}
        className="grid items-start gap-10 lg:grid-cols-2"
      >
        {/* Left — Accordion with fade-in-left */}
        <motion.div variants={fadeInLeft}>
          <Accordion
            type="single"
            value={`item-${activeId}`}
            onValueChange={(value) => {
              if (value) {
                const id = parseInt(value.replace("item-", ""));
                setActiveId(id);
                const feature = features.find((f) => f.id === id);
                if (feature) setActiveImage(feature.image);
              }
            }}
            className="w-full"
          >
            {features.map((feature) => (
              <AccordionItem
                key={feature.id}
                value={`item-${feature.id}`}
                className="border-border"
              >
                <AccordionTrigger className="cursor-pointer py-5 !no-underline transition">
                  <span className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  {/* Mobile image */}
                  <div className="lg:hidden overflow-hidden rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-2xl object-cover"
                      loading="lazy"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Right — Image (desktop) with dissolve/morph transition */}
        <motion.div
          variants={fadeInRight}
          className="hidden lg:block sticky top-24"
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt="Skin diagnostics visualization"
                className="w-full aspect-[4/3] rounded-2xl object-cover"
                loading="lazy"
                initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default SkinStorySection;
