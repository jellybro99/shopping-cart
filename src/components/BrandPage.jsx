import PropTypes from "prop-types"
import ProductDisplay from "./ProductDisplay";
import { useOutletContext, useParams } from "react-router-dom";

function BrandPage() {
    const brand = useOutletContext()[0][useParams().brandId - 1];
    if(brand === undefined) throw new Response("Not Found", { status: 404 });

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