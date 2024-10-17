import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import brands from "./assets/brands";
import styled from "styled-components";

const FullPage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
`;

const Main = styled.main`
    flex-grow: 1;
`;

function App() {
    const [cart, setCart] = useState(
        localStorage.getItem("shoppingCart") != null
            ? JSON.parse(localStorage.getItem("shoppingCart"))
            : []
    );
    const navigate = useNavigate();

    const handleShoppingCartAdd = (brandId, productId) => {
        //need to test this
        const newCart = JSON.parse(JSON.stringify(cart));

        let product = cart.find((o, i) => {
            if (o.brand == brandId && o.product == productId) {
                newCart[i].amount = newCart[i].amount + 1;
                return true;
            }
        });
        if (product == undefined) {
            newCart.push({
                key: self.crypto.randomUUID(),
                brand: brandId,
                product: productId,
                amount: 1,
            });
        }
        localStorage.setItem("shoppingCart", JSON.stringify(newCart));
        setCart(newCart);
    };

    const handleCheckout = () => {
        localStorage.clear();
        setCart([]);

        //handle checkout
        navigate("/");
    };

    return (
        <FullPage>
            <Navbar
                cart={cart}
                setCart={setCart}
                brands={brands}
                handleCheckout={handleCheckout}
            />
            <Main>
                <Outlet
                    context={[
                        brands,
                        (brandId, productId) =>
                            handleShoppingCartAdd(brandId, productId),
                    ]}
                />
            </Main>
        </FullPage>
    );
}

export default App;
