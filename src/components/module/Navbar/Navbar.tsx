import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaSearch , FaShoppingCart , FaTimes, FaUser } from "react-icons/fa";


const Navbar:React.FC = ()=>{
    const [open, setOpen] = React.useState<boolean>(false);

    const handlerMenu:React.MouseEventHandler = ()=>{
        setOpen((open)=>!open)
    }
  return (
    <nav className='navbar'>
        <div className="container">
            <div className="wrapper">
                <NavLink to='/' className='logo'>TechStore</NavLink>
                <ul className="items">
                    <li>
                        <NavLink to='/' className='nav_link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Products' className='nav_link'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact' className='nav_link'>Contact</NavLink>
                    </li>
                </ul>
                <div className='menu'>
                    <NavLink to='/' className='nav_link'><FaSearch/></NavLink>
                    <NavLink to='/Cart' className='nav_link'><FaShoppingCart /></NavLink>
                    <NavLink to='/Login' className='nav_link'><FaUser/></NavLink>
                </div>
            </div>
            <div className="mobile">
                <div className='menu'>
                    <NavLink to='/' className='nav_link'><FaSearch/></NavLink>
                    <NavLink to='/Cart' className='nav_link'><FaShoppingCart /></NavLink>
                    <NavLink to='/' className='nav_link'><FaUser/></NavLink>
                </div>
                <NavLink to='/' className='logo'>TechStore</NavLink>
                <span className="mobile_icon" onClick={handlerMenu}>
                    {open ? (
                        <FaTimes/>
                    ) :(
                        <FaBars/>
                    )}
                </span>
                {open && (
                    <div className="mobile_menu">
                    <div className='menu'>
                    <NavLink to='/' className='nav_link'><FaSearch/></NavLink>
                    <NavLink to='/Cart' className='nav_link'><FaShoppingCart /></NavLink>
                    <NavLink to='/' className='nav_link'><FaUser/></NavLink>
                </div>
                  <ul className="items">
                    <li>
                        <NavLink to='/' className='nav_link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Products' className='nav_link'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='nav_link'>Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact' className='nav_link'>Contact</NavLink>
                    </li>
                </ul>
                </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar