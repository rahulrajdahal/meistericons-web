import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePageLayout } from '@/components/layouts';
import { FigmaPage, HomePage, NpmPage, ReactPage } from '@/pages';
import HowtoUsePageLayout from './components/layouts/HowtoUsePageLayout';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: (
            <HomePageLayout>
              <HomePage />
            </HomePageLayout>
          ),
        },
        {
          path: 'how-to-use',
          children: [
            {
              index: true,
              path: 'figma',
              element: (
                <HowtoUsePageLayout>
                  <FigmaPage />
                </HowtoUsePageLayout>
              ),
            },
            {
              path: 'react',
              element: (
                <HowtoUsePageLayout>
                  <ReactPage />
                </HowtoUsePageLayout>
              ),
            },
            {
              path: 'npm',
              element: (
                <HowtoUsePageLayout>
                  <NpmPage />
                </HowtoUsePageLayout>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
