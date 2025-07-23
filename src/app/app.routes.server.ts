// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: '', // This renders the "/" route on the client (CSR)
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'en',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'bg',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'en/services',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'bg/services',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'en/article/:id', // This renders the "/" route on the client (CSR)
    renderMode: RenderMode.Server,
  },
  {
    path: 'bg/article/:id', // This renders the "/" route on the client (CSR)
    renderMode: RenderMode.Server,
  },
  {
    path: '**', // All other routes will be rendered on the server (SSR)
    renderMode: RenderMode.Server,
  },
];