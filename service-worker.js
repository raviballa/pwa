const ballas = "balla-family-site";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/hr1.jpg",
  "/images/hr2.jpg",
  "/images/hr3.jpg",
  "/images/shre1.jpg",
  "/images/shre2.jpg",
  "/images/shru1.jpg",
  "/images/shru2.jpg",
  "/images/shru3.jpg",
  "/images/shre3.jpg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(ballas).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
