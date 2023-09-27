import Login from "./Pages/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./Compnents/NavBar/Navbar";

import HomePage from "./Pages/HomePage";
import Restaurents from "./Pages/Restaurents";
import Register from "./Pages/Register";
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
