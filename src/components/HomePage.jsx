import Carousel from "./Carousel";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const StyledHomePage = styled.div`
    height: 100%;
`;
const EmptySpace = styled.div`
    height: 15rem;
`;

function HomePage() {
    const brands = useOutletContext()[0];

    return (
        <StyledHomePage>
            <EmptySpace />
            <Carousel brands={brands} />
        </StyledHomePage>
    );
}

export default HomePage;
