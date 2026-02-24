import { Badge } from "@/components/ui/badge";
import SectionWrapper from "./SectionWrapper";
import face3d from "@/assets/face-3d.jpg";

const steps = ["Microbiome", "Barrier", "Hydration", "Elasticity", "Sensitivity"];

const SkinStorySection = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary border-0">
            Diagnostics
          </Badge>
          <h2 className="mb-5 text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[40px] lg:leading-[48px]">
            Your Skin Story Revealed
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Our proprietary 3D facial mapping technology analyzes over 200 skin parameters across five key dimensions.
            Every contour, pore, and zone is cataloged to build a complete biological portrait.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            The result? A treatment protocol uniquely calibrated to your biology — not a generic skin type.
          </p>
        </div>

        {/* Right — 3D Face Card */}
        <div className="relative overflow-hidden rounded-3xl bg-primary p-6">
          <img
            src={face3d}
            alt="3D skin analysis visualization"
            className="mx-auto w-full max-w-sm rounded-2xl object-cover"
            loading="lazy"
          />
          {/* Vertical Step Navigation */}
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3">
            {steps.map((step, i) => (
              <button
                key={step}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                  i === 0
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary-foreground/10 text-primary-foreground/50 hover:bg-primary-foreground/20"
                }`}
                title={step}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          {/* Bottom Panel */}
          <div className="mt-4 rounded-xl bg-secondary/40 p-3">
            <div className="flex items-center justify-between text-xs text-primary-foreground/60">
              <span>Zone A — Forehead</span>
              <span className="font-medium text-accent">Analyzing...</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkinStorySection;
