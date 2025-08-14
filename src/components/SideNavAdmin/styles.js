import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props => props.theme.background_color)};

    img {
        width: 60%;
        margin: 40px 0;
    }
`;//FIM

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;//FIM

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 11px 20px;
    text-decoration: none;
    color: #fff;
    background-color: ${(props) => props.$isActive ? props.theme.orange_hover : 'transparent'};

    &:hover {
        background-color: ${(props) => props.theme.orange_hover};
    }
`;//FIM

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
`;//FIM