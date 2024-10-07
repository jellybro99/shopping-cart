import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

function BrandsPage() {
    const brands = useOutletContext()[0];
    const navigate = useNavigate();

    return (
        <div>
            {brands.map((brand) => (
                <div key={brand.id} onClick={()=>navigate("/brand/" + brand.id)}>
                    <img src={brand.image}/>
                    <h1>{brand.name}</h1>
                </div>))}
        </div>
    )
}

export default BrandsPage;