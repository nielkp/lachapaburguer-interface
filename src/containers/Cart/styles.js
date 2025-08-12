import Texture from '../../assets/background-cinza.svg';
import Background from '../../assets/backgroundlogin.avif';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  min-height: 100vh;
`; //FIM

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 200px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    height: 120px;

    img {
      height: 140px;
    }
  }

  @media (max-width: 480px) {
    height: 100px;

    img {
      height: 120px;
    }
  }
`; //FIM

export const Title = styled.div`
  font-size: 33px;
  font-weight: 800;
  padding-bottom: 11px;
  color: greenyellow;
  text-align: center;
  position: relative;
  text-shadow: #000 2px 2px 3px;

  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: greenyellow;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    padding: 0 15px;

    &::after {
      left: calc(50% - 20px);
      width: 40px;
      height: 3px;
    }
  }
`; //FIM

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    gap: 10px;
  }
`; //FIM
