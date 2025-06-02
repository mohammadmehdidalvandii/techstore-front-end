import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer:React.FC = ()=>{
  return (
    <section className="footer">
        <div className="container">
            <div className="footer_items">
                <ul>
                    <h6>Connect With Us</h6>
                    <li>
                        <div className="media">
                            <NavLink to='' className='media_link'><FaFacebook/></NavLink>
                            <NavLink to='' className='media_link'><FaTwitter/></NavLink>
                            <NavLink to='' className='media_link'><FaInstagram/></NavLink>
                            <NavLink to='' className='media_link'><FaYoutube/></NavLink>
                        </div>
                    </li>
                </ul>
                <ul>
                    <h6>Quick Links</h6>
                    <li>
                        <NavLink to='/' className='footer_link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className='footer_link'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className='footer_link'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className='footer_link'>Deals</NavLink>
                    </li>
                </ul>
                <ul>
                    <h6>TechStore</h6>
                    <li>
                        <p className='text'>Your premium electronics destination</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer