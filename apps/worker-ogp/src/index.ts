import { Hono } from 'hono';
import { poweredBy } from 'hono/powered-by';
import { cache } from 'hono/cache';
import { cors } from 'hono/cors';
import * as cheerio from 'cheerio';

const app = new Hono();

app.use('*', poweredBy());
app.use(
  '*',
  cache({
    cacheName: 'ogp-info',
    cacheControl: 'public, max-age=2592000',
  }),
);
app.use('*', cors());

app.use('/info', async (c) => {
  const { url } = c.req.query();

  if (!url) {
    return c.json({}, 400);
  }

  const res = await fetch(url);

  if (!res.ok) {
    return c.json({}, 404);
  }

  const data = await res.text();
  const $ = cheerio.load(data);

  return c.json({
    title: $('meta[property="og:title"]').attr('content') || $('title').text(),
    description:
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="description"]').attr('content'),
    imageUrl: $('meta[property="og:image"]').attr('content'),
    siteName: $('meta[property="og:site_name"]').attr('content'),
  });
});

export default app;
