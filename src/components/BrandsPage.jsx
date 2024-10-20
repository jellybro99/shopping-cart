import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";

const Brand = styled.div`
    //width: 10rem;
`;

const BrandsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 12rem);
    gap: 4rem;
    justify-items: center;
    justify-content: center;
    padding: 2rem;
`;

const BrandName = styled.h1`
    font-weight: 500;
`;

const StyledImage = styled(Image)`
    border: solid gray 1px;
    cursor: pointer;
    &:hover {
        border-color: #8ace00;
        box-shadow: 0px 0px 10px 0px #8ace00;
    }
`;

function BrandsPage() {
    const brands = useOutletContext()[0];
    const navigate = useNavigate();

    return (
        <BrandsDiv>
            {brands.map((brand) => (
                <Brand key={brand.id}>
                    <StyledImage
                        src={brand.image}
                        onClick={() => navigate("/brand/" + brand.id)}
                    />
                    <BrandName>{brand.name}</BrandName>
                </Brand>
            ))}
        </BrandsDiv>
    );
}

export default BrandsPage;
