import { c as create_ssr_component, o as onDestroy, d as add_attribute, e as escape } from "../../chunks/ssr.js";
const mainImg = "/_app/immutable/assets/family.D68amGE4.webp";
const css = {
  code: "header{background:transparent !important;border-bottom:none !important;z-index:2}.counter.svelte-198g9zb.svelte-198g9zb{margin-top:-84px;color:#FFF;position:relative;z-index:2}.home-bg.svelte-198g9zb.svelte-198g9zb{position:relative}.home-bg.svelte-198g9zb.svelte-198g9zb:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);z-index:1}.home-bg.svelte-198g9zb img.svelte-198g9zb{position:relative;z-index:0}ul.svelte-198g9zb.svelte-198g9zb{padding-left:0px}li.svelte-198g9zb.svelte-198g9zb{display:inline-block;font-size:0.9em;list-style-type:none;padding:1em;text-transform:uppercase;text-align:center}li.svelte-198g9zb span.svelte-198g9zb{display:block;font-size:1.4rem;font-family:'Parisienne', cursive}",
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
  return `${$$result.head += `<!-- HEAD_svelte-p5uo0y_START -->${$$result.title = `<title>Hannah &amp; Mark</title>`, ""}<meta name="description" content="2nd November 2024 | Netley Hall"><!-- HEAD_svelte-p5uo0y_END -->`, ""}  <div class="text-center"><div class="home-bg svelte-198g9zb"><img width="100%"${add_attribute("src", mainImg, 0)} alt="Image" class="svelte-198g9zb"> <ul class="text-center mb-1 counter svelte-198g9zb"><li class="svelte-198g9zb"><span class="svelte-198g9zb">${escape(days)}</span> days</li> <li class="svelte-198g9zb"><span class="svelte-198g9zb">${escape(hours)}</span> Hours</li> <li class="svelte-198g9zb"><span class="svelte-198g9zb">${escape(minutes)}</span> Minutes</li> <li class="svelte-198g9zb"><span class="svelte-198g9zb">${escape(seconds)}</span> Seconds</li></ul></div> <div data-svelte-h="svelte-57ewp9"><h1 class="mt-4 mb-0">2nd November 2024</h1> <h2 class="mt-1 mb-2"><a target="_blank" href="https://netleyhallweddings.com/">Netley Hall</a></h2></div></div> `;
});
export {
  Page as default
};
