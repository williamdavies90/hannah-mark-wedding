import * as universal from '../entries/pages/contact/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/3.DtiPT3xM.js","_app/immutable/chunks/scheduler.thrxAyda.js","_app/immutable/chunks/index.GD0kmtdH.js"];
export const stylesheets = [];
export const fonts = [];
