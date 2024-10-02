import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>hi</div>,
      errorElement: <ErrorPage/>
    }
  ])
  
  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;