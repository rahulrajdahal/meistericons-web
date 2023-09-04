import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SearchContextProvider, CategoryContextProvider } from './contexts';
import IconTypeContextProvider from './contexts/IconTypeContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IconTypeContextProvider>
        <SearchContextProvider>
          <CategoryContextProvider>
            <App />
          </CategoryContextProvider>
        </SearchContextProvider>
      </IconTypeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
