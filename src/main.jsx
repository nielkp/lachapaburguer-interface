import { createRoot } from 'react-dom/client';
import { Login } from './containers/Login';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
