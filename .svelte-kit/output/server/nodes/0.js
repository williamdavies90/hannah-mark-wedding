

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.gwMWCJHn.js","_app/immutable/chunks/scheduler.DBi4biwI.js","_app/immutable/chunks/index.D9AWzXAl.js","_app/immutable/chunks/stores.Bdc7ja7u.js","_app/immutable/chunks/entry.B6t20gnF.js"];
export const stylesheets = ["_app/immutable/assets/0.CkRmd8id.css"];
export const fonts = [];
