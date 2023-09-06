import { MarkedExtension, Renderer } from 'marked';

const renderer = new Renderer();

export const linkCard: MarkedExtension = {
  renderer: {
    paragraph(text) {
      if (!/^https?:\/\/[\w!\?/\+\-_~=;\.,\*&@#\$%\(\)'\[\]]+$/.test(text)) {
        return renderer.paragraph(text);
      }

      return `<link-card url="${text}"></link-card>`;
    },
    link(href, title, text) {
      if (href === text) {
        return href;
      }

      return renderer.link(href, title, text);
    },
  },
};
