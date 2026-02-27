import { ArrowRight, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroFace from "@/assets/hero-face.jpg";
import serumBottle from "@/assets/serum-bottle.jpg";
import skinAnalysis from "@/assets/skin-analysis.jpg";
import skincareApp from "@/assets/skincare-application.jpg";
import productLineup from "@/assets/product-lineup.jpg";
import face3d from "@/assets/face-3d.jpg";

const programs = [
  {
    image: heroFace,
    category: "DIAGNOSTICS",
    title: "Skin Analysis",
  },
  {
    image: serumBottle,
    category: "TREATMENT",
    title: "Custom Serums",
  },
  {
    image: skinAnalysis,
    category: "SCIENCE",
    title: "Bioflora Mapping",
  },
  {
    image: skincareApp,
    category: "ROUTINE",
    title: "Daily Protocol",
  },
  {
    image: productLineup,
    category: "COLLECTION",
    title: "Full Ecosystem",
  },
  {
    image: face3d,
    category: "TECHNOLOGY",
    title: "3D Skin Scan",
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-primary">
      {/* Header */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-30 mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-5 md:px-8"
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Leaf className="h-6 w-6 text-accent" />
          <span className="text-xl font-semibold text-primary-foreground">
            ScinUne
          </span>
        </motion.div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {[
            { label: "Products", hasDropdown: true },
            { label: "Science" },
            { label: "About" },
            { label: "Journal" },
          ].map((item, idx) => (
            <motion.a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="flex items-center gap-1 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            className="rounded-full border-primary-foreground/20 bg-transparent text-sm text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-8 md:px-8 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-[56px] lg:leading-[64px]"
          >
            Test better. Treat better.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg"
          >
            A personalized skincare ecosystem built from your unique biology.
            Science meets nature in every drop.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent/90">
                Discover Bioflora
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="rounded-full border-primary-foreground/20 bg-transparent text-sm text-primary-foreground hover:bg-primary-foreground/10"
              >
                Take the Skin Test
              </Button>
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-4 text-xs text-primary-foreground/40"
          >
            *No subscription required
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2">
              {[
                "https://i.pravatar.cc/150?img=1",
                "https://i.pravatar.cc/150?img=2",
                "https://i.pravatar.cc/150?img=3",
                "https://i.pravatar.cc/150?img=4",
              ].map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-primary object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-primary-foreground/60">
              Join over 10,000+ people
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Program Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-20 overflow-hidden pb-8"
      >
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-primary to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-primary to-transparent md:w-40" />

        {/* Scrolling Container */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-4 md:gap-6"
        >
          {[...programs, ...programs].map((program, index) => (
            <div
              key={index}
              className="group relative h-48 w-36 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl md:h-64 md:w-48"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <span className="text-[10px] font-semibold tracking-wider text-accent">
                  {program.category}
                </span>
                <p className="mt-0.5 text-sm font-medium text-primary-foreground">
                  {program.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
