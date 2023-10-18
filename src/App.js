import Login from "./Pages/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./Compnents/NavBar/Navbar";

import HomePage from "./Pages/HomePage";
import Restaurents from "./Pages/Restaurents";
import Register from "./Pages/Register";
import SingleRestarent from "./Compnents/SingleRestaurent/SingleRestarent";
import CuisinePage from "./Pages/CuisinePage";
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
        path: "/restarents",
        element: <Restaurents />,
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
        path: "restarents/single/:id",
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
