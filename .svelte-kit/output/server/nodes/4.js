import * as universal from '../entries/pages/info/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/+page.js";
export const imports = ["_app/immutable/nodes/4.DjUUQwEu.js","_app/immutable/chunks/scheduler.DBi4biwI.js","_app/immutable/chunks/index.D9AWzXAl.js"];
export const stylesheets = ["_app/immutable/assets/4.7jfL1rnJ.css"];
export const fonts = [];
