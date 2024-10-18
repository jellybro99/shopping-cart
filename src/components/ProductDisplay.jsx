import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";

const Product = styled.div`
    width: 10rem;
`;

function ProductDisplay(props) {
    const { product, handleClick } = props;

    return (
        <Product>
            <Image src={product.image} onClick={handleClick} cursor="pointer" />
            <h1>{product.name}</h1>
        </Product>
    );
}

ProductDisplay.propTypes = {
    product: PropTypes.object,
    handleClick: PropTypes.func,
};

export default ProductDisplay;
