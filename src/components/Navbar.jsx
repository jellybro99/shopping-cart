import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types"
import ShoppingCartView from "./ShoppingCart";
import { ShoppingCart } from "lucide-react";

const NavbarStyling = styled.nav`
        background-color:green;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
`

const Links = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:1rem;
`

const StyledLink = styled(Link)`
    text-decoration:none;
`

function Navbar(props) {
    const { cart } = props;
    const [shoppingCartDisplay, setShoppingCartDisplay] = useState(false);
  
    return (
        <NavbarStyling>
            <h1><StyledLink to="/">nav bar</StyledLink></h1>
            <Links>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/products">Products</StyledLink>
            </Links>
            <button type="button" onClick={() => setShoppingCartDisplay(!shoppingCartDisplay)}><ShoppingCart/></button>
            {shoppingCartDisplay && <ShoppingCartView cart={cart}/>}
            
        </NavbarStyling>
    )
}

Navbar.propTypes = {
    cart: PropTypes.array,
}

export default Navbar;