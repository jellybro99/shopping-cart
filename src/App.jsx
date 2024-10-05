import { Outlet } from "react-router-dom";
//import { useState } from "react"
import Navbar from "./components/Navbar";
import brands from "./assets/brands";
import Carousel from "./components/Carousel";

function App() {
  //const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar/>
            <main >
                <Outlet/>
                <Carousel brands={brands}/>
            </main>
        </>
    )
}

export default App;