import PropTypes from "prop-types"

function ShoppingCart(props) {
    const { cart } = props;

    return (
        <div>
            {cart.map((item) => <div key={item.id}>{item.name}</div>)}
        </div>
    )
}

ShoppingCart.propTypes = {
    cart: PropTypes.array
}

export default ShoppingCart;