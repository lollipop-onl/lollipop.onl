import { Frame } from '@components/Frame';
import { Editor } from '@components/Editor';
import { Thumbnail } from '@components/Thumbnail';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';

type Props = {
  origin: string;
};

export const FieldExtensions: React.FC<Props> = ({ origin }) => {
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
          element: <Editor />,
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
