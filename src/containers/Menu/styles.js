import BackgroundLanche from '../../assets/omelhorlanche.svg';
import Background from '../../assets/backgroundlogin.avif';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${Background});
`; //FIM

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? '#ff6b00' : '#252525ff')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #ff6b00'};
`; //FIM

export const Banner = styled.div`
  display: center;
  justify-content: center;
  align-items: center;
  background: url('${BackgroundLanche}') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  height: 420px;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 66px;
    color: white;
    position: absolute;
    right: 20%;
    top: 20%;

    span {
      font-family: 'Roboto', sans-serif;
      display: block;
      color: white;
      font-size: 20px;
    }
  }
`; //FIM

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`; //FIM

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; // Adicione esta linha para espaçamento entre os produtos
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
