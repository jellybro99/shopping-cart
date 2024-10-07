import Carousel from "./Carousel";
import { useOutletContext, Link } from "react-router-dom";

function HomePage() {
    const brands = useOutletContext()[0]

    return (
        <div>
            Home Page
            <Carousel brands={brands}/>
            <Link to="brands">View All</Link>
        </div>
    )
}

export default HomePage;