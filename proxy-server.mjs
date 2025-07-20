import { app as serverEn } from './dist/public-site/browser/server/server.mjs';
import { app as serverBg } from './dist/public-site/browser/server/server.mjs';

const express = require('express');

function run() {
  const port = process.env.PORT || 4000;
  const server = express();

  server.use('/bg', serverBg());
  server.use('/en', serverEn());
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();