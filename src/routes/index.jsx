import { Home, Cart, Login, Menu, Register } from '../containers';
import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';

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
  {
    path: '/carrinho',
    element: <Cart />,
  },
]);
