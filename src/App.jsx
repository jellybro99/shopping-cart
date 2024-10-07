import { Outlet } from "react-router-dom";
import { useState } from "react"
import Navbar from "./components/Navbar";
import brands from "./assets/brands";

function App() {
    const [cart, setCart] = useState([]);
    
    /*
    shopping cart structure
    [
        {
            id:1,
            amount: 3,
            brand: 1,
            product: 4
        }
    ]
        BRAND AND PRODUCT COULD ACT AS ID
        MODULO MATHS
    */

    const handleShoppingCartAdd = (brandId, productId) => {

    }

    return (
        <>
            <Navbar cart={cart} setCart={setCart}/>
            <main >
                <Outlet context={[brands, (brandId, productId) => handleShoppingCartAdd(brandId, productId)]}/>
            </main>
        </>
    )
}

export default App;