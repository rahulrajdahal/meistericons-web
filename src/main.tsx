import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { StyleContextProvider } from '@/contexts';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-R2NWSCJRJZ';
ReactGA.initialize(TRACKING_ID);

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StyleContextProvider>
  </React.StrictMode>,
);
