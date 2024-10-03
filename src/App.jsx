import { Outlet } from "react-router-dom";
import { useState } from "react"
import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState("");

    return (
        <>
            <Navbar cart={cart}/>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default App;