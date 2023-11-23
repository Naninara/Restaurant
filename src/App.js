import Login from "./Pages/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./Compnents/NavBar/Navbar";

import HomePage from "./Pages/HomePage";
import Menu from "./Pages/Menu";
import Register from "./Pages/Register";
import SingleRestarent from "./Compnents/SingleRestaurent/SingleRestarent";
import CuisinePage from "./Pages/CuisinePage";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import ChangePass from "./Pages/ChangePass";
import Address from "./Pages/Address";

import SingleOrder from "./Pages/SingleOrder";
import Error from "./Pages/Error";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "Menu/single/:id",
        element: <SingleRestarent />,
      },
      {
        path: "cuisine/:name",
        element: <CuisinePage />,
      },
      {
        path: "cuisine/:name/single/:id",
        element: <SingleRestarent />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Orders />,
      },
      {
        path: "/order/:id",
        element: <SingleOrder />,
      },
      {
        path: "/changepassword",
        element: <ChangePass />,
      },
      {
        path: "/address",
        element: <Address />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
