import {
  TokenizerAndRendererExtension,
  MarkedExtension,
  Tokens,
  Tokenizer,
  Renderer,
  Lexer,
} from 'marked';

export const imageWithSize: TokenizerAndRendererExtension = {
  name: 'image-with-size',
  level: 'inline',
  start(src) {
    return src.indexOf('![');
  },
  tokenizer(src, tokens) {
    const rule = /^!\[(.*?)\]\(([^ ]*?)(?: =(\w+)x(\w+))?\)/;
    const match = rule.exec(src);

    if (match) {
      const [, text, href, width, height] = match;

      if (width && height) {
        const token: Tokens.Generic = {
          type: 'image-with-size',
          raw: match[0],
          href,
          title: '',
          text,
          width,
          height,
        };

        return token;
      }
    }
  },
  renderer(token) {
    let out = `<img src="${token.href}" alt="${token.text}" width="${token.width}" height="${token.height}"`;

    if (token.title) {
      out += ` title="${token.title}"`;
    }

    out += '>';

    return out;
  },
};
