export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1170x2532.png","android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","favicon.png","manifest.json","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","placeholder.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CVSZErrw.js","app":"_app/immutable/entry/app.C_BGgki6.js","imports":["_app/immutable/entry/start.CVSZErrw.js","_app/immutable/chunks/entry.DnnnOhXo.js","_app/immutable/chunks/scheduler.DN6_IoXD.js","_app/immutable/entry/app.C_BGgki6.js","_app/immutable/chunks/scheduler.DN6_IoXD.js","_app/immutable/chunks/index.BJWO7YZW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
