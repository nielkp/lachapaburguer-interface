import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Banner, Container, Content } from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>
          Bem Vindos!
          <br />
          LA CHAPA BURGUER!
        </h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel />
          <OffersCarousel />
        </Content>
      </Container>
      <Footer />
    </main>
  );
}
