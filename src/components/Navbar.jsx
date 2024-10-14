import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ShoppingCart } from "lucide-react";
import ShoppingCartView from "./ShoppingCartView";
import Modal from "./Modal";

const NavbarStyling = styled.nav`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    background-color: #5a5a5a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //border: solid black 1px;
    //border-radius:.5rem;
    //border-bottom-left-radius: 0.5rem;
    //border-bottom-right-radius: 0.5rem;
    //box-shadow: black 0 0 4px 0;
    z-index: 1;
`;

const StyledShoppingCart = styled(ShoppingCart)`
    cursor: pointer;
    color: white;

    &:hover {
        color: #2de51f;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 400;

    &:hover {
        color: #2de51f;
    }
`;

function Navbar(props) {
    const { cart, brands, handleCheckout } = props;
    const [shoppingCartDisplay, setShoppingCartDisplay] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShoppingCartDisplay(false);
        () => setShoppingCartDisplay(false);
    }, [location]);

    return (
        <NavbarStyling>
            <h1>
                <StyledLink to="/">jelly brothers</StyledLink>
            </h1>
            <StyledShoppingCart
                onClick={() => setShoppingCartDisplay(!shoppingCartDisplay)}
            />
            {shoppingCartDisplay && (
                <Modal close={() => setShoppingCartDisplay(false)}>
                    <ShoppingCartView
                        cart={cart}
                        brands={brands}
                        handleCheckout={handleCheckout}
                        close={() => setShoppingCartDisplay(false)}
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
