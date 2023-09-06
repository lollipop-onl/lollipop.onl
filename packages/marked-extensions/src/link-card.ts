import { MarkedExtension, Renderer } from 'marked';

const renderer = new Renderer();

export const linkCard: MarkedExtension = {
  renderer: {
    paragraph(text) {
      if (/^<link-card url=".+?"><\/link-card>$/.test(text)) {
        return text;
      }

      return renderer.paragraph(text);
    },
    link(href, title, text) {
      if (href === text) {
        return `<link-card url="${href}"></link-card>`;
      }

      return renderer.link(href, title, text);
    },
  },
};
