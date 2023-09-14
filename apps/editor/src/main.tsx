import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { EditorProvider } from '@components/EditorProvider';
import { MarkdownEditor } from '@components/MarkdownEditor';

import 'tailwindcss/tailwind.css';

const root = createRoot(document.getElementById('root')!);

console.log(import.meta.env.VITE_WORKER_EDITOR_ENDPOINT);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <EditorProvider>
        <Outlet />
      </EditorProvider>
    ),
    children: [
      {
        path: 'md',
        element: (
          <MarkdownEditor
            workerURL={import.meta.env.VITE_WORKER_EDITOR_ENDPOINT}
          />
        ),
      },
      {
        path: '*',
        element: <p>Unavailable URL</p>,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
