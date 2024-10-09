import PropTypes from "prop-types"
import styled from "styled-components";

const ShoppingCart = styled.div`
    position:fixed;
    top:1rem;
    right:1rem;
    padding:1rem;
    background-color: orange;
`

function ShoppingCartView(props) {
    const { cart, brands, handleCheckout} = props;

    return (
        <ShoppingCart>
            {cart.map((item) => <div key={item.key}>{brands[item.brand - 1].products[item.product - 1].name}: {item.amount}</div>)}
            <button onClick={handleCheckout}>checkout</button>
        </ShoppingCart>
    )
}

ShoppingCartView.propTypes = {
    cart: PropTypes.array,
    brands: PropTypes.array,
    handleCheckout: PropTypes.func
}

export default ShoppingCartView;