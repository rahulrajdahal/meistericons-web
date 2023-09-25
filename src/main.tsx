import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { StyleContextProvider, IconContextProvider } from './contexts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleContextProvider>
      <QueryClientProvider client={queryClient}>
        <IconContextProvider>
          <App />
        </IconContextProvider>
      </QueryClientProvider>
    </StyleContextProvider>
  </React.StrictMode>,
);
