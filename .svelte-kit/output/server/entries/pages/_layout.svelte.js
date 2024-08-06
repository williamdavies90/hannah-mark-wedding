import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const img = "/_app/immutable/assets/logo.DIxp9QJe.png";
const css$1 = {
  code: "header.svelte-lgqe7v.svelte-lgqe7v{border-bottom:1px solid var(--secondary-color);width:100%;background:#FFFFFF;height:100px}nav.svelte-lgqe7v a.svelte-lgqe7v{display:flex;height:100%;align-items:center;color:var(--color-text);font-weight:bold;font-size:1.4rem !important;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}nav.svelte-lgqe7v.svelte-lgqe7v{font-weight:300;padding:0 1em;text-align:center}ul.svelte-lgqe7v.svelte-lgqe7v{display:inline-block;padding:0}ul.svelte-lgqe7v.svelte-lgqe7v::after{content:'';display:block;clear:both}li.svelte-lgqe7v.svelte-lgqe7v{display:block;float:left;padding:5px 0;margin:0px auto}li[aria-current='page'].svelte-lgqe7v.svelte-lgqe7v{position:relative;display:inline-block}li[aria-current='page'].svelte-lgqe7v.svelte-lgqe7v::after{position:absolute;content:'';width:100%;height:3px;background-color:var(--accent-color);display:block;bottom:-1px}a.svelte-lgqe7v.svelte-lgqe7v{text-decoration:none;padding:0.5em;display:block;text-transform:uppercase;flex-direction:column}nav.svelte-lgqe7v.svelte-lgqe7v{z-index:999999;width:100%;border-bottom:1px solid var(--secondary-color)}nav.svelte-lgqe7v ul.svelte-lgqe7v{width:100%;margin-bottom:0px !important;display:flex;justify-content:space-between}li.svelte-lgqe7v.svelte-lgqe7v{width:25%;color:var(--accent-color2) !important}li.svelte-lgqe7v a.svelte-lgqe7v{font-size:22px;line-height:16px;padding-bottom:5px}li.svelte-lgqe7v a.svelte-lgqe7v{font-size:16px !important;line-height:20px !important}li[aria-current='page'].svelte-lgqe7v a.svelte-lgqe7v{color:var(--primary-color)}@media(min-width: 768px){a.svelte-lgqe7v.svelte-lgqe7v:hover:after{background-color:var(--primary-color)}a.svelte-lgqe7v.svelte-lgqe7v:hover{color:var(--primary-color)}a.svelte-lgqe7v.svelte-lgqe7v:hover{color:var(--primary-color)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-lgqe7v" data-svelte-h="svelte-kc0fzo"><h1 class="text-center mt-2 mb-2"><img width="105px"${add_attribute("src", img, 0)} alt="Image"></h1></header> <nav class="svelte-lgqe7v"><ul class="svelte-lgqe7v"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-lgqe7v"><a href="/" class="svelte-lgqe7v" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/info" ? "page" : void 0, 0)} class="svelte-lgqe7v"><a href="/info" class="svelte-lgqe7v" data-svelte-h="svelte-1t2drvf">Info</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} class="svelte-lgqe7v"><a href="/contact" class="svelte-lgqe7v" data-svelte-h="svelte-1jv5m9u">RSVP</a></li></ul> </nav>`;
});
const css = {
  code: ".app.svelte-1u9yko{display:flex;flex-direction:column;min-height:100vh;justify-content:center;max-width:1000px;margin:0 auto}main.svelte-1u9yko{flex:1;display:flex;flex-direction:column;width:100%;margin:0 auto;box-sizing:border-box}footer.svelte-1u9yko{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1u9yko{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1u9yko">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1u9yko"><div>${slots.default ? slots.default({}) : ``}</div></main> <footer class="svelte-1u9yko" data-svelte-h="svelte-fmr3z8"><p></p></footer> </div>`;
});
export {
  Layout as default
};
