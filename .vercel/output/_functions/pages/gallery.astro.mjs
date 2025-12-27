/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CFb2y3vC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DBeya8yF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function GalleryComponent() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const openLightbox = (imageUrl, title) => {
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
  async function load() {
    if (loading || !hasMore) return;
    setLoading(true);
    const url = new URL(`${"https://api-ptpilarindojayaabadi.vercel.app"}/api/gallery`);
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
  return /* @__PURE__ */ jsx("div", { className: "bg-white py-24 sm:py-32", id: "tentang-kami", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsx("section", { id: "gallery", className: "section-padding bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container-tight", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 rounded-full bg-soft-blue text-primary text-sm font-medium mb-4", children: "Photo Gallery" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Professional Packaging Services" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Explore our range of inventory storage, packaging materials, and warehouse-ready." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", children: items.map((item, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "gallery-card cursor-pointer animate-scale-in border rounded-md",
        style: { animationDelay: `${index * 0.1}s` },
        onClick: () => openLightbox(item.imageUrl, item.title),
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.imageUrl,
              alt: item.title,
              className: "w-full h-full object-cover",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mb-2", children: item.tags.map((tag) => /* @__PURE__ */ jsxs(
              "span",
              {
                className: "relative inline-flex items-center rounded-md px-2 py-1 text-xs font-medium overflow-hidden",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "absolute inset-0 opacity-40",
                      style: { backgroundColor: tag.color }
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "relative z-10", children: tag.name })
                ]
              },
              tag.id
            )) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mt-1", children: item.title })
          ] })
        ]
      },
      item.id
    )) }),
    hasMore && /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-10", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: load,
        disabled: loading,
        className: "px-6 py-3 rounded-lg bg-black text-white disabled:opacity-50",
        children: loading ? "Loading..." : "Load more"
      }
    ) }),
    lightboxImage && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6",
        onClick: closeLightbox,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative max-w-4xl w-full",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: closeLightbox,
                  className: "absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-xl",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: lightboxImage,
                  alt: lightboxTitle,
                  className: "w-full max-h-[80vh] object-contain rounded-xl bg-white"
                }
              )
            ]
          }
        )
      }
    )
  ] }) }) }) });
}

const prerender = false;
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PT Pilarindo Jaya Abadi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryComponent", GalleryComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/gallery/Gallery", "client:component-export": "default" })} ` })}`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/gallery.astro", void 0);

const $$file = "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
