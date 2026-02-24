import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ProductCard from "./ProductCard";
import serumBottle from "@/assets/serum-bottle.jpg";
import productLineup from "@/assets/product-lineup.jpg";

const products = [
  {
    image: serumBottle,
    step: "Step 1",
    title: "Bioflora Cleanser",
    description: "Microbiome-safe cleansing that respects your skin's natural defense layer. Zero stripping, full clarity.",
    tags: ["Ceramides", "Probiotics"],
  },
  {
    image: productLineup,
    step: "Step 2",
    title: "Barrier Restore Serum",
    description: "Concentrated peptide complex that rebuilds and fortifies the skin barrier from within.",
    tags: ["Peptides", "Niacinamide"],
  },
  {
    image: serumBottle,
    step: "Step 3",
    title: "Hydra-Lock Essence",
    description: "Multi-weight hyaluronic blend that locks moisture across epidermal layers for 72-hour hydration.",
    tags: ["Hyaluronic Acid", "Squalane"],
  },
  {
    image: productLineup,
    step: "Step 4",
    title: "Shield SPF 50+",
    description: "Invisible mineral shield with antioxidant fusion. Protects against UV, blue light, and pollution.",
    tags: ["Zinc Oxide", "Vitamin E"],
  },
];

const EcosystemSection = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <SectionWrapper id="products">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary border-0">
            The System
          </Badge>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[40px] lg:leading-[48px]">
            Four Steps. One Ecosystem.
          </h2>
          <p className="mt-3 max-w-md text-base text-muted-foreground">
            Each product is designed to work in concert — amplifying the effects of every other step.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border"
            onClick={() => setScrollIndex(Math.max(0, scrollIndex - 1))}
            disabled={scrollIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border"
            onClick={() => setScrollIndex(Math.min(products.length - 1, scrollIndex + 1))}
            disabled={scrollIndex === products.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === scrollIndex ? "w-6 bg-primary" : "w-2 bg-border"
            }`}
            onClick={() => setScrollIndex(i)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EcosystemSection;
