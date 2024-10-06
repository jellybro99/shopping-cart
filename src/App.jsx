import { Outlet } from "react-router-dom";
//import { useState } from "react"
import Navbar from "./components/Navbar";
import brands from "./assets/brands";

function App() {
  //const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar/>
            <main >
                <Outlet context={brands}/>
            </main>
        </>
    )
}

export default App;