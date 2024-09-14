import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllProducts from "../pages/AllProducts/AllProducts";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import ManageProduct from "../pages/ManageProduct/ManageProduct";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Support from "../pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "manage-products",
        element: <ManageProduct />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);

export default router;
