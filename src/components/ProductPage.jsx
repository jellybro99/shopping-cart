import { useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
    const product = useOutletContext()[useParams().brandId -1].products[useParams().productId - 1];

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image}/>
        </div>
    )
}

export default ProductPage