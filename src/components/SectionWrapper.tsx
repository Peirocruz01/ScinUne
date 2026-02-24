import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

const SectionWrapper = ({ children, className, dark, id }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "px-6 md:px-8 lg:px-10 py-16 md:py-20 lg:py-24",
        dark && "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
};

export default SectionWrapper;
