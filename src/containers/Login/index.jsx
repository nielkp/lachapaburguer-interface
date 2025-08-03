import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../assets/logotransparente.png';
import { useUser } from '../../hooks/UserContext';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido.')
        .required('O e-mail é obrigatório.'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no minimo 6 caracteres.')
        .required('Digite uma senha.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
            }, 1500);
            return 'Login com sucesso 👌';
          },
        },
        error: 'Email ou Senha Incorretos 🤯',
      }
    );

    putUserData(userData);
    //localStorage.setItem('token', token);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-lachapa-burguer" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>La Chapa Burguer!</span>
          <br />
          Acesse com seu <span>Login e Senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/cadastro">
          Não possui conta? <span>Clique aqui.</span>
        </Link>
      </RightContainer>
    </Container>
  );
}
