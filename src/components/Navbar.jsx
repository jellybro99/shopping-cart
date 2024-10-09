import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { ShoppingCart } from "lucide-react";
import ShoppingCartView from "./ShoppingCartView";

const NavbarStyling = styled.nav`
        background-color:green;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
`

const StyledLink = styled(Link)`
    text-decoration:none;
`

function Navbar(props) {
    const { cart, brands, handleCheckout } = props;
    const [shoppingCartDisplay, setShoppingCartDisplay] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShoppingCartDisplay(false);
        () => setShoppingCartDisplay(false);
    }, [location])
    
    return (
        <NavbarStyling>
            <h1><StyledLink to="/">nav bar</StyledLink></h1>
            <button type="button" onClick={() => setShoppingCartDisplay(!shoppingCartDisplay)}><ShoppingCart/></button>
            {shoppingCartDisplay && <ShoppingCartView cart={cart} brands={brands} handleCheckout={handleCheckout}/>}
            
        </NavbarStyling>
    )
}

Navbar.propTypes = {
    cart: PropTypes.array,
    brands: PropTypes.array,
    handleCheckout: PropTypes.func
}

export default Navbar;