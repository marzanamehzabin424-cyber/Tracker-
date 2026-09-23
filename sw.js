// ন্যূনতম Service Worker — শুধুমাত্র PWA installability requirement পূরণের জন্য।
// এটা কোনো offline caching করে না (app-এর ডেটা সম্পূর্ণভাবে LocalStorage-ভিত্তিক,
// তাই আলাদা cache strategy-র প্রয়োজন নেই)।
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  // pass-through — normal network request-ই চলবে
});
