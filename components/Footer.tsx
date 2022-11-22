import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "../styles/utils";
import Logo from "../public/images/logo.png";
import {
    faFacebookSquare,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <div>
                    <Image src={Logo} alt="Logo MyShop" width={130} height={60} />
                </div>
                <Contact>
                    My Shop - +55 (48) 3771-1703 / 3371-1823 - myshop@myshop.com.br - Av.
                    Brasil, 1234 - São Paulo - SP
                </Contact>
                <SocialNetworksList>
                    <li>
                        <SocialNetworkIcon icon={faFacebookSquare} />
                    </li>
                    <li>
                        <SocialNetworkIcon icon={faInstagram} />
                    </li>
                    <li>
                        <SocialNetworkIcon icon={faYoutube} />
                    </li>
                </SocialNetworksList>
            </FooterContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #f4f4f4;
`;

const FooterContainer = styled.div`
    ${Container};
    display: grid;
    grid-template-columns: 130px auto 130px;
    padding-top: 2.5rem;
    height: 12.5rem;
`;

const Contact = styled.p`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0;
    text-align: center;
    margin-top: 8.125rem;
`;

const SocialNetworksList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.5rem;
`;

const SocialNetworkIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.875rem;
`;

export default Footer;

//Ao fim voltar a verificar o código fonte pra ver a necessidade de ajuste.
