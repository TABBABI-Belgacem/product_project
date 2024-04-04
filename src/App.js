
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Components/Cart/Cart";
import Brands from "./Components/Brands/Brands";
import Categories from "./Components/Categories/Categories";

let routers = createBrowserRouter([

  {  path: "/",element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <Cart /> },
      { path: "/brands", element: <Brands /> },
      { path: "/products", element: <Products /> },
      { path: "/categories", element: <Categories /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (

<RouterProvider router={routers}></RouterProvider>

)
}

export default App;
