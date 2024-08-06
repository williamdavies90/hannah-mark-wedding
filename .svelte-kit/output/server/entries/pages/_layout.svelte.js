import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const img = "/_app/immutable/assets/logo.DIxp9QJe.png";
const css$1 = {
  code: "header.svelte-1ti45bp.svelte-1ti45bp{border-top:3px solid var(--primary-color);border-bottom:1px solid var(--secondary-color);width:100%;background:#FFFFFF;height:100px}nav.svelte-1ti45bp a.svelte-1ti45bp{display:flex;height:100%;align-items:center;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}nav.svelte-1ti45bp.svelte-1ti45bp{font-weight:300;padding:0 1em;text-align:center}ul.svelte-1ti45bp.svelte-1ti45bp{display:inline-block;padding:0;padding-bottom:env(safe-area-inset-bottom)}ul.svelte-1ti45bp.svelte-1ti45bp::after{content:'';display:block;clear:both}li.svelte-1ti45bp.svelte-1ti45bp{display:block;float:left;padding:5px 0;margin:0px auto}li[aria-current='page'].svelte-1ti45bp.svelte-1ti45bp{position:relative;display:inline-block}li[aria-current='page'].svelte-1ti45bp.svelte-1ti45bp::after{position:absolute;content:'';width:100%;height:3px;background-color:var(--accent-color);display:block;bottom:-1px}a.svelte-1ti45bp.svelte-1ti45bp{text-decoration:none;padding:0.5em;display:block;text-transform:uppercase;flex-direction:column}nav.svelte-1ti45bp.svelte-1ti45bp{z-index:999999;width:100%;border-bottom:1px solid var(--secondary-color)}nav.svelte-1ti45bp ul.svelte-1ti45bp{width:100%;margin-bottom:0px !important;display:flex;justify-content:space-between}li.svelte-1ti45bp.svelte-1ti45bp{width:25%;color:var(--accent-color2) !important}li.svelte-1ti45bp a.svelte-1ti45bp{font-size:22px;line-height:16px;padding-bottom:5px}li.svelte-1ti45bp a.svelte-1ti45bp{font-size:11px !important}li[aria-current='page'].svelte-1ti45bp a.svelte-1ti45bp{color:var(--primary-color)}@media(min-width: 768px){a.svelte-1ti45bp.svelte-1ti45bp:hover:after{background-color:var(--primary-color)}a.svelte-1ti45bp.svelte-1ti45bp:hover{color:var(--primary-color)}a.svelte-1ti45bp.svelte-1ti45bp:hover{color:var(--primary-color)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-1ti45bp" data-svelte-h="svelte-kc0fzo"><h1 class="text-center mt-2 mb-2"><img width="105px"${add_attribute("src", img, 0)} alt="Image"></h1></header> <nav class="svelte-1ti45bp"><ul class="svelte-1ti45bp"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1ti45bp"><a href="/" class="svelte-1ti45bp" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/info" ? "page" : void 0, 0)} class="svelte-1ti45bp"><a href="/info" class="svelte-1ti45bp" data-svelte-h="svelte-1t2drvf">Info</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} class="svelte-1ti45bp"><a href="/contact" class="svelte-1ti45bp" data-svelte-h="svelte-1jv5m9u">RSVP</a></li></ul> </nav>`;
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
