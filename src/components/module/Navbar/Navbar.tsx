import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaSearch , FaShoppingCart , FaUser } from "react-icons/fa";


const Navbar:React.FC = ()=>{
  return (
    <nav className='navbar'>
        <div className="container">
            <div className="wrapper">
                <NavLink to='/' className='logo'>TechStore</NavLink>
                <ul className="items">
                    <li>
                        <NavLink to='' className='nav_link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Contact</NavLink>
                    </li>
                </ul>
                <div className='menu'>
                    <NavLink to='/' className='nav_link'><FaSearch/></NavLink>
                    <NavLink to='/' className='nav_link'><FaShoppingCart /></NavLink>
                    <NavLink to='/' className='nav_link'><FaUser/></NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar