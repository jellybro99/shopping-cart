import styled from "styled-components";
import PropTypes from 'prop-types'


function Navbar(props) {
    const NavbarStyling = styled.nav`
        height: 48px;
        background-color:green;
        display: flex;
        flex-direction: row;
        align-items:center;
    `

    return (
        <NavbarStyling>
            {props.children}
        </NavbarStyling>
    )
}

Navbar.propTypes = {
    children: PropTypes.element.isRequired
}

export default Navbar;