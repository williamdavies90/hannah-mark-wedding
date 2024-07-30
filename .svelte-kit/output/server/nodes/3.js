import * as universal from '../entries/pages/contact/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/3.BUGyFlOc.js","_app/immutable/chunks/scheduler.DN6_IoXD.js","_app/immutable/chunks/index.BJWO7YZW.js","_app/immutable/chunks/index.DZAw0Jt7.js"];
export const stylesheets = [];
export const fonts = [];
