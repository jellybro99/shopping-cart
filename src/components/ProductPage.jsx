import { useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
    const brands = useOutletContext()[0];
    const brandId = useParams().brandId - 1;
    const productId = useParams().productId - 1;
    //const product = useOutletContext()[0][useParams().brandId -1].products[useParams().productId - 1];
    const product = brands[brandId].products[productId];
    if (product === undefined) throw new Response("Not Found", { status: 404 });

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image}/>
        </div>
    )
}

export default ProductPage