import { useEffect, useState } from "react";
import type { GalleryItem } from "../../types/global";

export default function GalleryComponent() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const openLightbox = (imageUrl?: string, title?: string) => {
    if (!imageUrl) return;
    setLightboxImage(imageUrl);
    setLightboxTitle(title ?? "");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle("");
    document.body.style.overflow = "";
  };

  async function load(): Promise<void> {
    if (loading || !hasMore) return;
    setLoading(true);

    const url = new URL(`${import.meta.env.PUBLIC_API_SERVER}/api/gallery`);
    url.searchParams.set("pageSize", "9");

    if (cursor) url.searchParams.set("cursor", cursor);

    const res = await fetch(url.toString());
    if (!res.ok) {
      setLoading(false);
      throw new Error("Failed to load gallery");
    }

    const data = await res.json();

    setItems((prev) => [...prev, ...data.items]);
    setCursor(data.nextCursor);
    setHasMore(data.hasMore);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32" id="tentang-kami">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <section id="gallery" className="section-padding bg-muted/30">
          <div className="container-tight">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-soft-blue text-primary text-sm font-medium mb-4">
                Photo Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Packaging Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our range of inventory storage, packaging materials, and
                warehouse-ready.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="gallery-card cursor-pointer animate-scale-in border rounded-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(item.imageUrl, item.title)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="relative inline-flex items-center rounded-md px-2 py-1 text-xs font-medium overflow-hidden"
                        >
                          <span
                            className="absolute inset-0 opacity-40"
                            style={{ backgroundColor: tag.color }}
                          />
                          <span className="relative z-10">{tag.name}</span>
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={load}
                  disabled={loading}
                  className="px-6 py-3 rounded-lg bg-black text-white disabled:opacity-50"
                >
                  {loading ? "Loading..." : "Load more"}
                </button>
              </div>
            )}

            {/* Lightbox */}
            {lightboxImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
                onClick={closeLightbox}
              >
                <div
                  className="relative max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeLightbox}
                    className="absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-xl"
                  >
                    ✕
                  </button>

                  <img
                    src={lightboxImage}
                    alt={lightboxTitle}
                    className="w-full max-h-[80vh] object-contain rounded-xl bg-white"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
