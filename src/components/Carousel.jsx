import PropTypes from "prop-types"
import styled from "styled-components";

function Carousel(props) {
    const { brands } = props;

    const CarouselDiv = styled.div`
        display:flex;
        flex-direction:row;
        height: 15rem;
        justify-content:space-around;
    `

    const CarouselItem = styled.img`
        cursor:pointer;
    `

    return (
        <CarouselDiv>
            {brands.map((brand) => <CarouselItem 
                key={brand.id} 
                src={brand.image} 
                alt={brand.name} 
                onClick={console.log("hi")} 
            />)}
        </CarouselDiv>
    )
}

Carousel.propTypes = {
    brands: PropTypes.array
}

export default Carousel;