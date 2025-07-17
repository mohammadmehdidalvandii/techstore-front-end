import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaBox, FaHome, FaShoppingCart, FaStar, FaTag, FaUsers } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

const Sidebar:React.FC = ()=>{
  return (
    <section className="sidebar">
        <div className="sidebar_wrapper">
            <ul className="sidebar_items">
                <li className="item">
                    <NavLink to='/Admin' className='sidebar_link sidebar_link_active '>
                        <span className="icon"><FaHome/></span>
                        <span className="text">Dashboard</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to='/Admin/Products' className='sidebar_link'>
                        <span className="icon"><FaBox/></span>
                        <span className="text">Products</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to='/Admin/' className='sidebar_link'>
                        <span className="icon"><FaShoppingCart/></span>
                        <span className="text">Orders</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to='/Admin/' className='sidebar_link'>
                        <span className="icon"><FaUsers/></span>
                        <span className="text">Customers</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to='/Admin/' className='sidebar_link'>
                        <span className="icon"><FaTag/></span>
                        <span className="text">Categories</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to='/Admin/' className='sidebar_link'>
                        <span className="icon"><FaStar/></span>
                        <span className="text">Reviews</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to='/Admin/' className='sidebar_link'>
                        <span className="icon"><MdSettings/></span>
                        <span className="text">Settings</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Sidebar