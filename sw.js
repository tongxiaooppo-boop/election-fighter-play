// 自動產生（tools/deploy/make-sw.mjs），不要手改
const CACHE = 'ef-7bb4dabac459';
const FILES = ["./","./assets/bazong-CiloDyU5.webp","./assets/beiqingjie-Dy7FZWUN.webp","./assets/council-DVFlmRjo.webp","./assets/dongzai-CSuKrihT.webp","./assets/head-B2UjUfUm.webp","./assets/head-BBlxD7xy.webp","./assets/head-BOhpFFKq.webp","./assets/head-C1Xkz6n_.webp","./assets/head-DqUQ7zGs.webp","./assets/head-og1Vw0A2.webp","./assets/index-BkblDzYo.js","./assets/index-CM7w-NPJ.css","./assets/jiaoshou-BbGcXAdE.webp","./assets/jiebiwang-BjWMaY1t.webp","./assets/liuliangge-BItRHpYF.webp","./assets/nightmarket-BHEmTZR_.webp","./assets/park-ByCbBgEr.webp","./assets/studio-CwUp09rL.webp","./assets/thigh-CCeRWz7N.webp","./assets/torso-6APZWcO7.webp","./assets/torso-BPDTRkiT.webp","./assets/torso-BTyEaLEc.webp","./assets/torso-CZrx2RpR.webp","./assets/torso-Cakr8L32.webp","./assets/torso-DHaFjptt.webp","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./manifest.webmanifest"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // 頁面：先上網拿最新版，離線才用快取
    e.respondWith(fetch(req).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
