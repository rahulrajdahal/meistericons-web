import * as React from 'react';

const HomePage = React.lazy(() => import('./home/HomePage'));
const FigmaPage = React.lazy(() => import('./howtouse/Figma'));
const ReactPage = React.lazy(() => import('./howtouse/ReactPage'));
const NpmPage = React.lazy(() => import('./howtouse/NpmPage'));
const VuePage = React.lazy(() => import('./howtouse/VuePage'));
const Vue3Page = React.lazy(() => import('./howtouse/Vue3Page'));

export { VuePage, Vue3Page, HomePage, FigmaPage, ReactPage, NpmPage };
