/* empty css                                 */
import { c as createComponent, b as createAstro, a as renderTemplate, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_CFb2y3vC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DBeya8yF.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  Astro2.props;
  return renderTemplate(_a || (_a = __template(["", `<div class=""> <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20"> <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"> <div class="px-6 lg:px-0 lg:pt-4"> <div class="mx-auto max-w-2xl"> <div class="max-w-lg"> <div class="mt-24 sm:mt-32 lg:mt-16"> <a href="" class="inline-flex space-x-6"> <!-- Konten Diubah: "Terpercaya Sejak 1998" -> "Solusi Suku Cadang" --> <span class="rounded-full bg-blue-900/80 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-blue-900">Solusi Suku Cadang</span> <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"> <!-- Konten Diubah: "Layanan 24/7" -> "Kualitas Terjamin" --> <span>Kualitas Terjamin</span> <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path> </svg> </span> </a> </div> <!-- Konten Diubah: Judul diganti --> <h1 class="mt-10 text-4xl font-roboto tracking-tight text-gray-900 sm:text-6xl">
Solusi Terlengkap Sparepart Alat Berat, Marine Engine & Overhaul Mesin
</h1> <!-- Konten Diubah: Paragraf diganti --> <p class="mt-6 text-lg text-gray-600">
Kami hadir sebagai penyedia distribusi suku cadang, marine engine, dan jasa overhaul yang menawarkan solusi profesional dan efisien untuk berbagai sektor industri di Indonesia.
</p> <div class="mt-10 flex items-center gap-x-6"> <!-- Konten Diubah: Teks Tombol diganti --> <a href="https://api.whatsapp.com/send?phone=6285693533561&text=Halo%2C%20Pilarindo%20Jaya%20Abadi%20%F0%9F%91%8B%F0%9F%8F%BC" class="rounded-md bg-white border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Hubungi Kami
</a> <!-- Konten Diubah: Teks Tombol diganti --> <a href="/products" class="text-sm font-semibold leading-6 text-gray-900">Lihat Produk Kami<span aria-hidden="true">\u2192</span></a> </div> </div> </div> </div> <div class="mt-20 px-1 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen relative"> <!-- Gambar (src) tidak diubah sesuai instruksi --> <img id="image" class="rounded-xl top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-1000 ease-in-out shadow-xl" src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000&auto=format&fit=crop"> <div class="absolute top-0 right-0 rounded-bl-xl p-6 bg-gray-50"> <svg class="h-2 w-2 inline fill-black mr-2" viewBox="0 0 6 6" aria-hidden="true"> <circle cx="3" cy="3" r="3"></circle> </svg> <svg class="h-2 w-2 inline fill-gray-300 mr-2" viewBox="0 0 6 6" aria-hidden="true"> <circle cx="3" cy="3" r="3"></circle> </svg> <svg class="h-2 w-2 inline fill-gray-300 mr-2" viewBox="0 0 6 6" aria-hidden="true"> <circle cx="3" cy="3" r="3"></circle> </svg> </div> <div class="absolute bottom-0 right-0 rounded-full m-6 pl-1 pr-4 py-1 bg-black bg-opacity-75 flex items-center"> <!-- Avatar (src) diubah agar sesuai dengan nama baru --> <img class="inline mr-2 h-9 w-9 rounded-full" src="https://ui-avatars.com/api/?name=Sumanto&background=0D8ABC&color=fff" alt="Manajemen"> <div class="flex flex-col"> <!-- Konten Diubah: "Budi Santoso" -> "Sumanto" --> <span class="text-white text-sm font-roboto">Sumanto</span> <!-- Konten Diubah: "Procurement Manager" -> "Key Leader - Logistik" --> <span class="text-gray-200 text-xs font-nunito">Key Leader - Logistik</span> </div> </div> </div> </div> <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div> </div> </div> <!-- Skrip (src gambar) tidak diubah sesuai instruksi --> <script type="module" client:load>
    // URL Gambar diganti dengan tema Maritim & Tambang (Unsplash)
    const images = [
        "./kapal.jpg", // Kapal Kargo/Port
        "./excavator.jpg", // Excavator Tambang
        "./gudang.jpg", // Gudang Sparepart
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('image');

    // Initially, set the image opacity to 100 to ensure it is visible
    imageElement.classList.remove('opacity-0');

    function changeImage() {
        // Add opacity class 0 to make the current image transparent
        imageElement.classList.add('opacity-0');

        setTimeout(() => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            imageElement.src = images[currentIndex];
            // Wait for the image to load before making it visible
            imageElement.onload = () => {
                imageElement.classList.remove('opacity-0'); // Make the new image visible
            };
        }, 1000); // This time should match the duration of the opacity transition
    }

    // Starts image transition every 4 seconds (includes 1 second for transition duration)
    setInterval(changeImage, 4000);
<\/script>`])), maybeRenderHead());
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$Logos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Logos;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-7xl px-6 lg:px-8 py-12"> <!-- Konten Diubah: Judul disesuaikan dengan logo produk --> <h2 class="text-center text-lg font-semibold leading-8 text-gray-900 mb-10">
Menyediakan Suku Cadang dari Merek Terkemuka
</h2> <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"> <!-- Logo 1: Sesuai daftar produk --> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/komatsu.png" alt="Komatsu" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/caterpillar.png" alt="Caterpillar" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/shacman.png" alt="Shacman" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/deutz.svg" alt="Deutz" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/toyota.svg" alt="Toyota" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/hino.png" alt="Hino" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/nissan.svg" alt="Nissan" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/cummins.svg" alt="Cummins" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/bomag.png" alt="Bomag" width="158" height="48"> <img class="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/mitsubishi.png" alt="Bomag" width="158" height="48"> </div> <div class="mt-8 flex justify-center"> <p class="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20"> <!-- Konten Diubah: Stat downtime diganti dengan info relevan --> <span class="hidden md:inline">Jaringan pemasok global kami menjamin keandalan dan efisiensi.</span> <a href="/about" class="font-semibold text-blue-900"> <span class="absolute inset-0" aria-hidden="true"></span> <!-- Konten Diubah: Teks link diganti -->
Pelajari Misi Kami <span aria-hidden="true">&rarr;</span> </a> </p> </div> </div>`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/Logos.astro", void 0);

const $$Astro$4 = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Features;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto mt-12 max-w-7xl px-6 sm:mt-32 lg:px-8"> <div class="mx-auto max-w-2xl lg:text-center"> <h2 class="text-base font-semibold leading-7"> <span class="bg-blue-900/80 ring-blue-900 text-white px-4 py-1 rounded-full">Layanan Unggulan</span> </h2> <p class="mt-2 text-3xl font-roboto tracking-tight text-gray-900 sm:text-4xl">
Solusi Terintegrasi untuk Operasional Anda
</p> <!-- Konten Diubah: Deskripsi utama diganti --> <p class="mt-6 text-lg leading-8 font-nunito text-gray-600">
Pilarindo adalah perusahaan induk yang dinamis, menyediakan solusi mulus, efisien, dan andal untuk meningkatkan kinerja bisnis dan efisiensi operasional di berbagai industri.
</p> </div> <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"> <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"> <!-- Fitur 1 Diubah: Logistik --> <div class="relative pl-16"> <dt class="text-base font-semibold leading-7 text-gray-900"> <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/80"> <!-- Icon: Cloud Upload (Diadaptasi menjadi Logistik/Pengiriman) --> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.5V6a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0115 6v7.5m0 0h2.879a1.5 1.5 0 011.341.83l1.88 3.76A1.5 1.5 0 0120.879 21H19.5m-4.5-7.5v4.5m-12 0h12m-12 0A2.25 2.25 0 007.5 21a2.25 2.25 0 00-4.5 0zM15 18a2.25 2.25 0 004.5 0"></path> </svg> </div>
Marine Engine
</dt> <dd class="mt-2 text-base leading-7 text-gray-600">
Solusi lengkap dan terintegrasi untuk mesin kapal dan industri maritim, meliputi penyediaan sparepart berkualitas serta dukungan teknis guna memastikan kinerja optimal dan keandalan operasional.
</dd> </div> <!-- Fitur 2 Diubah: Distribusi Suku Cadang --> <div class="relative pl-16"> <dt class="text-base font-semibold leading-7 text-gray-900"> <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/80"> <!-- Icon: Lock (Diadaptasi menjadi Suku Cadang/Gears) --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.43334V11.3343L7.33334 14.2972V8.39338L2 5.43334ZM8.66666 14.2972L14 11.3343V5.43053L8.66666 8.39322V14.2972ZM6.04072 2.45078L8.00016 1.36328L13.2929 4.29809L11.3331 5.38675L6.04072 2.45078ZM4.66675 3.21331L9.95978 6.14966L7.99988 7.23837L2.70716 4.30091L4.66675 3.21331Z" fill="white"></path> </svg> </div>
Distribusi Suku Cadang
</dt> <dd class="mt-2 text-base leading-7 text-gray-600">
Dengan pengetahuan mendalam dan jaringan pemasok global, kami berkomitmen menyediakan suku cadang berkualitas tinggi untuk menjamin keandalan aset Anda.
</dd> </div> <!-- Fitur 3 Diubah: Manajemen Ban --> <div class="relative pl-16"> <dt class="text-base font-semibold leading-7 text-gray-900"> <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/80"> <!-- Icon: Wrench / Gear (lebih cocok untuk layanan overhaul) --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M8 10H16V18H11L9 16H7V11M7 4V6H10V8H7L5 10V13H3V10H1V18H3V15H5V18H8L10 20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z" fill="white"></path> </svg> </div>
Jasa Overhaul Mesin
</dt> <dd class="mt-2 text-base leading-7 text-gray-600">
Kami menyediakan layanan overhaul mesin yang profesional dan menyeluruh untuk memastikan performa alat berat dan marine engine tetap optimal.
</dd> </div> <!-- Fitur 4 Diubah: Layanan Pelanggan --> <div class="relative pl-16"> <dt class="text-base font-semibold leading-7 text-gray-900"> <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/80"> <!-- Icon: Fingerprint (Diadaptasi menjadi Layanan/Support) --> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 12a9 9 0 1118 0v4.5a2.25 2.25 0 01-2.25 2.25H17.25
           M3 12v4.5A2.25 2.25 0 005.25 18.75H6.75
           M6.75 18.75v-4.5M17.25 18.75v-4.5M9.75 21h4.5"></path> </svg> </div>
Layanan Purna Jual
</dt> <dd class="mt-2 text-base leading-7 text-gray-600">
Kami berdedikasi untuk membangun hubungan jangka panjang dengan memberikan layanan pelanggan yang luar biasa dan bantuan purna jual yang responsif.
</dd> </div> </dl> </div> </div>`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/Features.astro", void 0);

const $$Astro$3 = createAstro();
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Testimonial;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8"> <div class="relative overflow-hidden bg-gray-200 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20"> <!-- Gambar background diganti dengan suasana pelabuhan/industri --> <img class="absolute inset-0 h-full w-full object-cover" src="./port.jpg" alt="Operasional Pelabuhan"> <div class="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div> <div class="relative mx-auto max-w-2xl lg:mx-0"> <!-- Logo diganti dengan placeholder logo GMN --> <img class="h-12 w-auto" src="./logo-128x128.png" alt="Logo GMN"> <figure> <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8"> <p>“Jaringan logistik dan ketersediaan suku cadang dari tim Pilarindo sangat krusial bagi kami. Mereka mampu menyediakan solusi suku cadang berkualitas dengan efisien, yang sangat membantu menjaga keandalan dan efisiensi operasional kami di lapangan.”</p> </blockquote> <figcaption class="mt-6 text-base text-white"> <!-- Konten Diubah: Nama dan Jabatan --> <div class="font-semibold">Ahmad Hidayat</div> <!-- Konten Diubah: Perusahaan menggunakan nama klien dari profil --> <div class="mt-1">Supply Chain Manager, PT. Mantimin Coal Mining</div> </figcaption> </figure> </div> </div> </div>`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/Testimonial.astro", void 0);

