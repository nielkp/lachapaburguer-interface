import { createBrowserRouter } from 'react-router-dom';
import { Register } from '../containers/Register';
import { Login } from '../containers/Login';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
]);
