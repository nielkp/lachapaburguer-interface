import {
  ShoppingCartIcon,
  UserSquareIcon,
  List,
  X,
} from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
  MobileMenuButton,
  MobileMenu,
  MobileNavigation,
  Logo,
  MobileMenuContainer,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { pathname } = useResolvedPath();

  function logoutUser() {
    logout();
    navigate('/login');
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink
              to="/"
              $isActive={pathname === '/'}
              onClick={closeMobileMenu}
            >
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink
              to="/cardapio"
              $isActive={pathname === '/cardapio'}
              onClick={closeMobileMenu}
            >
              Cardápio
            </HeaderLink>
            <hr></hr>
            <HeaderLink
              to="/meus-pedidos"
              $isActive={pathname === '/meus-pedidos'}
              onClick={closeMobileMenu}
            >
              Pedidos
            </HeaderLink>
          </div>
        </Navigation>

        <MobileMenuContainer>
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X size={20} color="#fff" />
            ) : (
              <List size={20} color="#fff" />
            )}
          </MobileMenuButton>
          <Logo>La Chapa Burguer 🍔</Logo>
        </MobileMenuContainer>

        <Options>
          <Profile>
            <UserSquareIcon color="#fff" size={33} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <HeaderLink to="/carrinho" onClick={closeMobileMenu}>
              <ShoppingCartIcon color="#fff" size={33} />
              <span>Carrinho</span>
            </HeaderLink>
          </LinkContainer>
        </Options>
      </Content>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavigation>
          <HeaderLink
            to="/"
            $isActive={pathname === '/'}
            onClick={closeMobileMenu}
          >
            Home
          </HeaderLink>
          <HeaderLink
            to="/cardapio"
            $isActive={pathname === '/cardapio'}
            onClick={closeMobileMenu}
          >
            Cardápio
          </HeaderLink>
          <HeaderLink
            to="/meus-pedidos"
            $isActive={pathname === '/meus-pedidos'}
            onClick={closeMobileMenu}
          >
            Pedidos
          </HeaderLink>
          <HeaderLink to="/carrinho" onClick={closeMobileMenu}>
            <ShoppingCartIcon color="#fff" size={20} />
            Carrinho
          </HeaderLink>
          <div
            style={{
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid #625e5e',
            }}
          >
            <p style={{ color: '#fff', marginBottom: '10px' }}>
              Olá,{' '}
              <span style={{ color: '#ff8c00', fontWeight: '700' }}>
                {userInfo.name}
              </span>
            </p>
            <Logout
              onClick={() => {
                logoutUser();
                closeMobileMenu();
              }}
            >
              Sair
            </Logout>
          </div>
        </MobileNavigation>
      </MobileMenu>
    </Container>
  );
}
