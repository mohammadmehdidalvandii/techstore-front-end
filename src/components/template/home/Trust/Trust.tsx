import React from 'react';
import './Trust.css';
import { FaShieldAlt, FaTruck } from 'react-icons/fa';
import { FaHeadset } from "react-icons/fa6";


const trust:React.FC = ()=>{
  return (
    <section className="trust">
        <div className="container">
            <h5 className="main_title">Why choose Us</h5>
            <div className="trust_cart">
                <div className='item'>
                    <span className='icon'><FaTruck/></span>
                    <h6 className="title">Free Shipping</h6>
                    <p className="text">On orders over $100</p>
                </div>
                <div className='item'>
                    <span className='icon'><FaShieldAlt/> </span>
                    <h6 className="title">2-Year Warranty</h6>
                    <p className="text">On all electronics</p>
                </div>
                <div className='item'>
                    <span className='icon'><FaHeadset/></span>
                    <h6 className="title">24/7 Support</h6>
                    <p className="text">Expert technical support</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default trust