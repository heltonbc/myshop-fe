import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { Container } from "../styles/utils";

interface BannerProps {
    image: StaticImageData;
    width: number;
    heigth: number;
}

const Banner = ({ image, width, heigth }: BannerProps) => {
    return (
        <BannerContainer>
            <Image src={image} alt="banner imagineshop" width={width} height={heigth} />
        </BannerContainer>
    );
};

const BannerContainer = styled.section`
    ${Container};
    border-top: 3px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    padding-top: 0.2rem;
`;

export default Banner;
