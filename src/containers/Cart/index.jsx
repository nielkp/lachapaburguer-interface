import Logo from '../../assets/logotransparente.png';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo la chapa" />
      </Banner>
      <Title>Finalizar Pedido</Title>
      <Content>
        {/* <CartItems/>
        <CartResume/> */}
      </Content>
    </Container>
  );
}
