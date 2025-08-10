import { createBrowserRouter } from 'react-router-dom';
import { Register } from '../containers/Register';
import { Header } from '../components/Header';
import { Login } from '../containers/Login';
import { Home } from '../containers/Home';
import { Menu } from '../containers/Menu';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
]);
