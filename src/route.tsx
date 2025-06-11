import Home from "./page/Home/Home";
import Products from "@page/Products/Products";
import Contact from "@page/Contact/Contact";
import Cart from "@page/Cart/Cart";
import Login from "@page/Login/Login";
import Register from "@page/Register/Register";
import About from "@page/About/About";

const routes = [
    {path:'/' , element:<Home/>},
    {path:'/Products' , element:<Products/>},
    {path:'/Contact' , element:<Contact/>},
    {path:'/Cart' , element:<Cart/>},
    {path:'/Login' , element:<Login/>}, 
    {path:'/Register' , element:<Register/>}, 
    {path:'/About' , element:<About/>}, 
]

export default routes