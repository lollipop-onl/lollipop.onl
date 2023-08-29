import { createRoot } from 'react-dom/client';

export const render = (rootEl: HTMLElement | null) => {
  if (!rootEl) return;

  console.log(rootEl);

  const root = createRoot(rootEl);

  root.render(<p>hello</p>);
};
