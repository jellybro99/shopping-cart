import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { ShoppingCart } from "lucide-react";
import ShoppingCartView from "./ShoppingCartView";
import Modal from "./Modal";

const NavbarStyling = styled.nav`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

const StyledShoppingCart = styled(ShoppingCart)`
    cursor: pointer;
    color: black;

    &:hover {
        color: rgb(138, 206, 0);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 400;

    &:hover {
        color: rgb(138, 206, 0);
    }
`;

function Navbar(props) {
    const { cart, brands, handleCheckout } = props;
    const [shoppingCartDisplay, setShoppingCartDisplay] = useState(false);
    const [animationClose, setAnimationClose] = useState(false);

    const handleShoppingCartToggle = () => {
        if (shoppingCartDisplay) {
            setAnimationClose(true);
            setTimeout(() => {
                setShoppingCartDisplay(!shoppingCartDisplay);
                setAnimationClose(false);
            }, 280);
        } else {
            setAnimationClose(false);
            setShoppingCartDisplay(!shoppingCartDisplay);
        }
    };

    return (
        <NavbarStyling>
            <h1>
                <StyledLink to="/">jelly brothers</StyledLink>
            </h1>
            <StyledShoppingCart onClick={() => handleShoppingCartToggle()} />
            {shoppingCartDisplay && (
                <Modal close={() => handleShoppingCartToggle()}>
                    <ShoppingCartView
                        closeAnimation={animationClose}
                        cart={cart}
                        brands={brands}
                        handleCheckout={handleCheckout}
                        close={() => handleShoppingCartToggle()}
                    />
                </Modal>
            )}
        </NavbarStyling>
    );
}

Navbar.propTypes = {
    cart: PropTypes.array,
    brands: PropTypes.array,
    handleCheckout: PropTypes.func,
};

export default Navbar;
