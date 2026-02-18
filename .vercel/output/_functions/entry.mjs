import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_COmTclbD.mjs';
import { manifest } from './manifest_DXcIa5-l.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/likes/add.astro.mjs');
const _page5 = () => import('./pages/api/likes/_slug_.astro.mjs');
const _page6 = () => import('./pages/archives.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/links.astro.mjs');
const _page9 = () => import('./pages/og.png.astro.mjs');
const _page10 = () => import('./pages/policy.astro.mjs');
const _page11 = () => import('./pages/posts/_---slug_/index.png.astro.mjs');
const _page12 = () => import('./pages/posts/_---page_.astro.mjs');
const _page13 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page14 = () => import('./pages/robots.txt.astro.mjs');
const _page15 = () => import('./pages/rss.xml.astro.mjs');
const _page16 = () => import('./pages/search.astro.mjs');
const _page17 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page18 = () => import('./pages/tags.astro.mjs');
const _page19 = () => import('./pages/test.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.mdx", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/likes/add.ts", _page4],
    ["src/pages/api/likes/[slug].ts", _page5],
    ["src/pages/archives/index.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/links.astro", _page8],
    ["src/pages/og.png.ts", _page9],
    ["src/pages/policy.astro", _page10],
    ["src/pages/posts/[...slug]/index.png.ts", _page11],
    ["src/pages/posts/[...page].astro", _page12],
    ["src/pages/posts/[...slug]/index.astro", _page13],
    ["src/pages/robots.txt.ts", _page14],
    ["src/pages/rss.xml.ts", _page15],
    ["src/pages/search.astro", _page16],
    ["src/pages/tags/[tag]/[...page].astro", _page17],
    ["src/pages/tags/index.astro", _page18],
    ["src/pages/test.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "957abe7c-906a-4d46-b601-c2bfe1b46a79",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
