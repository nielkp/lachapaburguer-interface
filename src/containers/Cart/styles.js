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
`; //FIM

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`; //FIM
