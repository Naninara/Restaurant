import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./Compnents/NavBar/Navbar";

import HomePage from "./Pages/HomePage";
import Restaurents from "./Pages/Restaurents";
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
