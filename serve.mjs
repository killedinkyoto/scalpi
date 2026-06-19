import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createGzip, createDeflate } from 'zlib';
import { Readable } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.mjs', '.svg']);

// 1 year for immutable assets, no-cache for HTML
const cacheFor = ext =>
  ['.html'].includes(ext)
    ? 'no-cache'
    : 'public, max-age=31536000, immutable';

const server = createServer(async (req, res) => {
  const url = req.url.split('?')[0];
  const resolved = url === '/' ? '/index.html' : url;
  const filePath = join(__dirname, resolved);

  try {
    const content = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    const contentType = mime[ext] || 'application/octet-stream';

    const acceptEncoding = req.headers['accept-encoding'] || '';
    const shouldCompress = COMPRESSIBLE.has(ext);

    const headers = {
      'Content-Type': contentType,
      'Cache-Control': cacheFor(ext),
      'X-Content-Type-Options': 'nosniff',
    };

    if (shouldCompress && acceptEncoding.includes('gzip')) {
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(200, headers);
      const gzip = createGzip({ level: 6 });
      Readable.from(content).pipe(gzip).pipe(res);
    } else if (shouldCompress && acceptEncoding.includes('deflate')) {
      headers['Content-Encoding'] = 'deflate';
      res.writeHead(200, headers);
      const deflate = createDeflate({ level: 6 });
      Readable.from(content).pipe(deflate).pipe(res);
    } else {
      headers['Content-Length'] = content.length;
      res.writeHead(200, headers);
      res.end(content);
    }
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => console.log('Scalpi dev server → http://localhost:3000'));
