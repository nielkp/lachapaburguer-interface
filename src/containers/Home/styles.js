import Background from '../../assets/backgroundlogin.avif';
import BannerHome from '../../assets/banner-home.svg';
import styled from 'styled-components';

export const Banner = styled.div`
  background: url(${BannerHome});
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: white;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 0;
`;

export const Content = styled.div`
  width: 100%;
  padding-bottom: 32px;
`;

export const Footer = styled.footer`
  background: linear-gradient(135deg, #ff8c00, #ff6b00, #e55b00);
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;

  p {
    color: white;
    font-family: 'Road Rage', 'Montserrat', cursive, sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
