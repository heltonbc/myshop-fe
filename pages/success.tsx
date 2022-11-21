import { NextPage } from "next";
import styled from "styled-components";
import { Container } from "../styles/utils";

const Success: NextPage = () => {
    return (
        <Main>
            <span>
                Compra realizada com Sucesso! <small>🧡</small>
            </span>
        </Main>
    );
};

const Main = styled.main`
    ${Container};
    min-height: 589px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Success;
