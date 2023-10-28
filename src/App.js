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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
