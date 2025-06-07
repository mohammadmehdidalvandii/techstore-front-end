import Home from "./page/Home/Home";
import Products from "@page/Products/Products";
import Contact from "@page/Contact/Contact";

const routes = [
    {path:'/' , element:<Home/>},
    {path:'/Products' , element:<Products/>},
    {path:'/Contact' , element:<Contact/>},
]

export default routes