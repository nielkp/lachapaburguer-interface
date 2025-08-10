import { ShoppingCartIcon, UserSquareIcon } from '@phosphor-icons/react';
import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserSquareIcon color="#fff" size={33} />
            <div>
              <p>
                Olá, <span>Niel</span>
              </p>
              <Logout>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCartIcon color="#fff" size={33} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
