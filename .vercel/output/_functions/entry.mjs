import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dq4UfwIq.mjs';
import { manifest } from './manifest_B4xrhTm3.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/gallery.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/gallery.astro.mjs');
const _page6 = () => import('./pages/product/1.astro.mjs');
const _page7 = () => import('./pages/product/2.astro.mjs');
const _page8 = () => import('./pages/product/3.astro.mjs');
const _page9 = () => import('./pages/products.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.19_@types+node@25.0.3_rollup@4.53.2_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/gallery.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/gallery.astro", _page5],
    ["src/pages/product/1.astro", _page6],
    ["src/pages/product/2.astro", _page7],
    ["src/pages/product/3.astro", _page8],
    ["src/pages/products.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
