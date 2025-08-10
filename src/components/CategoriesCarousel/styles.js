import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 55px;
  padding-bottom: 11px;
  position: relative;
  text-align: center;
  font-weight: 800;
  margin-bottom: 22px;
  font-family: 'Road Rage', 'Montserrat', cursive, sans-serif;
  color: #ec710dff;
  text-shadow: 2px 2px 0 #8b4513, 4px 4px 0 #654321,
    6px 6px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(184, 107, 43, 0.6);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 55px;
    height: 5px;
    background-color: #ec710dff;
    left: calc(50% - 25px);
    color: #ec710dff;
  }
`; //FIM

export const Container = styled.div`
  .carousel-item {
    padding-right: 33px;
  }
  cursor: grab;

  padding-left: 33px;
  padding-bottom: 40px; /* Adiciona espaçamento na parte inferior */
  margin-bottom: 40px; /* Garante espaço extra se necessário */
`; //FIM

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden; /* Garante que a imagem não saia das bordas arredondadas */
`; //FIM

export const CategoryButton = styled(Link)`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 22px;
  font-size: 22px;
  margin-top: 50px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: #ec710dff;
  }
`; //FIM
