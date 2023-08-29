import { Frame } from '@components/Frame';
import { createRoot } from 'react-dom/client';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';

export const render = (rootEl: HTMLElement | null) => {
  if (!rootEl) return;

  const { origin } = rootEl.dataset;

  if (!origin) {
    throw new TypeError('data-origin is required');
  }

  const router = createHashRouter([
    {
      path: '/',
      element: (
        <Frame origin={origin}>
          <Outlet />
        </Frame>
      ),
      children: [
        {
          path: 'hello',
          element: <p>world</p>,
        },
        {
          path: '*',
          element: <p>404</p>,
        },
      ],
    },
  ]);

  const root = createRoot(rootEl);

  root.render(<RouterProvider router={router} />);
};
