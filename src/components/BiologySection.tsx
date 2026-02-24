import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import skinAnalysis from "@/assets/skin-analysis.jpg";
import skincareApp from "@/assets/skincare-application.jpg";

const BiologySection = () => {
  return (
    <SectionWrapper dark id="science">
      <div className="text-center">
        <Badge className="mb-4 rounded-full bg-secondary px-4 py-1 text-xs font-medium text-primary-foreground border-0">
          Our Approach
        </Badge>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl lg:text-[40px] lg:leading-[48px]">
          From Biology to a Better Routine
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="group overflow-hidden rounded-2xl bg-secondary/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={skinAnalysis}
              alt="Skin analysis close-up"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <h3 className="mb-2 text-lg font-semibold text-primary-foreground">Capture the hidden signals</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Our diagnostic maps your skin's microbiome, barrier function, and hydration patterns at a cellular level.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs text-primary-foreground/50">Included in Bioflora</span>
            </div>
          </div>
        </div>

        {/* Card 2 — Data UI Mock */}
        <div className="group rounded-2xl bg-secondary/50 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 rounded-xl bg-primary/50 p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary-foreground/50">Skin Profile</p>
            {[
              { label: "Barrier Strength", value: 82, color: "bg-accent" },
              { label: "Hydration Index", value: 78, color: "bg-accent" },
              { label: "Elasticity", value: 91, color: "bg-accent" },
              { label: "Sensitivity", value: 34, color: "bg-destructive" },
            ].map((metric) => (
              <div key={metric.label} className="mb-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs text-primary-foreground/70">{metric.label}</span>
                  <span className="text-xs font-semibold text-primary-foreground">{metric.value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-foreground/10">
                  <div className={`h-full rounded-full ${metric.color}`} style={{ width: `${metric.value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-primary-foreground">Decode your data</h3>
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            AI-analyzed results reveal the precise imbalances driving your skin concerns.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs text-primary-foreground/50">Included in Bioflora</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group overflow-hidden rounded-2xl bg-secondary/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={skincareApp}
              alt="Skincare application"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <h3 className="mb-2 text-lg font-semibold text-primary-foreground">Craft a responsive strategy</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Your routine adapts in real-time as your skin evolves with the seasons, stress, and environment.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs text-primary-foreground/50">Included in Bioflora</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BiologySection;
