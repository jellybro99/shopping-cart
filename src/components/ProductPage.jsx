import { useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
    const brands = useOutletContext()[0];
    const handleCartAdd = useOutletContext()[1];
    const brandId = useParams().brandId;
    const productId = useParams().productId;

    const product = brands[brandId - 1].products[productId - 1];
    if (product === undefined) throw new Response("Not Found", { status: 404 });

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image}/>
            <button onClick={()=>handleCartAdd(brandId, productId)}>add to cart</button>
        </div>
    )
}

export default ProductPage