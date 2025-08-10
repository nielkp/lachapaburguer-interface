import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 77px;
`; //FIM

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`; //FIM

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77px;

  div {
    margin-left: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    hr {
      height: 24px;
      border: 1px solid #625e5e;
    }
  }
`; //FIM

export const HeaderLink = styled(Link)`
  color: ${(props) => (props.$isActive ? '#ff8c00' : '#fff')};
  border-bottom: ${(props) => (props.$isActive ? '1px solid #ff8c00' : 'none')};
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: color 200ms;

  &:hover {
    color: #ff8c00;
  }
`; //FIM

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`; //FIM

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  p {
    color: #fff;
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: #ff8c00;
    }
  }
`; //FIM

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`; //FIM

export const Logout = styled.button`
  color: #ff3205;
  border: none;
  text-decoration: none;
  font-weight: 700;
  transition: color 200ms;
  text-shadow: #000 2px 2px 3px;
  background-color: transparent;

  &:hover {
    color: rgb(255, 5, 5);
  }
`; //FIM
