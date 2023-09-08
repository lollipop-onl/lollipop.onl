import { TokenizerAndRendererExtension } from 'marked';

export const imageWithSize: TokenizerAndRendererExtension = {
  name: 'image-with-size',
  level: 'inline',
  start(src) {
    return src.indexOf('![');
  },
  tokenizer(src) {
    const rule = /^!\[(.*?)\]\(([^ ]*?)(?: =(\w+)x(\w+))?\)/;
    const match = rule.exec(src);

    if (match) {
      const [, text, href, width, height] = match;

      if (width && height) {
        return {
          type: 'image-with-size',
          raw: match[0],
          href,
          title: '',
          text,
          width,
          height,
        };
      }
    }
  },
  renderer(token) {
    let out = `<img src="${token.href}" alt="${token.text}" width="${token.width}" height="${token.height}" loading="lazy"`;

    if (token.title) {
      out += ` title="${token.title}"`;
    }

    out += '>';

    return out;
  },
};
