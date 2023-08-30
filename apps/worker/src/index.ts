import { Hono } from 'hono';
import { poweredBy } from 'hono/powered-by';

const app = new Hono<{
  Bindings: {
    GYAZO_ACCESS_TOKEN: string;
    GYAZO_COLLECTION_ID?: string;
  };
}>();

app.use('*', poweredBy());

app.put('/gyazo/upload', async (c) => {
  const blob = await c.req.blob();
  const form = new FormData();

  form.append('access_token', c.env.GYAZO_ACCESS_TOKEN);
  form.append('imagedata', blob, 'capture.png');
  form.append('app', 'simochee.net');

  if (c.env.GYAZO_COLLECTION_ID) {
    form.append('collection_id', c.env.GYAZO_COLLECTION_ID);
  }

  const res = await fetch('https://upload.gyazo.com/api/upload', {
    method: 'post',
    body: form,
  });

  if (!res.ok) {
    const data = await res.text();

    return c.json(
      {
        status: res.status,
        data,
      },
      res.status,
    );
  }

  const { image_id, thumb_url, url } = await res.json<any>();

  return c.json({
    id: image_id,
    url: url,
    thumbUrl: thumb_url,
  });
});

export default app;
