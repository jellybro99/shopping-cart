import { useOutletContext, useParams } from "react-router-dom";
import Image from "./Image";
import styled from "styled-components";

const ProductPageDiv = styled.div`
    padding: 2rem;
    display: flex;
    gap: 2rem;
    height: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const SideArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-grow: 1;

    @media (max-width: 800px) {
        justify-content: center;
        text-align: center;
    }
`;

const AddToCart = styled.button`
    align-self: flex-start;
    width: 20rem;
    cursor: pointer;
    background: none;
    &:hover {
        background-color: #8ace00;
    }
    @media (max-width: 800px) {
        align-self: center;
    }
`;

const StyledImage = styled(Image)`
    max-height: 25rem;
    max-width: 25rem;

    @media (max-width: 800px) {
        align-self: center;
    }
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
