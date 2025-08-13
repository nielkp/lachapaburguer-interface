import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import AppProvider from './hooks';
import { Router } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
    </AppProvider>
  </StrictMode>
);
