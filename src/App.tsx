import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePageLayout } from '@/components/layouts';
import { FigmaPage, HomePage, NpmPage, ReactPage, Vue3Page, VuePage } from '@/pages';
import HowtoUsePageLayout from './components/layouts/HowtoUsePageLayout';
import ReactGA from 'react-ga4';

export default function App() {
  React.useEffect(() => {
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

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
            {
              path: 'vue',
              element: (
                <HowtoUsePageLayout>
                  <VuePage />
                </HowtoUsePageLayout>
              ),
            },
            {
              path: 'vue-3',
              element: (
                <HowtoUsePageLayout>
                  <Vue3Page />
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
