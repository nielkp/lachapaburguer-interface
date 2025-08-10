import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { router } from './routes';
import AppProvider from './hooks';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
    </AppProvider>
  </StrictMode>
);
