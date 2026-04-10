import { useEffect, useState, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Package,
  Tag,
  Cpu,
  Calendar,
  FileText,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ExternalLink,
  ZoomIn,
} from "lucide-react";
import { cn } from "../../lib/utils";
import type { ProductItem } from "../../types/global";

interface ProductDetailDialogProps {
  product: ProductItem | null;
  onClose: () => void;
}

export function ProductDetailDialog({
  product,
  onClose,
}: ProductDetailDialogProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      setActiveImage(0);
      setIsZoomed(false);
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, [product]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight" && product)
        setActiveImage((p) => (p + 1) % product.imageUrls.length);
      if (e.key === "ArrowLeft" && product)
        setActiveImage(
          (p) => (p - 1 + product.imageUrls.length) % product.imageUrls.length,
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [product]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  const handleClose = () => {
    setIsLeaving(true);
    setIsVisible(false);
    setTimeout(() => {
      setIsLeaving(false);
      onClose();
    }, 300);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !isZoomed) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  if (!product && !isLeaving) return null;
  if (!product) return null;

  const availabilityMap = {
    "in-stock": {
      label: "In Stock",
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    "low-stock": {
      label: `Only ${product.stock} left`,
      icon: AlertTriangle,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    "out-of-stock": {
      label: "Out of Stock",
      icon: XCircle,
      color: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-200",
    },
  } as const;

  const statusKey = (product.availability?.status ??
    "out-of-stock") as keyof typeof availabilityMap;
  const status = availabilityMap[statusKey];
  const StatusIcon = status.icon;

  const isFeatured = product.tags?.some((t) => t.name === "Featured");
  const isNew = product.tags?.some((t) => t.name === "New");

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div
        className={cn(
          "relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300",
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4",
        )}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 flex-shrink-0" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 hover:scale-110 transition-all duration-200 border border-gray-100"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── Left: Image Gallery ── */}
            <div className="bg-gray-50 p-6 flex flex-col gap-4">
              {/* Badges */}
              <div className="flex gap-2">
                {isFeatured && (
                  <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-orange-500 text-white">
                    Featured
                  </span>
                )}
                {isNew && (
                  <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-sky-500 text-white">
                    New
                  </span>
                )}
              </div>

              {/* Main image with zoom */}
              <div
                ref={imageRef}
                className={cn(
                  "relative aspect-square rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-zoom-in select-none",
                  isZoomed && "cursor-zoom-out",
                )}
                onClick={() => setIsZoomed((z) => !z)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => isZoomed && setIsZoomed(false)}
              >
                <img
                  src={product.imageUrls[activeImage]}
                  alt={product.name}
                  className={cn(
                    "w-full h-full object-contain transition-transform duration-200",
                    isZoomed ? "scale-[2.2]" : "scale-100",
                  )}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        }
                      : {}
                  }
                  draggable={false}
                />
                {!isZoomed && (
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-lg p-1.5 shadow pointer-events-none">
                    <ZoomIn className="h-3.5 w-3.5 text-gray-500" />
                  </div>
                )}
              </div>

              {/* Thumbnail strip */}
              {product.imageUrls.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {product.imageUrls.map((url, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200",
                        activeImage === i
                          ? "border-orange-500 shadow-md scale-105"
                          : "border-gray-200 hover:border-orange-300 hover:scale-105 opacity-70 hover:opacity-100",
                      )}
                    >
                      <img
                        src={url}
                        alt={`View ${i + 1}`}
                        className="w-full h-full object-contain bg-white"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Prev/next arrows for multi-image */}
              {product.imageUrls.length > 1 && (
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      setActiveImage(
                        (p) =>
                          (p - 1 + product.imageUrls.length) %
                          product.imageUrls.length,
                      )
                    }
                    className="p-2 rounded-full border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-sm text-gray-400">
                    {activeImage + 1} / {product.imageUrls.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveImage((p) => (p + 1) % product.imageUrls.length)
                    }
                    className="p-2 rounded-full border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* ── Right: Product Info ── */}
            <div className="p-8 flex flex-col gap-6">
              {/* Brand + Category */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold tracking-widest uppercase text-orange-500">
                  {product.brand.name}
                </span>
                <span className="text-gray-300">·</span>
                {product.category.map((cat) => (
                  <span
                    key={cat.id}
                    className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>

              {/* Product name */}
              <div>
                <h2
                  className="text-2xl font-bold text-gray-900 leading-tight mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {product.name}
                </h2>
                <p className="text-sm text-gray-400 font-mono">
                  Model: {product.model}
                </p>
              </div>

              {/* Price + Availability */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wider">
                    Price
                  </p>
                  <p className="text-3xl font-extrabold text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold",
                    status.bg,
                    status.border,
                    status.color,
                  )}
                >
                  <StatusIcon className="h-4 w-4" />
                  {status.label}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

              {/* Description */}
              {product.description && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Description
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-3">
                <SpecCard
                  icon={Package}
                  label="Stock"
                  value={`${product.stock} units`}
                />
                {product.releaseDate && (
                  <SpecCard
                    icon={Calendar}
                    label="Release Date"
                    value={new Date(product.releaseDate).toLocaleDateString(
                      "id-ID",
                      { year: "numeric", month: "short", day: "numeric" },
                    )}
                  />
                )}
                <SpecCard
                  icon={Tag}
                  label="Tags"
                  value={product.tags?.map((t) => t.name).join(", ") || "—"}
                />
                <SpecCard icon={Cpu} label="Brand" value={product.brand.name} />
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                {product.datasheetUrl && (
                  <a
                    href={product.datasheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-orange-500 text-orange-500 font-semibold text-sm hover:bg-orange-50 hover:scale-[1.02] transition-all duration-200"
                  >
                    <FileText className="h-4 w-4" />
                    Datasheet
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                )}
                <button
                  onClick={handleClose}
                  className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Close
                </button>
              </div>

              {/* Added by */}
              {product.createdBy && (
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {product.createdBy.avatarUrl ? (
                      <img
                        src={product.createdBy.avatarUrl}
                        alt={product.createdBy.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-orange-500">
                        {product.createdBy.name?.[0]?.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">
                    Added by{" "}
                    <span className="font-medium text-gray-600">
                      {product.createdBy.name}
                    </span>
                    {product.createdAt && (
                      <>
                        {" "}
                        ·{" "}
                        {new Date(product.createdAt).toLocaleDateString(
                          "id-ID",
                        )}
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
      <div className="p-1.5 rounded-lg bg-orange-100 flex-shrink-0">
        <Icon className="h-3.5 w-3.5 text-orange-500" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-700 truncate">{value}</p>
      </div>
    </div>
  );
}
