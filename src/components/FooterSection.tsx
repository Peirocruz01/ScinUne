import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const FooterSection = () => {
  return (
    <footer className="bg-primary px-6 py-16 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-accent" />
              <span className="text-lg font-semibold text-primary-foreground">ScinUne</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/50">
              Biology-driven skincare designed to decode your skin and treat it with precision.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Shop</h4>
            <ul className="space-y-2.5">
              {["Bioflora Cleanser", "Barrier Restore Serum", "Hydra-Lock Essence", "Shield SPF 50+"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Learn</h4>
            <ul className="space-y-2.5">
              {["Our Science", "Skin Test", "Journal", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Stay Updated</h4>
            <p className="mb-3 text-sm text-primary-foreground/50">Get the latest on skin science and new releases.</p>
            <div className="flex gap-2">
              <Input
                placeholder="your@email.com"
                className="rounded-full border-primary-foreground/20 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/30"
              />
              <Button className="rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-primary-foreground/40">© 2026 ScinUne. All rights reserved.</p>
          <div className="flex gap-6">
            {["Instagram", "Twitter", "TikTok"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
