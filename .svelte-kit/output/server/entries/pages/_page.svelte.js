import { c as create_ssr_component, o as onDestroy, d as add_attribute, e as escape } from "../../chunks/ssr.js";
const mainImg = "/_app/immutable/assets/family.D68amGE4.webp";
const css = {
  code: "header{background:transparent !important}ul.svelte-b32rx5.svelte-b32rx5{padding-left:0px}li.svelte-b32rx5.svelte-b32rx5{display:inline-block;font-size:0.9em;list-style-type:none;padding:1em;text-transform:uppercase;text-align:center}li.svelte-b32rx5 span.svelte-b32rx5{display:block;font-size:1.4rem;font-family:'Parisienne', cursive}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1szttvg_START -->${$$result.title = `<title>Hannah &amp; Mark</title>`, ""}<meta name="description" content="17th August 2024 | Morrells Wood Farm"><!-- HEAD_svelte-1szttvg_END -->`, ""}  <div class="text-center"><div class="mask position-relative"><div style="left:0;right:0;margin:auto;position:fixed;top:59px;"><img width="100%"${add_attribute("src", mainImg, 0)} alt="Image"> <h1 class="mt-4" data-svelte-h="svelte-k3vh7h">2nd November 2024</h1> <div><ul class="text-center mb-1 svelte-b32rx5"><li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(days)}</span> days</li> <li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(hours)}</span> Hours</li> <li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(minutes)}</span> Minutes</li> <li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(seconds)}</span> Seconds</li></ul> <h2 class="mt-4 mb-2" data-svelte-h="svelte-1eojshs"><a target="_blank" href="https://morrellswoodfarm.co.uk/weddings-and-civil-ceremonies-venue-hire/">Netley Hall</a></h2></div></div> <div data-svelte-h="svelte-rzprfw"></div></div></div> `;
});
export {
  Page as default
};
