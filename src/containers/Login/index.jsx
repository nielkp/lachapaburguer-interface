import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';
import Logo from '../../assets/logotransparente.png';
import { Button } from '../../components/Button';

export function Login() {
  return (
      <Container>
        <LeftContainer>
          <img src={Logo} alt="logo-lachapa-burguer" />
        </LeftContainer>

        <RightContainer>
          <Title>Olá, seja bem vindo ao <span>La Chapa Burguer!</span>
          <br />Acesse com seu <span>Login e Senha.</span>
          </Title>

          <Form>
            <InputContainer>
              <label>Email</label>
              <input type="email" />
            </InputContainer>

            <InputContainer>
              <label>Senha</label>
              <input type="password" />
            </InputContainer>
            <Button>Entrar</Button>
          </Form>

          <Link>Não possui conta? <span>Clique aqui.</span></Link>

        </RightContainer>
      </Container>
  );
}
