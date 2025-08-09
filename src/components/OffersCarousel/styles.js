import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 55px;
  padding-bottom: 11px;
  position: relative;
  text-align: center;
  font-weight: 800;
  margin-bottom: 66px;
  font-family: 'Road Rage', 'Montserrat', cursive, sans-serif;
  color: #ecc30dff;
  text-shadow: 2px 2px 0 #8b4513, 4px 4px 0 #654321,
    6px 6px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(184, 107, 43, 0.6);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 55px;
    height: 5px;
    background-color: #ecc30dff;
    left: calc(50% - 25px);
    color: #ec710dff;
  }
`;

export const Container = styled.div`
  .carousel-item {
    padding-right: 33px;
  }

  /* Solução simples e eficaz */
  overflow-x: hidden;

  .react-multi-carousel {
    overflow: visible; /* Permite que os cards apareçam completamente */
  }

  .react-multi-carousel-list {
    overflow: visible; /* Lista visível */
  }

  .react-multi-carousel-track {
    overflow: visible; /* Track visível */
  }

  padding-left: 33px;
  padding-right: 33px;
  padding-bottom: 20px; /* Reduzido para não criar espaço desnecessário */
  margin-bottom: 0;

  max-width: 100%;
  box-sizing: border-box;
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;

  position: relative;
  z-index: 1;
  box-sizing: border-box;

  p {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 22px;
    backdrop-filter: blur(2px);
  }
`;
