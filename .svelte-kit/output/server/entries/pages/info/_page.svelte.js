import { c as create_ssr_component, o as onDestroy, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: ".accordion.svelte-1nwc7rq.svelte-1nwc7rq{border-radius:0px;overflow:hidden;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);background-color:transparent}.title-container.svelte-1nwc7rq.svelte-1nwc7rq{display:flex;align-items:center;justify-content:space-between;padding:15px 20px;cursor:pointer;background-color:transparent;border:1px solid var(--primary-color);border-radius:5px}.title-container.svelte-1nwc7rq h3.svelte-1nwc7rq{margin-bottom:0px;text-align:left;display:inline;color:var(--primary-color)}.content.svelte-1nwc7rq.svelte-1nwc7rq{padding:20px;background-color:#fff}.chevron.svelte-1nwc7rq.svelte-1nwc7rq{transition:transform 0.3s ease;width:24px;height:24px;color:var(--accent-color)}.rotated.svelte-1nwc7rq.svelte-1nwc7rq{transform:rotate(180deg)}",
  map: null
};
const InfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  onDestroy(() => {
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div class="accordion svelte-1nwc7rq"><div class="title-container svelte-1nwc7rq"><span><h3 class="svelte-1nwc7rq"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h3></span> <svg class="${"chevron " + escape("", true) + " svelte-1nwc7rq"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg></div> ${``} </div>`;
});
const css = {
  code: ".info-container.svelte-cds0d3{display:grid;gap:15px;padding:0px}.gold.svelte-cds0d3{font-family:'Dancing Script', cursive;color:var(--accent-color2);font-size:20px !important}.guest-text.svelte-cds0d3{font-size:14px !important}ul.svelte-cds0d3{padding-top:10px;padding-left:15px}.title-container h3 span{margin-right:20px;margin-top:5px;display:block;height:21px;width:30px;float:left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1fsrt27_START -->${$$result.title = `<title>Helpful Information</title>`, ""}<meta name="description" content="General Information"><!-- HEAD_svelte-1fsrt27_END -->`, ""} <div data-svelte-h="svelte-81u84u"><div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.6983434894128!2d-2.7819027230580216!3d52.61122322947126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487074ebd441d101%3A0xce6dad305fd3001a!2sNetley%20Hall%20Weddings!5e0!3m2!1sen!2suk!4v1722867771973!5m2!1sen!2suk"></iframe></div></div> <div style="margin-top: 20px; margin-bottom: 100px;" class="container"><div class="info-container svelte-cds0d3"><div class="row" data-svelte-h="svelte-qz2ogl"><div class="col-6"><h3 class="mb-0 text-center">Day Guests</h3> <p class="mb-0 text-center guest-text svelte-cds0d3">Ceremony at 1pm,<br>guests to arrive from 12.30pm</p></div> <div class="col-6"><h3 class="mb-0 text-center">Evening Guests</h3> <p class="mb-0 text-center guest-text svelte-cds0d3">Guests to arrive<br>from 7pm</p></div></div> <p class="mb-3 text-center gold svelte-cds0d3" data-svelte-h="svelte-1mqj2qh">Bar open until 12.30am, DJ playing until 1am.</p> ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "<span>🏩</span> Wedding Venue" }, {}, {
    default: () => {
      return `<h4 data-svelte-h="svelte-6lmioa"><a target="_blank" href="https://netleyhallweddings.com/">Netley Hall Dorrington</a></h4> <p data-svelte-h="svelte-d563u8">Phone: <a href="tel:01743718339">01743 718339</a></p> <p data-svelte-h="svelte-spc9pe">Address: Netley Hall, Dorrington, Shrewsbury, SY5 7JZ</p> <p data-svelte-h="svelte-148i70o"><a target="_blank" href="https://www.google.com/maps/dir//Netley+Hall+Weddings+Netley+Hall+Netley+Dorrington+SY5+7JZ/@52.6106491,-2.7814526,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x487074ebd441d101:0xce6dad305fd3001a">Get Directions</a></p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "<span>🎭</span> Dress Code" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1ajwlhh">Don&#39;t forget your dancing shoes and dress to impress for our Halloween Masquerade Ball.</p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "<span>🍽</span> Food" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-jho9zt">Wedding Breakfast: Chicken Liver Pate, Roast Pork and Sticky Toffee Pudding</p> <p data-svelte-h="svelte-13htv">Evening Reception: North African Roasted Leg of Lamb with Pitta Bread and Harissa Mayo</p> <p data-svelte-h="svelte-bwmcjl">Please advise ASAP of any allergy and dietary requirements.</p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "<span>🎁</span> Gifts" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1gsum2d">Many of you will travel long distances to share our wedding day with us, so please do not feel obliged to get us anything else. However, if you would like to buy us a gift, a contribution towards our honeymoon would be really appreciated.</p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "<span>🚕</span> Transport" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-34ape7">Netley Hall has plenty of parking for those driving, otherwise local taxis can be booked.</p> <strong data-svelte-h="svelte-15enbj">Local Taxi Numbers:</strong> <ul class="svelte-cds0d3" data-svelte-h="svelte-1bxummg"><li>Veezu: <a href="tel:01743441144">01743 441144</a></li> <li>Shropshire Cars: <a href="tel:07379338526">07379 338 526</a></li> <li>Star Cars: <a href="tel:01743353535">01743 353535</a></li> <li>Taxi Now: <a href="tel:01743818283">01743 818283</a></li></ul>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "<span>🏨</span> Accommodation" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-7caw61">Netley Hall has a number of rooms that have been reserved for the Bride, Groom and their families. These have been allocated with payment to be made directly to Hannah and Mark.</p> <p data-svelte-h="svelte-r974pw">There are also a limited number of holiday cottages within the grounds available to book on a first come, first served basis. These can be booked by contacting Netley Hall directly and informing them that you are attending Hannah and Mark’s wedding on 2nd November 2024.</p> <p data-svelte-h="svelte-4umagt">Shrewsbury is located 10 minutes away with a variety of hotels and bookable accommodation.</p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "<span>📱</span> Install App" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-10oqdbq">Install this website on your home screen for a seamless app-like experience, providing immediate access to essential information and directions.</p> <strong data-svelte-h="svelte-t8setn">Android:</strong> <p data-svelte-h="svelte-1nlgm3l">Tap the menu icon (3 dots in the upper right corner).</p> <p data-svelte-h="svelte-53dmc5">Tap &quot;Install App&quot;</p> <strong data-svelte-h="svelte-1gisy95">iPhone:</strong> <p data-svelte-h="svelte-ns0tz1">Find and tap the Share icon (square with an arrow pointing out) at the top or bottom of your browser screen.</p> <p data-svelte-h="svelte-zrfucc">Scroll down and tap &quot;Add to Home Screen.&quot;</p><br> <p data-svelte-h="svelte-1a3pfti"><strong>You should now be able to find the icon within your apps.</strong></p>`;
    }
  })}</div> </div>`;
});
export {
  Page as default
};
