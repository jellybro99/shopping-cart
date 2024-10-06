import Carousel from "./Carousel";
import { useOutletContext } from "react-router-dom";

function Home() {
    const brands = useOutletContext()[0]

    return (
        <div>
            Home Page
            <Carousel brands={brands}/>    
        </div>
    )
}

export default Home;