import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const img = "/_app/immutable/assets/logo.DIxp9QJe.png";
const css$1 = {
  code: "header.svelte-rnz74h.svelte-rnz74h{border-top:3px solid var(--primary-color);border-bottom:1px solid var(--secondary-color);width:100%;background:#FFFFFF;height:100px}nav.svelte-rnz74h a.svelte-rnz74h{display:flex;height:100%;align-items:center;color:var(--color-text);font-weight:bold;font-size:1.4rem !important;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}nav.svelte-rnz74h.svelte-rnz74h{font-weight:300;padding:0 1em;text-align:center}ul.svelte-rnz74h.svelte-rnz74h{display:inline-block;padding:0;padding-bottom:env(safe-area-inset-bottom)}ul.svelte-rnz74h.svelte-rnz74h::after{content:'';display:block;clear:both}li.svelte-rnz74h.svelte-rnz74h{display:block;float:left;padding:5px 0;margin:0px auto}li[aria-current='page'].svelte-rnz74h.svelte-rnz74h{position:relative;display:inline-block}li[aria-current='page'].svelte-rnz74h.svelte-rnz74h::after{position:absolute;content:'';width:100%;height:3px;background-color:var(--accent-color);display:block;bottom:-1px}a.svelte-rnz74h.svelte-rnz74h{text-decoration:none;padding:0.5em;display:block;text-transform:uppercase;flex-direction:column}nav.svelte-rnz74h.svelte-rnz74h{z-index:999999;width:100%;border-bottom:1px solid var(--secondary-color)}nav.svelte-rnz74h ul.svelte-rnz74h{width:100%;margin-bottom:0px !important;display:flex;justify-content:space-between}li.svelte-rnz74h.svelte-rnz74h{width:25%;color:var(--accent-color2) !important}li.svelte-rnz74h a.svelte-rnz74h{font-size:22px;line-height:16px;padding-bottom:5px}li.svelte-rnz74h a.svelte-rnz74h{font-size:16px !important;line-height:20px !important}li[aria-current='page'].svelte-rnz74h a.svelte-rnz74h{color:var(--primary-color)}@media(min-width: 768px){a.svelte-rnz74h.svelte-rnz74h:hover:after{background-color:var(--primary-color)}a.svelte-rnz74h.svelte-rnz74h:hover{color:var(--primary-color)}a.svelte-rnz74h.svelte-rnz74h:hover{color:var(--primary-color)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-rnz74h" data-svelte-h="svelte-kc0fzo"><h1 class="text-center mt-2 mb-2"><img width="105px"${add_attribute("src", img, 0)} alt="Image"></h1></header> <nav class="svelte-rnz74h"><ul class="svelte-rnz74h"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-rnz74h"><a href="/" class="svelte-rnz74h" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/info" ? "page" : void 0, 0)} class="svelte-rnz74h"><a href="/info" class="svelte-rnz74h" data-svelte-h="svelte-1t2drvf">Info</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} class="svelte-rnz74h"><a href="/contact" class="svelte-rnz74h" data-svelte-h="svelte-1jv5m9u">RSVP</a></li></ul> </nav>`;
});
const css = {
  code: ".app.svelte-9y8pcl{display:flex;flex-direction:column;min-height:100vh}main.svelte-9y8pcl{flex:1;display:flex;flex-direction:column;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-9y8pcl{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-9y8pcl{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-9y8pcl">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-9y8pcl"><div>${slots.default ? slots.default({}) : ``}</div></main> <footer class="svelte-9y8pcl" data-svelte-h="svelte-fmr3z8"><p></p></footer> </div>`;
});
export {
  Layout as default
};
