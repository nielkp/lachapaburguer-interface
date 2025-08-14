import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
  const userData = localStorage.getItem('lachapaburguer:userData');
  const { admin: isAdmin } = userData ? JSON.parse(userData) : { admin: false };

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