const $$Astro$2 = createAstro();
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pricing;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative isolate bg-white px-6 py-12 lg:px-8"> <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true"> <!-- Gradient background disesuaikan sedikit ke nuansa biru laut/industri agar sesuai tema --> <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0e7490] to-[#1e3a8a] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> </div> <div class="mx-auto max-w-2xl text-center lg:max-w-4xl"> <h2 class="text-base font-nunito leading-7 text-black">
Penawaran Kerjasama
</h2> <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
Solusi Pengadaan Fleksibel
</p> </div> <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
Pilih skema pengadaan yang paling sesuai dengan skala operasional armada
    atau kebutuhan situs tambang Anda.
</p> <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"> <!-- Tier 1: Pembelian Reguler --> <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 relative bg-white shadow-2xl"> <h3 id="tier-personal" class="text-base font-semibold leading-7 text-black">
Pembelian Reguler
</h3> <p class="mt-4 flex items-baseline gap-x-2"> <!-- Mengganti nominal harga dengan status penawaran --> <span class="text-3xl font-bold tracking-tight text-gray-900">Harga Pasar Terbaik</span> </p> <p class="mt-6 text-base leading-7 text-gray-600">
Ideal untuk kebutuhan mendesak (urgent) atau pembelian sparepart satuan.
</p> <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Jaminan Part Genuine/OEM
</li> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Pengiriman Cepat (Express)
</li> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Pembayaran Tunai/Transfer
</li> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Dukungan Teknis via Telepon
</li> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Akses Katalog Digital
</li> </ul> <a href="https://api.whatsapp.com/send?phone=6285693533561&text=Halo%2C%20Pilarindo%20Jaya%20Abadi%20%F0%9F%91%8B%F0%9F%8F%BC" aria-describedby="tier-personal" class="mt-8 block rounded-md py-2.5 px-3.5 border border-black text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:mt-10 bg-black text-white shadow hover:bg-white hover:text-black">Minta Penawaran</a> </div> <!-- Tier 2: Mitra Korporat --> <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/60 sm:mx-8 lg:mx-0 sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none"> <h3 id="tier-team" class="text-base font-semibold leading-7 text-black">
Mitra Prioritas
</h3> <p class="mt-4 flex items-baseline gap-x-2"> <!-- Mengganti nominal harga dengan benefit utama --> <span class="text-3xl font-bold tracking-tight text-gray-900">Kontrak & TOP Khusus</span> </p> <p class="mt-6 text-base leading-7 text-gray-600">
Solusi jangka panjang untuk efisiensi biaya operasional armada atau
        tambang Anda.
</p> <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Term of Payment (TOP) Fleksibel
</li> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Stok Konsinyasi (On-site)
</li> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Prioritas Pengiriman Logistik
</li> <li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path> </svg>
Dedicated Account Manager
</li> </ul> <a href="https://api.whatsapp.com/send?phone=6285693533561&text=Halo%2C%20Pilarindo%20Jaya%20Abadi%20%F0%9F%91%8B%F0%9F%8F%BC" aria-describedby="tier-team" class="mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:mt-10 text-black hover:text-white hover:bg-black ring-1 ring-inset ring-black hover:ring-black">Hubungi Tim Corporate</a> </div> </div> </div>`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/Pricing.astro", void 0);

const $$Astro$1 = createAstro();
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Faq;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-32 lg:px-8"> <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
Pertanyaan Umum (FAQ)
</h2> <dl class="mt-10 space-y-8 divide-y divide-gray-900/10"> <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"> <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
Apakah suku cadang yang dijual dijamin keasliannya (Genuine)?
</dt> <dd class="mt-4 lg:col-span-7 lg:mt-0"> <p class="text-base leading-7 text-gray-600">
Ya, kami menjamin keaslian produk untuk kategori <i>Genuine Parts</i> yang dilengkapi sertifikat (COO). Kami juga menyediakan opsi <i>OEM</i> dan <i>Premium Aftermarket</i> sebagai alternatif yang lebih ekonomis
            namun tetap berkualitas standar industri.
</p> </dd> </div> <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"> <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
Berapa lama estimasi pengiriman ke lokasi tambang di luar Jawa?
</dt> <dd class="mt-4 lg:col-span-7 lg:mt-0"> <p class="text-base leading-7 text-gray-600">
Untuk stok yang tersedia di gudang Balikpapan atau Jakarta,
            pengiriman dilakukan di hari yang sama (<i>Same Day Dispatch</i>).
            Estimasi tiba di lokasi <i>site</i> rata-rata 2-4 hari kerja, tergantung
            pada aksesibilitas logistik daerah tersebut.
</p> </dd> </div> <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"> <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
Apakah GMN bisa membantu mencari sparepart mesin kapal tua (Obsolete)?
</dt> <dd class="mt-4 lg:col-span-7 lg:mt-0"> <p class="text-base leading-7 text-gray-600">
Tentu. Tim <i>procurement</i> kami memiliki jaringan global di Singapura,
            Jepang, dan Eropa. Kami dapat melakukan <i>special sourcing</i> untuk
            komponen mesin yang sudah tidak diproduksi massal atau sulit ditemukan
            di pasar lokal.
</p> </dd> </div> </dl> </div> </div>`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/Faq.astro", void 0);

const $$Astro = createAstro();
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative -z-10 mt-32 px-6 lg:px-8"> <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end" aria-hidden="true"> <!-- Gradient disesuaikan ke nuansa biru laut (Marine Blue) --> <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#0e7490] to-[#1e3a8a] opacity-25" style="clip-path: polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)"></div> </div> <div class="mx-auto max-w-2xl text-center"> <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
Pastikan Armada & Alat Berat Anda<br>Selalu Siap Beroperasi
</h2> <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
Jangan biarkan downtime menghambat produktivitas bisnis Anda. Hubungi tim ahli kami hari ini untuk solusi suku cadang yang cepat, tepat, dan terpercaya.
</p> <div class="mt-10 flex items-center justify-center gap-x-6"> <a href="https://api.whatsapp.com/send?phone=6285693533561&text=Halo%2C%20Pilarindo%20Jaya%20Abadi%20%F0%9F%91%8B%F0%9F%8F%BC" class="rounded-md bg-black px-3.5 py-2.5 border border-black text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
Hubungi Sales
</a> <a href="https://api.whatsapp.com/send?phone=6285693533561&text=Halo%2C%20Pilarindo%20Jaya%20Abadi%20%F0%9F%91%8B%F0%9F%8F%BC" class="text-sm font-semibold leading-6 text-gray-900">Cek Ketersediaan Stok <span aria-hidden="true">→</span></a> </div> </div> <div class="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block" aria-hidden="true"> <!-- Gradient disesuaikan ke nuansa biru laut (Marine Blue) --> <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0e7490] to-[#1e3a8a] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> </div> </div>`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/components/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PT Pilarindo Jaya Abadi" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})}  ${renderComponent($$result2, "Logos", $$Logos, {})}  ${renderComponent($$result2, "Features", $$Features, {})}  ${renderComponent($$result2, "Testimonial", $$Testimonial, {})}  ${renderComponent($$result2, "Pricing", $$Pricing, {})}  ${renderComponent($$result2, "FAQ", $$Faq, {})}  ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/index.astro", void 0);

const $$file = "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
