if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}})).then(e=>{const s=c(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-c617bd83"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"04cbb1c8.js",revision:"ad7a7f9e08cdcaf9d0e940c0c439125b"},{url:"31c60384.js",revision:"c8d4b37ec54fc3101359df6cdd320167"},{url:"33418471.js",revision:"6b69a79772465544d27673aa972a284a"},{url:"579ec6d5.js",revision:"89243f8a844aee6c7104decbf874fdb4"},{url:"config.js",revision:"2c647ee2be5585a5d00568cc1c8578a0"},{url:"fonts/fonts.css",revision:"8966150370b060a93c1e1878593f465d"},{url:"L.Control.Locate.min.css",revision:"e6109be62f05d9a72eb0abc026f56e75"},{url:"leaflet.css",revision:"5c761a156eea82263d8bacf1718fe04d"},{url:"tippy.css",revision:"49887f70bffca85b0dd22ebfc430f693"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/api.*/]})),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map