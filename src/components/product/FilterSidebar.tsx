import { useState } from "react";
import { ChevronDown, X, Filter } from "lucide-react";
import { cn } from "../../lib/utils";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSidebarProps {
  brands: FilterOption[];
  categories: FilterOption[];
  selectedBrands: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  maxPrice: number;
  onBrandChange: (brands: string[]) => void;
  onCategoryChange: (categories: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearAll: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export function FilterSidebar({
  brands,
  categories,
  selectedBrands,
  selectedCategories,
  priceRange,
  maxPrice,
  onBrandChange,
  onCategoryChange,
  onPriceChange,
  onClearAll,
  isMobile = false,
  onClose,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    categories: true,
    price: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleBrandToggle = (brandId: string) => {
    if (selectedBrands.includes(brandId)) {
      onBrandChange(selectedBrands.filter((b) => b !== brandId));
    } else {
      onBrandChange([...selectedBrands, brandId]);
    }
  };

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter((c) => c !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  const activeFiltersCount =
    selectedBrands.length +
    selectedCategories.length +
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

  return (
    <aside
      className={cn(
        "bg-card rounded-lg shadow-card p-5",
        isMobile && "h-full overflow-y-auto"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="font-display font-semibold text-lg">Filters</h2>
          {activeFiltersCount > 0 && (
            <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </div>
        {isMobile && onClose && (
          <button onClick={onClose} className="p-1 hover:bg-secondary rounded">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Clear All */}
      {activeFiltersCount > 0 && (
        <button
          onClick={onClearAll}
          className="w-full mb-4 text-muted-foreground hover:text-foreground"
        >
          Clear all filters
        </button>
      )}

      {/* Brand Filter */}
      <div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="font-semibold text-foreground">Brand</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              expandedSections.brands && "rotate-180"
            )}
          />
        </button>
        {expandedSections.brands && (
          <div className="mt-3 space-y-2.5 animate-fade-in">
            {brands.map((brand) => (
              <label
                key={brand.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  onChange={() => handleBrandToggle(brand.label)}
                  checked={selectedBrands.includes(brand.label)}
                  // onCheckedChange={() => handleBrandToggle(brand.id)}
                  className="border-steel data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className="flex-1 text-sm text-foreground group-hover:text-primary transition-colors">
                  {brand.label}
                </span>
                {/* <span className="text-xs text-muted-foreground">
                  ({brand.count})
                </span> */}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="font-semibold text-foreground">Category</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              expandedSections.categories && "rotate-180"
            )}
          />
        </button>
        {expandedSections.categories && (
          <div className="mt-3 space-y-2.5 animate-fade-in">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  onChange={() => handleCategoryToggle(category.label)}
                  checked={selectedCategories.includes(category.label)}
                  // onCheckedChange={() => handleCategoryToggle(category.id)}
                  className="border-steel data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className="flex-1 text-sm text-foreground group-hover:text-primary transition-colors">
                  {category.label}
                </span>
                {/* <span className="text-xs text-muted-foreground">
                  ({category.count})
                </span> */}
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
