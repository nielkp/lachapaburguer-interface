import { CategoriesCarousel, OffersCarousel } from '../../components';
import { Banner, Container, Content } from './styles';
import { useUser } from '../../hooks/UserContext';
import { Footer } from '../../components/Footer';

export function Home() {
  console.log(useUser());
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
