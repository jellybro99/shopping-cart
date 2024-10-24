import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";

const Product = styled.div`
    width: 10rem;
`;

const Link = styled.h2`
    font-weight: 500;
    cursor: pointer;
    font-size: 1.5rem;
    &:hover {
        color: #8ace00;
    }
`;

function ProductDisplay(props) {
    const { product, handleClick } = props;

    return (
        <Product>
            <Image
                shadow={true}
                pointer={true}
                src={product.image}
                onClick={handleClick}
            />
            <Link onClick={handleClick}>{product.name}</Link>
        </Product>
    );
}

ProductDisplay.propTypes = {
    product: PropTypes.object,
    handleClick: PropTypes.func,
};

export default ProductDisplay;
