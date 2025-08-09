import BackgroundLanche from '../../assets/omelhorlanche.svg';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
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

export const CategoryMenu = styled.div``; //FIM

export const ProductsContainer = styled.div``; //FIM
