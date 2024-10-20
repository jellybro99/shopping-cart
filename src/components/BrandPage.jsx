import PropTypes from "prop-types";
import ProductDisplay from "./ProductDisplay";
import styled from "styled-components";
import Image from "./Image";

import { useNavigate, useOutletContext, useParams } from "react-router-dom";

const Products = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    justify-items: center;
    gap: 2rem;
`;

const BrandName = styled.h1`
    display: flex;
    justify-content: center;
    font-weight: 400;
`;

const BrandPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;
    gap: 2rem;
    width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const About = styled.div`
    width: 15rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 800px) {
        align-self: center;
    }
`;

function BrandPage() {
    const brandId = useParams().brandId;
    const brand = useOutletContext()[0][brandId - 1];
    const navigate = useNavigate();
    if (brand === undefined) throw new Response("Not Found", { status: 404 });

    return (
        <BrandPageDiv>
            <About>
                <BrandName>{brand.name}</BrandName>
                <Image shadow={true} src={brand.image} />
                <p>{brand.about}</p>
            </About>
            <Products>
                {brand.products.map((product) => (
                    <div key={product.id}>
                        <ProductDisplay
                            product={product}
                            handleClick={() =>
                                navigate(
                                    "/brand/" +
                                        brandId +
                                        "/product/" +
                                        product.id
                                )
                            }
                        />
                    </div>
                ))}
            </Products>
        </BrandPageDiv>
    );
}

BrandPage.propTypes = {
    brand: PropTypes.object,
};

export default BrandPage;
