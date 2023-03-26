import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '@/components/layouts';
import { HomePage } from '@/pages';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: (
            <PageLayout>
              <HomePage />
            </PageLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
