import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  step: string;
  title: string;
  description: string;
  tags: string[];
}

const ProductCard = ({ image, step, title, description, tags }: ProductCardProps) => {
  return (
    <div className="group min-w-[280px] flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">{step}</p>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
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
  );
};

export default ProductCard;
