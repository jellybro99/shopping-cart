import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";

const CarouselDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 15rem;
    justify-content: center;
    gap: 10rem;
    background-color: gray;
`;

const CarouselItem = styled(Image)`
    cursor: pointer;
`;

function Carousel(props) {
    const { brands } = props;
    const navigate = useNavigate();

    return (
        <CarouselDiv>
            {brands.map((brand) => (
                <CarouselItem
                    key={brand.id}
                    src={brand.image}
                    alt={brand.name}
                    onClick={() => navigate("/brand/" + brand.id)}
                />
            ))}
        </CarouselDiv>
    );
}

Carousel.propTypes = {
    brands: PropTypes.array,
};

export default Carousel;
