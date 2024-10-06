import PropTypes from "prop-types"
import styled from "styled-components";

const ShoppingCart = styled.div`
    position:fixed;
    top:1rem;
    right:1rem;
`

function ShoppingCartView(props) {
    const { cart } = props;

    return (
        <ShoppingCart>
            {cart.map((item) => <div key={item.id}>{item.name}</div>)}
        </ShoppingCart>
    )
}

ShoppingCartView.propTypes = {
    cart: PropTypes.array
}

export default ShoppingCartView;