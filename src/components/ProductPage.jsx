import { useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
    const product = useOutletContext()[0][useParams().brandId -1].products[useParams().productId - 1];
    if (product === undefined) throw new Response("Not Found", { status: 404 });

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image}/>
        </div>
    )
}

export default ProductPage