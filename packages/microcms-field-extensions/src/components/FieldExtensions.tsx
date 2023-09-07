import { Frame } from './Frame';
import { Editor } from './Editor';
import { Thumbnail } from './Thumbnail';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';

type Props = {
  origin: string;
  workerURL: string;
};

export const FieldExtensions: React.FC<Props> = ({ origin, workerURL }) => {
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
          path: 'thumbnail',
          element: <Thumbnail />,
        },
        {
          path: 'markdown',
          element: <Editor workerURL={workerURL} />,
        },
        {
          path: '*',
          element: <p>404</p>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
