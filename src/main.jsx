import GlobalStyles from './styles/globalStyles';
import { createRoot } from 'react-dom/client';
import { Login } from './containers/Login';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Login />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>
);
