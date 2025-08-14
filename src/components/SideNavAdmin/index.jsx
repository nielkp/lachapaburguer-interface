import { navLinks } from "./navLinks";
import Logo from '../../assets/logocinza.png'
import {
  SignOutIcon,
  ShoppingBagIcon,
  PlusIcon,
  ListBulletsIcon,
  TagIcon,
} from "@phosphor-icons/react";
import { Container, Footer, NavLink, NavLinkContainer } from "./styles";
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {

    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt="Logo La Chapa Burguer" />
            <NavLinkContainer>
                {navLinks.map((link) => {
                    const IconComponent = {
                        ShoppingBagIcon,
                        PlusIcon,
                        ListBulletsIcon,
                        TagIcon,
                    }[link.icon];
                    
                    return (
                        <NavLink key={link.id} to={link.path} $isActive={pathname === link.path}>
                            {IconComponent && <IconComponent size={24} />}
                            <span>{link.label}</span>
                        </NavLink>
                    );
                })}
            </NavLinkContainer>
            <Footer>
                <NavLink to='/login' onClick={logout}>
                    <SignOutIcon />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}