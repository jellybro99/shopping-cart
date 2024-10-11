import PropTypes from "prop-types"
import styled from "styled-components";

const ShoppingCart = styled.div`
    width:30rem;
    height:100%;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

function ShoppingCartView(props) {
    const { cart, brands, handleCheckout, close} = props;

    return (
        <ShoppingCart>
            <button onClick={close}>close</button>
            <div>
                {cart.map((item) => <div key={item.key}>{brands[item.brand - 1].products[item.product - 1].name}: {item.amount}</div>)}
            </div>
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