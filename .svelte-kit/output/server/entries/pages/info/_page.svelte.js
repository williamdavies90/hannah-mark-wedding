import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { F as FontAwesomeIcon } from "../../../chunks/FontAwesomeIcon.js";
import { faMapMarkerAlt, faTshirt, faUtensils, faBaby, faGift, faTaxi, faHotel, faMobile } from "@fortawesome/free-solid-svg-icons";
const css$1 = {
  code: ".accordion.svelte-1dozzq9.svelte-1dozzq9{border-radius:0px;overflow:hidden;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);background-color:var(--secondary-color)}.title-container.svelte-1dozzq9.svelte-1dozzq9{display:flex;align-items:center;justify-content:space-between;padding:15px 20px;cursor:pointer;background-color:var(--secondary-color)}.title-container.svelte-1dozzq9 h3.svelte-1dozzq9{margin-bottom:0px;text-align:left;display:inline;margin-left:15px}.content.svelte-1dozzq9.svelte-1dozzq9{padding:20px;background-color:#fff}.chevron.svelte-1dozzq9.svelte-1dozzq9{transition:transform 0.3s ease;width:24px;height:24px}.rotated.svelte-1dozzq9.svelte-1dozzq9{transform:rotate(180deg)}",
  map: null
};
const InfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { title = "" } = $$props;
  onDestroy(() => {
  });
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div class="accordion svelte-1dozzq9"><div class="title-container svelte-1dozzq9"><span>${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { class: "icon", icon, size: "1x" }, {}, {})}  <h3 class="svelte-1dozzq9">${escape(title)}</h3></span> <svg class="${"chevron " + escape("", true) + " svelte-1dozzq9"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg></div> ${``} </div>`;
});
const paypal = "/_app/immutable/assets/paypal-qr.Bjbp5ZIe.png";
const css = {
  code: ".info-container.svelte-shedtv{display:grid;gap:15px;padding:0px}ul.svelte-shedtv{padding-top:10px;padding-left:15px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1fsrt27_START -->${$$result.title = `<title>Helpful Information</title>`, ""}<meta name="description" content="General Information"><!-- HEAD_svelte-1fsrt27_END -->`, ""} <div style="margin-top: 55px;" data-svelte-h="svelte-1e1bd4g"><div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78642.21719799664!2d-2.61662255564669!3d52.643051259652374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487078f347e489f5%3A0x7c73d812e066dec5!2sMorrells%20Wood%20Farm!5e0!3m2!1sen!2suk!4v1610961600630!5m2!1sen!2suk"></iframe></div></div> <div style="margin-top: 20px; margin-bottom: 100px;" class="container"><div class="info-container svelte-shedtv"><h3 class="mb-0 text-center" data-svelte-h="svelte-1d64fb5">Ceremony at 1pm, <br>guests to arrive from 12.30pm</h3> <p class="mb-3 text-center" data-svelte-h="svelte-1tjh72u"><i>(Music ends at 12am, bar closes 12.30am)</i></p> ${validate_component(InfoCard, "InfoCard").$$render(
    $$result,
    {
      title: "Wedding Venue",
      icon: faMapMarkerAlt
    },
    {},
    {
      default: () => {
        return `<h4 data-svelte-h="svelte-p3gxu0"><a target="_blank" href="https://morrellswoodfarm.co.uk/weddings-and-civil-ceremonies-venue-hire/">Morrells Wood Farm</a></h4> <p data-svelte-h="svelte-15zhz7l">Email: <a href="mailto:contact@morrellswoodfarm.co.uk">contact@morrellswoodfarm.co.uk</a></p> <p data-svelte-h="svelte-uw7wog">Phone: <a href="tel:01952510273">01952 510273</a></p> <p data-svelte-h="svelte-1p28d3o">Address: Morrells Wood Farm, Leighton, Shrewsbury, Shropshire, SY5 6RU</p> <p data-svelte-h="svelte-8u9t3t"><a target="_blank" href="https://www.google.com/maps/dir//Morrells+Wood+Farm+Leighton+Shrewsbury+SY5+6RU/@52.6542332,-2.5892419,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x487078f347e489f5:0x7c73d812e066dec5!2m2!1d-2.5480426!2d52.6541883!3e0?entry=ttu">Get Directions</a></p>`;
      }
    }
  )} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "Dress Code", icon: faTshirt }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1fh9ti4">Whatever you feel comfortable in, but we will be dressing up! Although bear in mind it is a working farm, no expensive shoes!</p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "Food", icon: faUtensils }, {}, {
    default: () => {
      return `<strong data-svelte-h="svelte-x2ovtq">Buffet consisting of:</strong> <ul class="svelte-shedtv" data-svelte-h="svelte-1pscnwc"><li>Sal&#39;s Famous Cheese and Spinach Lasagne</li> <li>Beef Lasagne</li> <li>Chicken Curry</li> <li>Rice</li> <li>Assorted Salads</li> <li>Desserts</li></ul> <p data-svelte-h="svelte-1cz1lam">Pizza will be served in the evening.</p> <p data-svelte-h="svelte-8tv8h">All dietary requirements will be catered for, but can you <a href="mailto:joeandmegwedding@outlook.com?subject=Dietary%20Requirements">please let us know what your requirements are asap</a>. For allergies, the venue may ask you to fill in a form.</p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "Children", icon: faBaby }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-97eqsa">We love you and we love your children, but between the two of us we have nearly 50 gorgeous munchkins in our lives. With this in mind, and the guest limit imposed by the venue, we would really appreciate it if you could leave your children at home. There are of course exceptional circumstances, so get in touch if you feel this is impossible for you.</p>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "Gifts", icon: faGift }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-13ktxuc">Your presence is our greatest gift. However, if you wish to give something, <strong>contributions towards our honeymoon</strong> (we have provided a PayPal QR code below) or donations to <a target="_blank" href="https://www.shropshirecatrescue.org.uk/donate">Shropshire Cat Rescue</a> or <a target="_blank" href="https://www.pancreaticcancer.org.uk/donate/">Pancreatic Cancer UK</a> would be greatly appreciated.</p> <img width="150px"${add_attribute("src", paypal, 0)} alt="paypal">`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "Transport", icon: faTaxi }, {}, {
    default: () => {
      return `<strong data-svelte-h="svelte-a3laly">Parking:</strong> <p data-svelte-h="svelte-iba1zt">Ample parking is available for those driving.</p> <strong data-svelte-h="svelte-15enbj">Local Taxi Numbers:</strong> <ul class="svelte-shedtv" data-svelte-h="svelte-1bxummg"><li>Veezu: <a href="tel:01743441144">01743 441144</a></li> <li>Shropshire Cars: <a href="tel:07379338526">07379 338 526</a></li> <li>Star Cars: <a href="tel:01743353535">01743 353535</a></li> <li>Taxi Now: <a href="tel:01743818283">01743 818283</a></li></ul>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "Accommodation", icon: faHotel }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-5s7tr">There are numerous excellent local accommodation options. We recommend booking early to ensure availability.</p> <strong data-svelte-h="svelte-l6kin8">Within 5 minutes of the venue:</strong> <ul class="svelte-shedtv" data-svelte-h="svelte-yndfdv"><li><a target="_blank" href="https://www.thewroxeterhotel.co.uk/">The Wroxeter Hotel</a></li></ul> <strong data-svelte-h="svelte-u9guwh">Within 10 minutes:</strong> <ul class="svelte-shedtv" data-svelte-h="svelte-cto1zv"><li><a target="_blank" href="https://www.brunningandprice.co.uk/myttonandmermaid/">Mytton and Mermaid</a></li> <li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214435727115335?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=534d0518-4ec3-4eac-b7b0-91fd2faccd60">Airbnb - Shrewsbury</a></li> <li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214323096529822?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=3ebbb628-dd4a-433f-9844-f28cadd66b36">Airbnb - Shrewsbury</a></li> <li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214656263721124?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=6cbb3da3-64f5-4678-8efc-e7d35fc0ab59">Airbnb - Shrewsbury</a></li> <li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214542132186926?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=4d457d3b-15dd-4af6-a69e-3ed058479561">Airbnb - Shrewsbury</a></li></ul> <strong data-svelte-h="svelte-a2i64s">Within 15 minutes:</strong> <ul class="svelte-shedtv" data-svelte-h="svelte-1jd9quo"><li><a target="_blank" href="https://www.oldhallcressage.co.uk/">Old Hall Cressage</a></li> <li><a target="_blank" href="https://www.chefandbrewer.com/pubs/shropshire/riverside-inn">Riverside Inn</a></li></ul>  <ul class="svelte-shedtv" data-svelte-h="svelte-14w7pyc"><li><a target="_blank" href="https://www.princeruperthotel.co.uk/">Prince Rupert Hotel</a></li> <li><a target="_blank" href="https://www.oldpostofficepub.co.uk/en-GB">Old Post Office Pub</a></li> <li><a target="_blank" href="https://www.premierinn.com/gb/en/hotels/england/shropshire/shrewsbury/shrewsbury-town-centre.html?cid=GLBC_SHRSMI">Premier Inn Shrewsbury Town Centre</a></li></ul>`;
    }
  })} ${validate_component(InfoCard, "InfoCard").$$render($$result, { title: "Install App", icon: faMobile }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-10oqdbq">Install this website on your home screen for a seamless app-like experience, providing immediate access to essential information and directions.</p> <strong data-svelte-h="svelte-t8setn">Android:</strong> <p data-svelte-h="svelte-1nlgm3l">Tap the menu icon (3 dots in the upper right corner).</p> <p data-svelte-h="svelte-53dmc5">Tap &quot;Install App&quot;</p> <strong data-svelte-h="svelte-1gisy95">iPhone:</strong> <p data-svelte-h="svelte-ns0tz1">Find and tap the Share icon (square with an arrow pointing out) at the top or bottom of your browser screen.</p> <p data-svelte-h="svelte-zrfucc">Scroll down and tap &quot;Add to Home Screen.&quot;</p><br> <p data-svelte-h="svelte-1a3pfti"><strong>You should now be able to find the icon within your apps.</strong></p>`;
    }
  })}</div> </div>`;
});
export {
  Page as default
};
