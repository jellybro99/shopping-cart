import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";
import { useState } from "react";

const CarouselDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 15rem;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-bottom: 1rem;
`;

const CarouselItem = styled(Image)`
    height: 15rem;
    width: 15rem;
    box-shadow: #8ace0078 0 0 12px 0px;
    border-radius: 0.1rem;
    border: solid #8ace00 1px;
`;

const SideCarouselItem = styled(Image)`
    height: 10rem;
    width: 10rem;
    opacity: 50%;
    box-shadow: #8ace0078 0 0 12px 0px;
    border-radius: 0.1rem;
    border: solid #8ace00 1px;
`;

const ChangeButton = styled.button`
    border: none;
    background-color: inherit;
    cursor: pointer;
    &:hover {
        color: #8ace0078;
    }
`;

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledButton = styled.button`
    background: none;
    border: solid black 1px;
    width: 10rem;
    cursor: pointer;
    &:hover {
        background-color: #8ace0078;
    }
`;

function Carousel(props) {
    const { brands } = props;
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const prev = (index + brands.length - 1) % brands.length;
    const next = (index + 1) % brands.length;

    const goNext = () => {
        setIndex(next);
    };

    const goPrev = () => {
        setIndex(prev);
    };

    return (
        <>
            <CarouselDiv>
                <ChangeButton onClick={() => goNext()}>{"<"}</ChangeButton>
                <SideCarouselItem
                    src={brands[prev].image}
                    alt={brands[prev].name}
                    cursor="pointer"
                    onClick={() => navigate("/brand/" + brands[prev].id)}
                />
                <CarouselItem
                    src={brands[index].image}
                    alt={brands[index].name}
                    cursor="pointer"
                    onClick={() => navigate("/brand/" + brands[index].id)}
                />
                <SideCarouselItem
                    src={brands[next].image}
                    alt={brands[next].name}
                    cursor="pointer"
                    onClick={() => navigate("/brand/" + brands[next].id)}
                />
                <ChangeButton onClick={() => goPrev()}>{">"}</ChangeButton>
            </CarouselDiv>
            <CenteredDiv>
                <StyledButton onClick={() => navigate("/brands/")}>
                    View All
                </StyledButton>
            </CenteredDiv>
        </>
    );
}

Carousel.propTypes = {
    brands: PropTypes.array,
};

export default Carousel;
