const C='ruta-sig-80853445',A=["./", "index.html", "banco_preguntas.json", "manifest.json", "icono.svg", "audio/01_estructura_comun.mp3", "audio/02_iso_9001.mp3", "audio/03_iso_14001.mp3"];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request))));
