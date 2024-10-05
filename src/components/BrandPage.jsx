import PropTypes from "prop-types"
import ProductDisplay from "./ProductDisplay";

function BrandPage(props) {
    const { brand } = props;

    return (
        <div>
            <h1>{brand.name}</h1>
            {brand.products.map((product) => <ProductDisplay key={product.id} product={product}/>)}
        </div>
    )
}

BrandPage.propTypes = {
    brand: PropTypes.object
}


export default BrandPage;