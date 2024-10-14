import PropTypes from "prop-types";
import styled from "styled-components";

const ShoppingCart = styled.div`
    padding: 1rem;
    width: 30rem;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const Items = styled.div``;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

function ShoppingCartView(props) {
    const { cart, brands, handleCheckout, close } = props;

    return (
        <ShoppingCart>
            <button onClick={close}>close</button>
            <Items>
                {cart.map((item) => (
                    <Item key={item.key}>
                        <div>{item.amount}</div>
                        {brands[item.brand - 1].products[item.product - 1].name}
                    </Item>
                ))}
            </Items>
            <button onClick={handleCheckout}>checkout</button>
        </ShoppingCart>
    );
}

ShoppingCartView.propTypes = {
    cart: PropTypes.array,
    brands: PropTypes.array,
    handleCheckout: PropTypes.func,
    close: PropTypes.func,
};

export default ShoppingCartView;
