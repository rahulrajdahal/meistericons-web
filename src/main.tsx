import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SearchContextProvider, CategoryContextProvider } from './contexts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </SearchContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
