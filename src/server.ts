import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';
import { render } from '@netlify/angular-runtime/common-engine'
import { LOCALE_ID } from '@angular/core';
import { REQUEST, RESPONSE } from '../src/express.tokens';


const app = express();

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const lang = basename(serverDistFolder);
const langPath = `/${lang}/`;
const browserDistFolder = resolve(serverDistFolder, `../../browser/${lang}`);
const indexHtml = join(serverDistFolder, 'index.server.html');

const commonEngine = new CommonEngine();

app.set('view engine', 'html');
app.set('views', browserDistFolder);

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  return await render(commonEngine)
}

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('*', (req, res, next) => {
  /**
   * Discard baseUrl as we will provide it with langPath
   */
  const { protocol, originalUrl, headers } = req;
  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: resolve(serverDistFolder, `../../browser/`), // publicPath does not need to concatenate the language.
      providers: [
        { provide: APP_BASE_HREF, useValue: langPath },
        { provide: LOCALE_ID, useValue: lang },
        { provide: RESPONSE, useValue: res },
        { provide: REQUEST, useValue: req },
      ],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
