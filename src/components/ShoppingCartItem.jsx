import PropTypes from "prop-types";

function ShoppingCartItem(props) {
    const { item } = props;


    return (
        <div>
            {item}
        </div>
    )
}

ShoppingCartItem.propTypes = {
    item: PropTypes.object
}

export default ShoppingCartItem;