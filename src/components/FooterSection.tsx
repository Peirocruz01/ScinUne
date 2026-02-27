import { useRef } from "react";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/hooks/useScrollAnimation";

const footerColumns = {
  shop: [
    "Bioflora Cleanser",
    "Barrier Restore Serum",
    "Hydra-Lock Essence",
    "Shield SPF 50+",
  ],
  learn: ["Our Science", "Skin Test", "Journal", "FAQ"],
  social: ["Instagram", "Twitter", "TikTok"],
};

const FooterSection = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.15 });

  return (
    <footer ref={footerRef} className="bg-primary px-6 py-16 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: [0.25, 0.4, 0.25, 1] as const,
            }}
          >
            <motion.div
              className="mb-4 flex items-center gap-2"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Leaf className="h-5 w-5 text-accent" />
              <span className="text-lg font-semibold text-primary-foreground">
                ScinUne
              </span>
            </motion.div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/50">
              Biology-driven skincare designed to decode your skin and treat it
              with precision.
            </p>
          </motion.div>

          {/* Shop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.4, 0.25, 1] as const,
            }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {footerColumns.shop.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + idx * 0.06,
                    ease: [0.25, 0.4, 0.25, 1] as const,
                  }}
                >
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Learn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1] as const,
            }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Learn
            </h4>
            <ul className="space-y-2.5">
              {footerColumns.learn.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + idx * 0.06,
                    ease: [0.25, 0.4, 0.25, 1] as const,
                  }}
                >
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1] as const,
            }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Stay Updated
            </h4>
            <p className="mb-3 text-sm text-primary-foreground/50">
              Get the latest on skin science and new releases.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="your@email.com"
                className="rounded-full border-primary-foreground/20 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/30"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ transformOrigin: "left" }}
        >
          <Separator className="my-10 bg-primary-foreground/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p className="text-xs text-primary-foreground/40">
            © 2026 ScinUne. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerColumns.social.map((social, idx) => (
              <motion.a
                key={social}
                href="#"
                className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + idx * 0.08 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
