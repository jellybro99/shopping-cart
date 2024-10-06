import { Outlet } from "react-router-dom";
import { useState } from "react"
import Navbar from "./components/Navbar";
import brands from "./assets/brands";

function App() {
  const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar cart={cart}/>
            <main >
                <Outlet context={[brands, (item) => setCart(cart.push(item))]}/>
            </main>
        </>
    )
}

export default App;