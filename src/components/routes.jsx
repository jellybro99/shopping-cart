import ErrorPage from './ErrorPage';
import App from '../App';
import HomePage from './HomePage';
import BrandPage from './BrandPage';
import ProductPage from './ProductPage';
import BrandsPage from './BrandsPage';

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {
                        index: true,
                        element: <HomePage/>
                    },
                    {
                        path: "brand/:brandId",
                        element: <BrandPage/>,
                    },
                    {
                        path: "brands",
                        element: <BrandsPage/>
                    },
                    {
                        path: "brand/:brandId/product/:productId",
                        element: <ProductPage/>
                    }
                ]
            }
        ]
    }
]

export default routes;