/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CFb2y3vC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DBeya8yF.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white py-24 sm:py-32" id="tentang-kami"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <!-- Bagian 1: Tentang, Visi, & Misi --> <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start"> <!-- Kolom Teks (Kiri) --> <div> <p class="text-base font-semibold leading-7 text-blue-800">TENTANG KAMI</p> <h2 class="mt-2 text-3xl font-roboto font-bold tracking-tight text-gray-900 sm:text-4xl">
Solusi Dinamis untuk Industri Anda
</h2> <div class="mt-8 text-lg leading-7 text-gray-600 space-y-6"> <p> <strong>PT. Pilarindo Jaya Abadi</strong> adalah perusahaan induk dinamis dengan fokus pada distribusi <strong>
suku cadang, marine engine, dan jasa overhaul</strong>.
</p> <p>
Dibangun di atas landasan pengalaman puluhan tahun, kami berdedikasi untuk menyediakan suku cadang berkualitas tinggi yang menjamin keandalan dan efisiensi bagi klien kami.
</p> </div> <!-- Visi --> <h3 class="mt-12 text-2xl font-roboto font-bold tracking-tight text-gray-900">
Visi Kami
</h3> <p class="mt-4 text-lg leading-7 text-gray-600">
Menjadi pemasok suku cadang berkualitas tinggi yang paling tepercaya dan disukai, untuk memastikan keandalan dan efisiensi bagi industri di seluruh dunia.
</p> <!-- Misi --> <h3 class="mt-8 text-2xl font-roboto font-bold tracking-tight text-gray-900">
Misi Kami
</h3> <ul role="list" class="mt-6 space-y-4 text-gray-600 text-base leading-7"> <li class="flex gap-x-3 items-center"> <svg class="h-6 w-6 flex-none text-blue-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg> <span>Menyediakan hanya suku cadang terbaik yang memenuhi harapan.</span> </li> <li class="flex gap-x-3 items-center"> <svg class="h-6 w-6 flex-none text-blue-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg> <span>Memberikan layanan pelanggan dan purna jual yang luar biasa.</span> </li> <li class="flex gap-x-3 items-center"> <svg class="h-6 w-6 flex-none text-blue-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg> <span>Membangun hubungan jangka panjang dengan klien dan mitra.</span> </li> </ul> </div> <!-- Kolom Gambar (Kanan) --> <div class="relative overflow-hidden rounded-3xl shadow-xl lg:sticky lg:top-24"> <img class="aspect-[4/3] w-full object-cover" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format=fit=crop" alt="Tim profesional bekerja di kantor modern"> <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent"></div> </div> </div> </div> </div>`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/About.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PT Pilarindo Jaya Abadi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", $$About$1, {})} ` })}`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/about.astro", void 0);

const $$file = "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
