import { createBrowserRouter } from 'react-router-dom';
import { Register } from '../containers/Register';
import { Login } from '../containers/Login';
import { Home } from '../containers/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
]);
