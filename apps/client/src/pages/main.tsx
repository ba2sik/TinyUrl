import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { ErrorPage } from './error/ErrorPage';
import { Loader } from '../components';
import { Dashboard } from './Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.ADMIN,
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={router}
        fallbackElement={<Loader />}
      />
    </QueryClientProvider>
  </React.StrictMode>,
);
