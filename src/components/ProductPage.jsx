import PropTypes from "prop-types"

function ProductPage(props) {
    const { product, handleCartAdd } = props;

    return (
        <div>
            <img src={product.image}></img>
            <h1>{product.name}</h1>
            <button onClick={handleCartAdd}>Add to cart</button>
        </div>
    )
}

ProductPage.propTypes = {
    product: PropTypes.object,
    handleCartAdd: PropTypes.func
}

export default ProductPage