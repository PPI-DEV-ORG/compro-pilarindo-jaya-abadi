import { useState } from "react";
import { Star, Eye, ShoppingCart, Heart } from "lucide-react";
import { cn } from "../../lib/utils";
import type { ProductItem } from "../../types/global";

interface ProductCardProps {
  product: ProductItem;
  onQuickView: (product: ProductItem) => void;
  index?: number;
}

export function ProductCard({
  product,
  onQuickView,
  index = 0,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const availabilityConfig = {
    "in-stock": { label: "In Stock", className: "badge-in-stock" },
    "low-stock": {
      label: `Only ${product.stock} left`,
      className: "badge-low-stock",
    },
    "out-of-stock": { label: "Out of Stock", className: "badge-out-of-stock" },
  } as const;

  const availabilityKey = (product?.availability?.status ??
    "out-of-stock") as keyof typeof availabilityConfig;

  return (
    <article
      className={cn(
        "group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.tags?.flatMap((item) => item.name).includes("Featured") && (
          <span className="badge-featured">Featured</span>
        )}
        {product.tags?.flatMap((item) => item.name).includes("New") && (
          <span className="badge-new">New</span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
          loading="lazy"
        />

        {/* Quick Actions Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-sky-500/30 flex items-center justify-center gap-3 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <button
            onClick={() => onQuickView(product)}
            className="shadow-lg bg-white flex flex-row gap-4 items-center px-3 py-2 rounded-xl hover:opacity-80"
          >
            <Eye className="h-4 w-4 mr-1" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {product.category[0].name}
          </span>
          <span className="text-xs font-semibold text-navy">
            {product.brand.name}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-display font-semibold text-foreground mb-1 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Model */}
        <p className="text-sm text-muted-foreground mb-3">
          Model: {product.model}
        </p>
        {/* Price & Availability */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">
              {product?.price}
            </span>
          </div>
          <span className={availabilityConfig[availabilityKey].className}>
            {availabilityConfig[availabilityKey].label}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 w-full">
          <button
            onClick={() => onQuickView(product)}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 hover:shadow-md duration-300 transition-all w-full font-bold"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
