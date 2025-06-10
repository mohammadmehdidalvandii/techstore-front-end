import Home from "./page/Home/Home";
import Products from "@page/Products/Products";
import Contact from "@page/Contact/Contact";
import Cart from "@page/Cart/Cart";
import Login from "@page/Login/Login";

const routes = [
    {path:'/' , element:<Home/>},
    {path:'/Products' , element:<Products/>},
    {path:'/Contact' , element:<Contact/>},
    {path:'/Cart' , element:<Cart/>},
    {path:'/Login' , element:<Login/>},
]

export default routes