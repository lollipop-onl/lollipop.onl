import { TokenizerAndRendererExtension, Renderer } from 'marked';

const renderer = new Renderer();

const renderIFrame = (input: string): string => {
  const url = new URL(input);

  if (url.hostname === 'www.youtube.com') {
    const videoId = encodeURIComponent(url.searchParams.get('v') ?? '');

    return `<iframe class="embed-youtube" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
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
