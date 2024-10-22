import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";
import { useEffect, useState } from "react";

const CarouselDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 15rem;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;
`;

const CarouselItem = styled(Image)`
    height: 15rem;
    width: 15rem;
`;

const SideCarouselItem = styled(Image)`
    height: 10rem;
    width: 10rem;
    opacity: 50%;
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
    border-radius: 0.1rem;
    width: 10rem;
    cursor: pointer;
    &:hover {
        background-color: rgb(138, 206, 0);
    }
`;

function Carousel(props) {
    const { brands } = props;
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [small, setSmall] = useState(window.innerWidth < 800);

    const prev = (index + brands.length - 1) % brands.length;
    const next = (index + 1) % brands.length;

    const updateMedia = () => {
        setSmall(window.innerWidth < 800);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const goNext = () => {
        setIndex(next);
    };

    const goPrev = () => {
        setIndex(prev);
    };

    return (
        <>
            <CarouselDiv>
                {!small && (
                    <ChangeButton onClick={() => goNext()}>{"<"}</ChangeButton>
                )}
                {!small && (
                    <SideCarouselItem
                        shadow={true}
                        src={brands[prev].image}
                        alt={brands[prev].name}
                        pointer={true}
                        onClick={() => navigate("/brand/" + brands[prev].id)}
                    />
                )}
                <CarouselItem
                    shadow={true}
                    src={brands[index].image}
                    alt={brands[index].name}
                    pointer={true}
                    onClick={() => navigate("/brand/" + brands[index].id)}
                />
                {!small && (
                    <SideCarouselItem
                        shadow={true}
                        src={brands[next].image}
                        alt={brands[next].name}
                        pointer={true}
                        onClick={() => navigate("/brand/" + brands[next].id)}
                    />
                )}
                {!small && (
                    <ChangeButton onClick={() => goPrev()}>{">"}</ChangeButton>
                )}
            </CarouselDiv>
            <CenteredDiv>
                {small && (
                    <ChangeButton onClick={() => goNext()}>{"<"}</ChangeButton>
                )}
                <StyledButton onClick={() => navigate("/brands/")}>
                    View All
                </StyledButton>
                {small && (
                    <ChangeButton onClick={() => goPrev()}>{">"}</ChangeButton>
                )}
            </CenteredDiv>
        </>
    );
}

Carousel.propTypes = {
    brands: PropTypes.array,
};

export default Carousel;
