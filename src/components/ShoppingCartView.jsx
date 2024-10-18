import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";
import { useEffect } from "react";

const ShoppingCart = styled.div`
    padding: 1rem;
    width: 30rem;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    overflow-y: scroll;
    border: solid black 1px;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Item = styled.div`
    display: grid;
    grid-template-columns: 4rem 1rem 1fr;
    grid-template-rows: 4rem;
    align-items: center;
    gap: 1rem;
`;

const Close = styled.button`
    background-color: #8ace00;
    align-self: flex-end;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
`;

const Checkout = styled.button`
    align-self: center;
    width: 100%;
    cursor: pointer;
    background: none;
    &:hover {
        background-color: #8ace00;
    }
`;

function ShoppingCartView(props) {
    const { cart, brands, handleCheckout, close } = props;

    const handleKeyPress = (e) => {
        if (e.key === "Escape") close();
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <ShoppingCart>
            <Close onClick={close}>X</Close>
            <Items>
                {cart.map((item) => (
                    <Item key={item.key}>
                        <Image
                            src={
                                brands[item.brand - 1].products[
                                    item.product - 1
                                ].image
                            }
                        />
                        <div>{item.amount}:</div>
                        <div>
                            {
                                brands[item.brand - 1].products[
                                    item.product - 1
                                ].name
                            }
                        </div>
                    </Item>
                ))}
            </Items>
            <Checkout onClick={handleCheckout}>Checkout</Checkout>
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
