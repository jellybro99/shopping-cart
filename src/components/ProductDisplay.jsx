import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";

const Product = styled.div`
    width: 10rem;
`;

const Link = styled.h2`
    cursor: pointer;
    &:hover {
        color: #8ace00;
    }
`;

const ProductImage = styled(Image)`
    border: solid gray 1px;
    &:hover {
        border-color: #8ace00;
        box-shadow: 0px 0px 10px 0px #8ace00;
    }
`;

function ProductDisplay(props) {
    const { product, handleClick } = props;

    return (
        <Product>
            <ProductImage src={product.image} onClick={handleClick} />
            <Link onClick={handleClick}>{product.name}</Link>
        </Product>
    );
}

ProductDisplay.propTypes = {
    product: PropTypes.object,
    handleClick: PropTypes.func,
};

export default ProductDisplay;
