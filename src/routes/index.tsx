import GuestLayout from "@/components/layouts/guestLayout";
import MainLayout from "@/components/layouts/mainLayout";
import PrivateLayout from "@/components/layouts/privateLayout";
import CartOrder from "@/pages/CartOrder";
import ChangePassword from "@/pages/ChangePass";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Product from "@/pages/Product";
import ProductList from "@/pages/ProductList";
import Register from "@/pages/Register";
import TestForm from "@/pages/Test/TestForm";
import Checkout from "@/pages/checkout";
import { createBrowserRouter } from "react-router-dom";

export enum ROUTES {
  HOME = "/",
  PRODUCT = "/product",
  ERROR_404 = "/404",
  LOGIN = "/login",
  REGISTER = "/register",
  PRODUCTLIST = "/collection",
  CARTORDER = "/cart",
  CHECKOUT = "/checkouts",
  INFOR = "/infor",
}

const router = createBrowserRouter([
  //  Pages with main layout
  {
    Component: MainLayout, // install latest react router dom version to use this feature
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: `${ROUTES.PRODUCT}/:id`,
        element: <Product />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },

      {
        path: ROUTES.PRODUCTLIST,
        element: <ProductList />,
      },
      {
        path: "/test",
        element: <TestForm />,
      },
      {
        path: ROUTES.CARTORDER,
        element: <CartOrder />,
      },
      {
        path: ROUTES.CHECKOUT,
        element: <Checkout />,
      },
    ],
  },
  //  Pages with private layout
  {
    Component: PrivateLayout, // install latest react router dom version to use this feature
    children: [
      {
        path: "/private",
        element: <Home />,
      },
      {
        path: ROUTES.INFOR,
        element: <ChangePassword />,
      },
    ],
  },
  {
    Component: GuestLayout, // install latest react router dom version to use this feature
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

export default router;
