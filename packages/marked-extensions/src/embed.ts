import { TokenizerAndRendererExtension, Renderer } from 'marked';

const renderer = new Renderer();

const renderIFrame = (input: string): string => {
  const url = new URL(input);

  if (url.hostname === 'www.youtube.com') {
    const videoId = encodeURIComponent(url.searchParams.get('v') ?? '');

    return `<iframe class="embed-youtube" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }

  if (url.hostname === 'stackblitz.com') {
    url.searchParams.set('embed', '1');
    url.searchParams.set('ctl', '1');
    url.searchParams.set('theme', 'light');

    return `<iframe class="embed-stackblitz" src="${url.toString()}" allowfullscreen></iframe>`;
  }

  if (url.hostname === 'www.figma.com') {
    const src = encodeURIComponent(`${url.origin}${url.pathname}`);

    return `<iframe class="embed-figma" src="https://www.figma.com/embed?embed_host=astra&url=${src}" allowfullscreen></iframe>`;
  }

  throw new Error('Invalid embed URL');
};

export const embed: TokenizerAndRendererExtension = {
  name: 'embed',
  level: 'block',
  start(src) {
    return /^{{/.exec(src)?.index;
  },
  tokenizer(src) {
    const rule = /^{{ *(https:\/\/.*?) *}}/;
    const match = rule.exec(src);

    if (match) {
      return {
        type: 'embed',
        raw: match[0],
        url: match[1],
      };
    }
  },
  renderer(token) {
    try {
      return renderIFrame(token.url);
    } catch {
      return renderer.link(token.url, null, token.url);
    }
  },
};
