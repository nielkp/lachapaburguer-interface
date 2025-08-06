import BackgroundLogin from '../../assets/backgroundlogin.avif';
import Background from '../../assets/background.avif';
import { Link as Router } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`; //FIM

export const LeftContainer = styled.div`
  background: url('${Background}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 40%;
    img {
      width: 60%;
    }
  }

  @media (max-width: 480px) {
    height: 30%;
    img {
      width: 70%;
    }
  }
`; //FIM

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${BackgroundLogin}');
  background-color: #1e1e1e;

  p {
    color: white;
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }

  text-shadow: #000 2px 2px 3px;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 60%;
  }

  @media (max-width: 480px) {
    height: 70%;
    padding: 10px;

    p {
      font-size: 16px;
      text-align: center;
    }
  }

  span {
    color: orange;
  }
`; //FIM

export const Title = styled.h2`
  font-family: 'Road Rage', cursive;
  font-size: 40px;
  color: white;
  text-shadow: #000 2px 2px 3px;

  span {
    color: orange;
    font-family: 'Road Rage', cursive;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    text-align: center;
  }
`; //FIM

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  text-shadow: #000 2px 2px 3px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`; //FIM

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: white;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    font-weight: 600;
    color: #f28f1c;
    height: 10px;
  }

  @media (max-width: 480px) {
    label {
      font-size: 16px;
    }

    input {
      height: 48px;
    }
  }
`; //FIM

export const Link = styled(Router)`
  text-decoration: none;
  color: #fff;
`; //FIM
