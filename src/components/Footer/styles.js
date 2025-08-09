import styled from 'styled-components';

export const Container = styled.footer`
  background: linear-gradient(135deg, #ff8c00, #ff6b00, #e55b00);
  width: 100%;
  margin: 0; /* Remove o margin-top: 32px que estava criando a tarja branca */
  padding: 0;
  position: relative;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Text = styled.p`
  color: white;
  font-family: cursive, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
