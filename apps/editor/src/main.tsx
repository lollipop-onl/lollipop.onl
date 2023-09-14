import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter([]);

root.render(<RouterProvider router={router} />);
