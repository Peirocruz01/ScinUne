import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import GlassDataCard from "./GlassDataCard";
import heroFace from "@/assets/hero-face.jpg";
import serumBottle from "@/assets/serum-bottle.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-b-3xl bg-primary px-6 pb-8 pt-6 md:px-8 lg:px-10">
      {/* Nav */}
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between pb-12">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-accent" />
          <span className="text-xl font-semibold text-primary-foreground">ScinUne</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {["Products", "Science", "About", "Journal"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {link}
            </a>
          ))}
        </div>
        <Button
          variant="outline"
          className="rounded-full border-primary-foreground/20 bg-transparent text-sm text-primary-foreground hover:bg-primary-foreground/10"
        >
          Get Started
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-[1200px] pb-16 pt-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-[56px] lg:leading-[64px]"
        >
          Test better. Treat better.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg"
        >
          A personalized skincare ecosystem built from your unique biology. Science meets nature in every drop.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Button className="rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent/90">
            Discover Bioflora <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-primary-foreground/20 bg-transparent text-sm text-primary-foreground hover:bg-primary-foreground/10"
          >
            Take the Skin Test
          </Button>
        </motion.div>
      </div>

      {/* Hero Visual Composition */}
      <div className="relative mx-auto max-w-[1000px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 overflow-hidden rounded-3xl"
        >
          <img
            src={heroFace}
            alt="Radiant skin with botanical skincare"
            className="w-full object-cover"
          />
        </motion.div>

        {/* Floating Glass Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute -left-4 top-1/4 z-20 hidden md:block animate-float"
        >
          <GlassDataCard className="w-48 p-4">
            <p className="mb-2 text-xs font-medium text-primary-foreground/80">Skin Health Score</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-primary-foreground">87</span>
              <span className="mb-1 text-xs text-accent">+12%</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-primary-foreground/10">
              <div className="h-full w-[87%] rounded-full bg-accent" />
            </div>
          </GlassDataCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute -right-4 top-1/3 z-20 hidden md:block animate-float-delayed"
        >
          <GlassDataCard className="w-44 p-4">
            <p className="mb-2 text-xs font-medium text-primary-foreground/80">Hydration</p>
            <div className="relative mx-auto h-20 w-20">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="hsla(0,0%,100%,0.15)"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="hsl(43,69%,47%)"
                  strokeWidth="3"
                  strokeDasharray="78, 100"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground">78%</span>
            </div>
          </GlassDataCard>
        </motion.div>

        {/* Floating Serum Bottle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute -bottom-6 right-12 z-20 hidden md:block animate-float"
        >
          <img
            src={serumBottle}
            alt="ScinUne serum bottle"
            className="h-40 w-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
