import { useOutletContext, useParams } from "react-router-dom";
import Image from "./Image";
import styled from "styled-components";

const ProductPageDiv = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    height: 50rem;
    gap: 2rem;
`;

const SideArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const AddToCart = styled.button`
    align-self: center;
    width: 100%;
    cursor: pointer;
    background: none;
    &:hover {
        background-color: #8ace00;
    }
`;

const StyledImage = styled(Image)`
    border: solid black 1px;
`;

function ProductPage() {
    const brands = useOutletContext()[0];
    const handleCartAdd = useOutletContext()[1];
    const brandId = useParams().brandId;
    const productId = useParams().productId;

    const product = brands[brandId - 1].products[productId - 1];
    if (product === undefined) throw new Response("Not Found", { status: 404 });

    return (
        <ProductPageDiv>
            <StyledImage src={product.image} />
            <SideArea>
                <h1>{product.name}</h1>
                <p>{product.about}</p>
                <AddToCart onClick={() => handleCartAdd(brandId, productId)}>
                    add to cart
                </AddToCart>
            </SideArea>
        </ProductPageDiv>
    );
}

export default ProductPage;
