import styled from "styled-components";
import PropTypes from "prop-types"

const CarouselDiv = styled.div`
    
`

function  Carousel(props) {
    const { cards } = props;
    //cards with have onclick which redirects to brand page
    //image


    return (
        <CarouselDiv>

        </CarouselDiv>
    )



}

Carousel.propsTypes = {
    cards: PropTypes.array
}

export default Carousel;