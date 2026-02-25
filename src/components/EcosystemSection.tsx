import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SectionWrapper from "./SectionWrapper";
import serumBottle from "@/assets/serum-bottle.jpg";
import productLineup from "@/assets/product-lineup.jpg";

const products = [
  {
    image: serumBottle,
    step: "Step 1",
    title: "Bioflora Cleanser",
    description:
      "Microbiome-safe cleansing that respects your skin's natural defense layer. Zero stripping, full clarity.",
    tags: ["Ceramides", "Probiotics"],
  },
  {
    image: productLineup,
    step: "Step 2",
    title: "Barrier Restore Serum",
    description:
      "Concentrated peptide complex that rebuilds and fortifies the skin barrier from within.",
    tags: ["Peptides", "Niacinamide"],
  },
  {
    image: serumBottle,
    step: "Step 3",
    title: "Hydra-Lock Essence",
    description:
      "Multi-weight hyaluronic blend that locks moisture across epidermal layers for 72-hour hydration.",
    tags: ["Hyaluronic Acid", "Squalane"],
  },
  {
    image: productLineup,
    step: "Step 4",
    title: "Shield SPF 50+",
    description:
      "Invisible mineral shield with antioxidant fusion. Protects against UV, blue light, and pollution.",
    tags: ["Zinc Oxide", "Vitamin E"],
  },
];

const EcosystemSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <SectionWrapper id="products">
      {/* Header with nav arrows */}
      <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary border-0">
            The System
          </Badge>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[40px] lg:leading-[48px]">
            Four Steps. One Ecosystem.
          </h2>
          <p className="mt-3 max-w-md text-base text-muted-foreground">
            Each product is designed to work in concert — amplifying the effects
            of every other step.
          </p>
        </div>
        <div className="hidden shrink-0 gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border disabled:pointer-events-auto"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border disabled:pointer-events-auto"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {products.map((product) => (
              <CarouselItem
                key={product.title}
                className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <a
                  href="#"
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                        {product.step}
                      </p>
                      <h3 className="mb-2 text-lg font-semibold text-foreground line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full bg-muted text-xs font-normal text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "w-6 bg-primary" : "w-2 bg-border"
              }`}
              onClick={() => carouselApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EcosystemSection;
