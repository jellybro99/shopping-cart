import PropTypes from "prop-types"
import styled from "styled-components";

const ShoppingCart = styled.div`
    position:fixed;
    top:1rem;
    right:1rem;
    background-color: orange;
`

function ShoppingCartView(props) {
    const { cart, brands} = props;

    return (
        <ShoppingCart>
            {cart.map((item) => <div key={item.key}>{brands[item.brand - 1].products[item.product - 1].name}: {item.amount}</div>)}
        </ShoppingCart>
    )
}

ShoppingCartView.propTypes = {
    cart: PropTypes.array,
    brands: PropTypes.array,
    modalRef: PropTypes.object
}

export default ShoppingCartView;