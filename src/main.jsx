import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ErrorPage from './components/ErrorPage';
import App from './App';
import HomePage from './components/HomePage';
import BrandPage from './components/BrandPage';
import ProductPage from './components/ProductPage';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
  }
  * {
    margin: 0;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`

const router = createBrowserRouter([
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
            element: <HomePage/>,
          },
          {
            path: "brand/:brandId",
            element: <BrandPage/>,
          },
          {
            path: "brand/:brandId/product/:productId",
            element: <ProductPage/>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
