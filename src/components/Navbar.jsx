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

function Navbar(props) {
    const { cart } = props;
    const [shoppingCartDisplay, setShoppingCartDisplay] = useState(false);
  
    return (
        <NavbarStyling>
            <h1><Link to="/">nav bar</Link></h1>
            <Links>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </Links>
            <ShoppingCart onClick={() => setShoppingCartDisplay(!shoppingCartDisplay)}/>
            {shoppingCartDisplay && <ShoppingCartView shopingCart={cart}/>}
        </NavbarStyling>
    )
}

Navbar.propTypes = {
    cart: PropTypes.array,
}

export default Navbar;