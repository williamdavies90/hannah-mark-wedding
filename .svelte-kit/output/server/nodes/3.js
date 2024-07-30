import * as universal from '../entries/pages/contact/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/3.WidFJgwt.js","_app/immutable/chunks/scheduler.DBi4biwI.js","_app/immutable/chunks/index.Bkr4xly6.js","_app/immutable/chunks/index.CjIeZ8T1.js"];
export const stylesheets = [];
export const fonts = [];
