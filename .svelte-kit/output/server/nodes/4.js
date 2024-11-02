import * as universal from '../entries/pages/info/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/+page.js";
export const imports = ["_app/immutable/nodes/4.ZqKgAfQA.js","_app/immutable/chunks/scheduler.thrxAyda.js","_app/immutable/chunks/index.GD0kmtdH.js"];
export const stylesheets = ["_app/immutable/assets/4.B-XdOLN7.css"];
export const fonts = [];
