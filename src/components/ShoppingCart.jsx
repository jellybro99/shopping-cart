import PropTypes from "prop-types"
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem.jsx";

const CartDisplay = styled.div`
    position:fixed;
    top: 1rem;
    right: 1rem;
    width: 20rem;
    padding:2rem;
    background-color:yellow;
`


function ShoppingCartView(props) {
    const { cart } = props;

    return (
        <CartDisplay>
            <ul>
                {cart.map((item) => (
                    <ShoppingCartItem key={item.id} item={item}/>
                ))}
            </ul>
            <button>Check Out</button>
        </CartDisplay>
    )
}

ShoppingCartView.propTypes = {
    cart: PropTypes.array,
}

export default ShoppingCartView;