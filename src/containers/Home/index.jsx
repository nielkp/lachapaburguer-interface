import { Banner, Container, Content } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem Vindos!</h1>
      </Banner>
      <Container>
        <Content>
          <div>Carrosel de Categorias</div>
          <div>Carrosel de Produtos</div>
        </Content>
      </Container>
    </main>
  );
}
