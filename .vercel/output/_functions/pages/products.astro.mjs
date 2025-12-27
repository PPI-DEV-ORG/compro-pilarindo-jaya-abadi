/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CFb2y3vC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DBeya8yF.mjs';
export { renderers } from '../renderers.mjs';

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PT Pilarindo Jaya Abadi" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"> <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"> <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Katalog Produk Unggulan</h2> <p class="mt-2 text-lg leading-8 text-gray-600">
Kami menyediakan solusi suku cadang terlengkap untuk menjaga performa armada laut dan alat berat Anda.
                Dari komponen vital mesin induk kapal hingga ketahanan <i>undercarriage</i> di medan tambang yang ekstrem,
                kami menjamin kualitas <i>Genuine</i> terbaik.
</p> </div> <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"> <!-- Product 1: Marine Engine Parts --> <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"> <img src="/product-1.jpg" alt="Marine Engine Room" class="absolute inset-0 -z-10 h-full w-full object-cover"> <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"> <div class="flex items-center gap-x-4"> <div class="flex gap-x-2.5">
Divisi Maritim
</div> </div> </div> <h3 class="mt-3 text-lg font-semibold leading-6 text-white"> <a href="/product/1"> <span class="absolute inset-0"></span>
Suku Cadang Mesin Kapal
</a> </h3> <p class="text-sm text-gray-300 mt-1">Main & Aux Engine (Yanmar, CAT, Wartsila)</p> </div> <!-- Product 2: Heavy Equipment/Mining --> <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"> <img src="/product-2.jpg" alt="Mining Excavator" class="absolute inset-0 -z-10 h-full w-full object-cover"> <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"> <div class="flex items-center gap-x-4"> <div class="flex gap-x-2.5">
Divisi Tambang
</div> </div> </div> <h3 class="mt-3 text-lg font-semibold leading-6 text-white"> <a href="/product/2"> <span class="absolute inset-0"></span>
Undercarriage & GET
</a> </h3> <p class="text-sm text-gray-300 mt-1">Track shoe, roller & bucket teeth (Komatsu, Hitachi)</p> </div> <!-- Product 3: Hydraulic Systems --> <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"> <img src="/product-3.jpg" alt="Hydraulic Parts" class="absolute inset-0 -z-10 h-full w-full object-cover"> <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"> <div class="flex items-center gap-x-4"> <div class="flex gap-x-2.5">
Komponen Sistem
</div> </div> </div> <h3 class="mt-3 text-lg font-semibold leading-6 text-white"> <a href="/product/3"> <span class="absolute inset-0"></span>
Hidrolik & Turbocharger
</a> </h3> <p class="text-sm text-gray-300 mt-1">Pompa hidrolik, cylinder & turbo kits</p> </div> <!-- More products... --> </div> </div> ` })}`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/products.astro", void 0);

const $$file = "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Products,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
