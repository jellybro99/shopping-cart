import PropTypes from "prop-types"
import styled from "styled-components";

const ShoppingCart = styled.div`
    position:absolute;
    top:0;
    right:0;
    padding:1rem;
    background-color: orange;
    opacity: 98%;
    z-index:2;
`

function ShoppingCartView(props) {
    const { cart, brands, handleCheckout, close} = props;

    return (
        <ShoppingCart>
            <button onClick={close}>close</button>
            {cart.map((item) => <div key={item.key}>{brands[item.brand - 1].products[item.product - 1].name}: {item.amount}</div>)}
            <button onClick={handleCheckout}>checkout</button>
        </ShoppingCart>
    )
}

ShoppingCartView.propTypes = {
    cart: PropTypes.array,
    brands: PropTypes.array,
    handleCheckout: PropTypes.func,
    close: PropTypes.func
}

export default ShoppingCartView;