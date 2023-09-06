import { MarkedExtension, Renderer } from 'marked';

const renderer = new Renderer();

export const ogLink: MarkedExtension = {
  renderer: {
    paragraph(text) {
      if (!/^https?:\/\//.test(text)) {
        return renderer.paragraph(text);
      }

      return `<og-link>${text}</og-link>`;
    },
    link(href, title, text) {
      if (href === text) {
        return href;
      }

      return renderer.link(href, title, text);
    },
  },
};
