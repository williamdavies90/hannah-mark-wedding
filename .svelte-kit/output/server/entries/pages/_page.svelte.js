import { c as create_ssr_component, o as onDestroy, e as escape } from "../../chunks/ssr.js";
const css = {
  code: "header{background:transparent !important}.hp-bottom.svelte-b32rx5.svelte-b32rx5{bottom:calc(env(safe-area-inset-bottom) + 80px);left:0;right:0;margin:auto;position:fixed}.home-bg.svelte-b32rx5.svelte-b32rx5{position:relative}.home-bg.svelte-b32rx5.svelte-b32rx5:before{content:'';position:fixed;top:0;left:0;width:100%;height:calc(100vh - 60px);max-height:calc(100vh - 60px);background-image:url('$lib/images/family.webp');background-size:cover;background-position:center;z-index:-1}ul.svelte-b32rx5.svelte-b32rx5{padding-left:0px}li.svelte-b32rx5.svelte-b32rx5{display:inline-block;font-size:0.9em;list-style-type:none;padding:1em;text-transform:uppercase;text-align:center}li.svelte-b32rx5 span.svelte-b32rx5{display:block;font-size:1.4rem;font-family:'Parisienne', cursive}",
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
  return `${$$result.head += `<!-- HEAD_svelte-r05eu2_START -->${$$result.title = `<title>Meg &amp; Joe</title>`, ""}<meta name="description" content="17th August 2024 | Morrells Wood Farm"><!-- HEAD_svelte-r05eu2_END -->`, ""}  <div class="text-center bg-image home-bg svelte-b32rx5"><div class="mask position-relative"><div style="left:0;right:0;margin:auto;position:fixed;top:80px;" data-svelte-h="svelte-1kaluug"><h1 class="mb-2">17th August 2024</h1> <h2 class="mb-2"><a target="_blank" href="https://morrellswoodfarm.co.uk/weddings-and-civil-ceremonies-venue-hire/">Morrells Wood Farm</a></h2></div> <div class="hp-bottom svelte-b32rx5"><div class="text-white"><ul class="text-center mb-1 svelte-b32rx5"><li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(days)}</span> days</li> <li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(hours)}</span> Hours</li> <li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(minutes)}</span> Minutes</li> <li class="svelte-b32rx5"><span class="svelte-b32rx5">${escape(seconds)}</span> Seconds</li></ul></div></div></div></div> `;
});
export {
  Page as default
};
