export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","1170x2532.png","android-chrome-192x192.png","android-chrome-512x512.png","android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","apple-touch-icon.png","bg.webp","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","manifest.json","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","robots.txt","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".json":"application/json",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bhe0WmSa.js","app":"_app/immutable/entry/app.C407gaO8.js","imports":["_app/immutable/entry/start.Bhe0WmSa.js","_app/immutable/chunks/entry.C_WXpjuz.js","_app/immutable/chunks/scheduler.DBi4biwI.js","_app/immutable/entry/app.C407gaO8.js","_app/immutable/chunks/scheduler.DBi4biwI.js","_app/immutable/chunks/index.D9AWzXAl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
