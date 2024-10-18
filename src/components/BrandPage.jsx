import PropTypes from "prop-types";
import ProductDisplay from "./ProductDisplay";
import styled from "styled-components";
import {
    Link,
    useNavigate,
    useOutletContext,
    useParams,
} from "react-router-dom";

const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
`;

const BrandName = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    font-weight: 400;
`;
function BrandPage() {
    const brandId = useParams().brandId;
    const brand = useOutletContext()[0][brandId - 1];
    const navigate = useNavigate();
    if (brand === undefined) throw new Response("Not Found", { status: 404 });

    return (
        <div>
            <BrandName>{brand.name}</BrandName>
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
                        <Link
                            to={"/brand/" + brandId + "/product/" + product.id}
                        >
                            {product.name}
                        </Link>
                    </div>
                ))}
            </Products>
        </div>
    );
}

BrandPage.propTypes = {
    brand: PropTypes.object,
};

export default BrandPage;
