import * as universal from '../entries/pages/info/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/+page.js";
export const imports = ["_app/immutable/nodes/4.CMoblA1W.js","_app/immutable/chunks/scheduler.DN6_IoXD.js","_app/immutable/chunks/index.BJWO7YZW.js","_app/immutable/chunks/index.DZAw0Jt7.js"];
export const stylesheets = ["_app/immutable/assets/4.Bf9pR87L.css"];
export const fonts = [];
