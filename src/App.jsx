import { Outlet } from "react-router-dom";
import { useState } from "react"
import Navbar from "./components/Navbar";



function App() {
  const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar cart={cart}/>
            <main>[cart, setCart]
                <Outlet context={{cart, setCart}}/>
            </main>
        </>
    )
}

export default App;