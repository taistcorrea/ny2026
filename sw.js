const CACHE = "ny26-v3";
const ASSETS = [
 "./",
 "index.html",
 "styles.css",
 "app.js",
 "data.js",
 "credits.js",
 "manifest.webmanifest",
 "nunito-sans-latin.woff2",
 "apple-touch-icon.png",
 "icon-192.png",
 "icon-512.png",
 "amdream.webp",
 "amnh.webp",
 "apple.webp",
 "barclays.webp",
 "bbpark.webp",
 "bbridge.webp",
 "bethesda.webp",
 "bleecker.webp",
 "bowbridge.webp",
 "bryant.webp",
 "bull.webp",
 "chelsea.webp",
 "dumbo.webp",
 "eataly.webp",
 "ferry.webp",
 "fifth55.webp",
 "flatiron.webp",
 "friends.webp",
 "grandcentral.webp",
 "harriet.webp",
 "highline.webp",
 "hudsonpark.webp",
 "jfk.webp",
 "littleisland.webp",
 "m911.webp",
 "mcny.webp",
 "nebula.webp",
 "oculus.webp",
 "pier57.webp",
 "promenade.webp",
 "rock.webp",
 "soho.webp",
 "stonest.webp",
 "stpatrick.webp",
 "timeout.webp",
 "timessq.webp",
 "traderjoes.webp",
 "tram.webp",
 "unionsq.webp",
 "uws.webp",
 "vessel.webp",
 "washsq.webp",
 "westvillage.webp"
];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  const fresh = e.request.mode === "navigate" || /\.(js|css|webmanifest)$/.test(u.pathname) || u.pathname.endsWith("/");
  if (fresh) {
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(h => h || caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(h => h || fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })));
  }
});
