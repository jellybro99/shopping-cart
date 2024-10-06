import PropTypes from "prop-types"
import ProductDisplay from "./ProductDisplay";
import { useOutletContext, useParams } from "react-router-dom";

function BrandPage() {
    const brand = useOutletContext()[useParams().brandId - 1];

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