import Home from "./page/Home/Home";
import Products from "@page/Products/Products";
import Contact from "@page/Contact/Contact";
import Cart from "@page/Cart/Cart";
import Login from "@page/Login/Login";
import Register from "@page/Register/Register";
import About from "@page/About/About";
import Deals from "@page/Deals/Deals";
import Categories from "@page/Categories/Categories";
//  User Panel
import UserPanel from "@page/User-panel/User-panel";
import Orders from "@page/User-panel/Orders";
import Wishlist from "@page/User-panel/Wishlist";
import Address from "@page/User-panel/Address";
import Payment from "@page/User-panel/Payment";
import Settings from "@page/User-panel/Settings";
// Admin Panel
import Admin from "@page/Admin/Admin";


const routes = [
    {path:'/' , element:<Home/>},
    {path:'/Products' , element:<Products/>},
    {path:'/Contact' , element:<Contact/>},
    {path:'/Cart' , element:<Cart/>},
    {path:'/Login' , element:<Login/>}, 
    {path:'/Register' , element:<Register/>}, 
    {path:'/About' , element:<About/>}, 
    {path:'/Deals' , element:<Deals/>}, 
    {path:'/Categories' , element:<Categories/>}, 
    {path:'/UserPanel' , element:<UserPanel/>}, 
    {path:'/UserPanel/Orders' , element:<Orders/>}, 
    {path:'/UserPanel/Wishlist' , element:<Wishlist/>}, 
    {path:'/UserPanel/Address' , element:<Address/>}, 
    {path:'/UserPanel/Payment' , element:<Payment/>}, 
    {path:'/UserPanel/Settings' , element:<Settings/>},
    {path:'/Admin' , element:<Admin/>} 
]

export default routes