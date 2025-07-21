import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';
import { render } from '@netlify/angular-runtime/common-engine'

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

// Serve static files from /browser
app.use(express.static(browserDistFolder, {
  maxAge: '1y'
}));

// Serve static files from /public directory at the root
app.use('/public', express.static(join(browserDistFolder, 'public'), {
  maxAge: '1y'
}));

// Serve localized static files
app.use('/bg/public', express.static(join(browserDistFolder, 'public'), {
  maxAge: '1y'
}));

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
  return await render(commonEngine)
}

app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  // Determine the locale from the URL
  const locale = originalUrl.startsWith('/bg') ? 'bg' : 'en';
  const baseHref = locale === 'bg' ? '/bg/' : '/';

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseHref }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
