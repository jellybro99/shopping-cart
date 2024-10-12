import Carousel from "./Carousel";
import { useOutletContext, Link } from "react-router-dom";
import styled from "styled-components";

const StyledHomePage = styled.div`
    height: 100%;
`;

function HomePage() {
    const brands = useOutletContext()[0];

    return (
        <StyledHomePage>
            <Carousel brands={brands} />
            <Link to="brands">View All</Link>
        </StyledHomePage>
    );
}

export default HomePage;
