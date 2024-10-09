import PropTypes from "prop-types"
import ProductDisplay from "./ProductDisplay";
import { Link, useOutletContext, useParams } from "react-router-dom";

function BrandPage() {
    const brandId = useParams().brandId;
    const brand = useOutletContext()[0][brandId - 1];
    if(brand === undefined) throw new Response("Not Found", { status: 404 });

    return (
        <div>
            <h1>{brand.name}</h1>
            {brand.products.map((product) => <div key={product.id}>
                <ProductDisplay product={product}/>
                <Link to={"/brand/" + brandId + "/product/" + product.id}>{product.name}</Link>
            </div>)}
        </div>
    )
}

BrandPage.propTypes = {
    brand: PropTypes.object
}

export default BrandPage;