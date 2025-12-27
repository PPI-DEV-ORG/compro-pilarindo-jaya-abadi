/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CFb2y3vC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DBeya8yF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PT Pilarindo Jaya Abadi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <main class="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8"> <div class="mx-auto mt-20 max-w-2xl text-center sm:mt-24"> <p class="text-base font-semibold leading-8 text-black mt-10">404</p> <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not
                    exist</h1> <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">Sorry, we couldn’t
                    find the page you’re looking for.</p> </div> <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20"> <h2 class="sr-only">Popular pages</h2> <div class="mt-10 flex justify-center"> <a href="/" class="rounded-md border border-black bg-black px-3.5 py-2.5 text-center text-sm font-nunito text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"> <span aria-hidden="true">&larr;</span>
Back to home
</a> </div> </div> </main> </div> ` })}`;
}, "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/404.astro", void 0);

const $$file = "/home/osenbal/projects/samtek/compro-pilarindo-jaya-abadi/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
