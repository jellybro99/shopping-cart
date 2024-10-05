import PropTypes from "prop-types"

function ProductDisplay(props) {
    const { product, handleClick } = props

    return (
        <div onClick={handleClick}>
            <img src={product.image}/>
            <h1>{product.name}</h1>
        </div>
    )
}

ProductDisplay.propTypes = {
    product: PropTypes.object,
    handleClick: PropTypes.func
}

export default ProductDisplay;