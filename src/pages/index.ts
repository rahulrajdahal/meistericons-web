import * as React from 'react';

const HomePage = React.lazy(() => import('./home/HomePage'));
const FigmaPage = React.lazy(() => import('./howtouse/Figma'));
const ReactPage = React.lazy(() => import('./howtouse/ReactPage'));
const NpmPage = React.lazy(() => import('./howtouse/NpmPage'));

export { HomePage, FigmaPage, ReactPage, NpmPage };
