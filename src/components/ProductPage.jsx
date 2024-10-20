import { useOutletContext, useParams } from "react-router-dom";
import Image from "./Image";
import styled from "styled-components";

const ProductPageDiv = styled.div`
    padding: 2rem;
    display: flex;
    gap: 2rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const SideArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-grow: 1;
`;

const AddToCart = styled.button`
    align-self: flex-start;
    width: 20rem;
    cursor: pointer;
    background: none;
    &:hover {
        background-color: #8ace00;
    }
`;

const StyledImage = styled(Image)`
    height: 20rem;
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
            <StyledImage shadow={true} src={product.image} />
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
