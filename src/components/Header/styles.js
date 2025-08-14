import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 60px;
`; //FIM

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`; //FIM

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  div {
    margin-left: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    hr {
      height: 20px;
      border: 1px solid #625e5e;
    }
  }

  @media (max-width: 768px) {
    display: none;
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

  @media (max-width: 768px) {
    gap: 20px;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`; //FIM

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    
    span {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`; //FIM

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`; //FIM

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #ff8c00;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`; //FIM

export const MobileMenuContainer = styled.div`
  display: none;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`; //FIM

export const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #1f1f1f;
  border-top: 1px solid #625e5e;
  z-index: 1000;
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }
`; //FIM

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(98, 94, 94, 0.3);
    
    &:last-child {
      border-bottom: none;
    }
  }
`; //FIM

export const Logout = styled.button`
  color: #ff3205;
  border: none;
  text-decoration: none;
  font-weight: 700;
  transition: color 200ms;
  text-shadow: #000 2px 2px 3px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: rgb(255, 5, 5);
  }
`; //FIM
