import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as FontAwesomeIcon } from "../../../chunks/FontAwesomeIcon.js";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1cxpgtt_START -->${$$result.title = `<title>Contact</title>`, ""}<meta name="description" content="Contact/RSVP"><!-- HEAD_svelte-1cxpgtt_END -->`, ""} <div style="margin-top: 85px;" class="container"><div class="text-column text-center"><h3 class="text-center" data-svelte-h="svelte-a5757h">RSVP by 17th May 2024</h3> <p class="text-center" data-svelte-h="svelte-1bf8sue">To RSVP or for any other queries please contact the bride or groom using the below details:</p> ${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render(
    $$result,
    {
      style: "color: #344235;",
      class: "icon",
      icon: faWhatsapp,
      size: "1x"
    },
    {},
    {}
  )} <a href="https://wa.me/+447446015895" data-svelte-h="svelte-1a650tq">WhatsApp</a><br><br> ${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render(
    $$result,
    {
      style: "color: #344235;",
      class: "icon",
      icon: faPhone,
      size: "1x"
    },
    {},
    {}
  )} <a href="tel:07446015895" data-svelte-h="svelte-1ljssqx">07446015895</a><br><br> ${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render(
    $$result,
    {
      style: "color: #344235;",
      class: "icon",
      icon: faEnvelope,
      size: "1x"
    },
    {},
    {}
  )} <a href="mailto:joeandmegwedding@outlook.com?subject=Meg%20%26%20Joe%20Wedding" data-svelte-h="svelte-e3d3z9">joeandmegwedding@outlook.com</a><br><br></div> </div>`;
});
export {
  Page as default
};
