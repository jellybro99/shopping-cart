import PropTypes from "prop-types"

function ShoppingCartView(props) {
    const { shoppingCart } = props;

    return (
        <div>
            <ul>
                {shoppingCart.map((item) => (
                    <li key={item.id}>
                        <h1>{item.name}</h1>
                    </li>
                ))}
            </ul>
            <button>Check Out</button>
        </div>
    )
}

ShoppingCartView.propTypes = {
    shoppingCart: PropTypes.array,
}

export default ShoppingCartView;