//Imports via sistema
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

//Imports externos
import Logo from "../public/images/logo.png";
import Cart from "../public/images/carrinho.png";
import { Container } from "../styles/utils";

const Header: NextPage = () => {
    return (
        <StyledHeader>
            <NavBar>
                <Image src={Logo} alt="Logo MyShop" width={150} height={75} />
                <MenuList>
                    <MenuItem>
                        <Link href="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/about">Sobre</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/shopping-cart">
                            <a>
                                <Image
                                    src={Cart}
                                    width={52}
                                    height={52}
                                    alt="shopping cart image"
                                />
                            </a>
                        </Link>
                    </MenuItem>
                </MenuList>
            </NavBar>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #f4f4f4;
    //padding: 1.87rem 0 3.125rem 0;
    margin-bottom: 1rem;
`;

const NavBar = styled.nav`
    ${Container};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2.5rem;
    align-items: center;
`;

const MenuItem = styled.li`
    font-size: 16px;
    font-weight: 700;
    a {
        text-decoration: none;
        color: #000;
    }
    a:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export default Header;
