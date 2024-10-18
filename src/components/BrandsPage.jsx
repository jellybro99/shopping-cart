import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";

const Brand = styled.div`
    width: 20rem;
`;

const BrandsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
    padding: 2rem;
`;

function BrandsPage() {
    const brands = useOutletContext()[0];
    const navigate = useNavigate();

    return (
        <BrandsDiv>
            {brands.map((brand) => (
                <Brand
                    key={brand.id}
                    onClick={() => navigate("/brand/" + brand.id)}
                >
                    <Image src={brand.image} />
                    <h1>{brand.name}</h1>
                </Brand>
            ))}
        </BrandsDiv>
    );
}

export default BrandsPage;
