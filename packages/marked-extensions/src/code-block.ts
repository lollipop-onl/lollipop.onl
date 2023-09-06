import type { MarkedExtension } from 'marked';

export const codeBlock = {
  renderer: {
    code(code, info = '', escaped) {
      const [language, fileName = ''] = info.split(':');

      return `<code-block language="${language}" file-name="${fileName}">${code}</code-block>`;
    },
  },
} satisfies MarkedExtension;
