
const CACHE_NAME = "pizarra-matematica-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Mantener las solicitudes de red sin cambios.
  // La conexión con Gemini requiere Internet.
});
