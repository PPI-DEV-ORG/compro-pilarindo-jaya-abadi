import { useEffect, useState } from "react";
import type { ProductItem } from "../../types/global";
import { ALL_BRANDS, ALL_CATEGORIES } from "../../utils/constant";
import { FilterSidebar } from "./FilterSidebar";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";
import { ProductCard } from "./ProductCard";

export default function ProductComponent() {
  const [listProduct, setListProduct] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [pageSize] = useState(16);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(
    null
  );

  async function load(): Promise<void> {
    setLoading(true);

    const url = new URL("http://localhost:4321/api/product");
    url.searchParams.set("pageSize", pageSize.toString());

    selectedBrands.forEach((b) => url.searchParams.append("brand", b));
    selectedCategories.forEach((c) => url.searchParams.append("category", c));

    try {
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Failed to load gallery");

      const data = await res.json();
      setHasMore(data.hasMore);
      setListProduct(data.items);
      setCursor(data.nextCursor);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [selectedBrands, selectedCategories]);

  return (
    <div className="bg-white py-24 sm:py-32" id="tentang-kami">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
          {/* Results Count */}
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {listProduct.length}
            </span>{" "}
            products
          </p>
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-border rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-secondary"
                )}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-secondary"
                )}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <FilterSidebar
                brands={ALL_BRANDS.map((brand, index) => ({
                  id: index.toString(),
                  label: brand,
                }))}
                categories={ALL_CATEGORIES.map((category, index) => ({
                  id: index.toString(),
                  label: category,
                }))}
                selectedBrands={selectedBrands}
                selectedCategories={selectedCategories}
                priceRange={[0, 100000]}
                maxPrice={100000}
                onBrandChange={setSelectedBrands}
                onCategoryChange={setSelectedCategories}
                onPriceChange={() => {}}
                onClearAll={() => {}}
              />
            </div>
          </div>

          <div className="flex-1">
            {loading ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <SlidersHorizontal className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Loading...
                </h3>
              </div>
            ) : listProduct.length > 0 ? (
              <>
                <div
                  className={cn(
                    "grid gap-6",
                    viewMode === "grid"
                      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  )}
                >
                  {listProduct.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={setQuickViewProduct}
                      index={index}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {/* {totalPages > 1 && (
                  <div className="mt-12">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )} */}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <SlidersHorizontal className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button onClick={() => {}}>Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
