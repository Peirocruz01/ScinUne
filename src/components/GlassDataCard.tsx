import { cn } from "@/lib/utils";

interface GlassDataCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassDataCard = ({ children, className }: GlassDataCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-4 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassDataCard;
