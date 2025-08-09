import { Footer } from '../../components/Footer';
import { Banner, CategoryMenu, Container, ProductsContainer } from './styles';

export function Menu() {
  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistivel!</span>
        </h1>
      </Banner>
      <CategoryMenu></CategoryMenu>
      <ProductsContainer></ProductsContainer>
      <Footer />
    </Container>
  );
}
