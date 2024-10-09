import { Outlet } from "react-router-dom";
import { useState } from "react"
import Navbar from "./components/Navbar";
import brands from "./assets/brands";


function App() {
    const [cart, setCart] = useState([]);
    

    const handleShoppingCartAdd = (brandId, productId) => { //need to test this
        const newCart = JSON.parse(JSON.stringify(cart));

        let product = cart.find((o, i) => {
            if(o.brand == brandId && o.product == productId){
                newCart[i].amount = newCart[i].amount + 1;
                return true;
            }
        })
        if(product == undefined) {
            newCart.push({
                key: self.crypto.randomUUID(),
                brand: brandId,
                product: productId,
                amount: 1
            })
        }
        setCart(newCart);
    }
    
    return (
        <>
            <Navbar cart={cart} setCart={setCart} brands={brands}/>
            <main >
                <Outlet context={[brands, (brandId, productId) => handleShoppingCartAdd(brandId, productId)]}/>
            </main>
        </>
    )
}

export default App;