import { c as create_ssr_component, o as onDestroy, d as add_attribute, e as escape } from "../../chunks/ssr.js";
const mainImg = "/_app/immutable/assets/family.D68amGE4.webp";
const css = {
  code: "header{border-bottom:none !important;z-index:2}h1.svelte-rz4vso a.svelte-rz4vso{color:var(--accent-color2)}.counter.svelte-rz4vso.svelte-rz4vso{margin-top:-84px;color:#FFF;position:relative;z-index:2}.home-bg.svelte-rz4vso.svelte-rz4vso{position:relative}.home-bg.svelte-rz4vso.svelte-rz4vso:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.7) 100%);z-index:1}.home-bg.svelte-rz4vso img.svelte-rz4vso{position:relative;z-index:0}ul.svelte-rz4vso.svelte-rz4vso{padding-left:0px}li.svelte-rz4vso.svelte-rz4vso{display:inline-block;font-size:0.9em;list-style-type:none;padding:1em;text-transform:uppercase;text-align:center}li.svelte-rz4vso span.svelte-rz4vso{display:block;font-size:1.4rem;font-family:'Parisienne', cursive}",
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
  return `${$$result.head += `<!-- HEAD_svelte-p5uo0y_START -->${$$result.title = `<title>Hannah &amp; Mark</title>`, ""}<meta name="description" content="2nd November 2024 | Netley Hall"><!-- HEAD_svelte-p5uo0y_END -->`, ""}  <div class="text-center"><div class="home-bg svelte-rz4vso"><img width="100%"${add_attribute("src", mainImg, 0)} alt="Image" class="svelte-rz4vso"> <ul class="text-center mb-1 counter svelte-rz4vso"><li class="svelte-rz4vso"><span class="svelte-rz4vso">${escape(days)}</span> days</li> <li class="svelte-rz4vso"><span class="svelte-rz4vso">${escape(hours)}</span> Hours</li> <li class="svelte-rz4vso"><span class="svelte-rz4vso">${escape(minutes)}</span> Minutes</li> <li class="svelte-rz4vso"><span class="svelte-rz4vso">${escape(seconds)}</span> Seconds</li></ul></div> <div data-svelte-h="svelte-szowti"><h1 class="mt-4 mb-0 svelte-rz4vso">2nd November 2024<br> <a target="_blank" href="https://netleyhallweddings.com/" class="svelte-rz4vso">Netley Hall</a></h1></div></div> `;
});
export {
  Page as default
};
