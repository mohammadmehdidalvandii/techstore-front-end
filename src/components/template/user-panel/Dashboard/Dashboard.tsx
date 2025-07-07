import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard:React.FC = ()=>{
  return (
    <section className="dashboard">
        <h4 className="title">Dashboard Overview</h4>
        <div className="dashboard_item">
            <div className="item">
                <span className="title">Total Orders</span>
                <span className="text">12</span>
            </div>
            <div className="item">
                <span className="title">Wishlist item</span>
                <span className="text">8</span>
            </div>
            <div className="item">
                <span className="title">Saved Address</span>
                <span className="text">3</span>
            </div>
            <div className="item">
                <span className="title">Payment Methods</span>
                <span className="text">2</span>
            </div>
        </div>
        <div className="recentOrder">
            <div className="titleLink">
                <h6 className="title">Recent Order</h6>
                <Link to='/UserPanel/Orders' className='link'>view all</Link>
            </div>
            <div className="recentOrder_cart">
                <div className="content">
                    <p>Order #12345</p>
                    <p>iPhone 15 Pro</p>
                    <p>March 15, 2024</p>
                </div>
                <p className="status">Delivered</p>
                <p className="price ">$999.00</p>
            </div>
                <div className="recentOrder_cart">
                    <div className="content">
                        <p>Order #12345</p>
                        <p>iPhone 15 Pro</p>
                        <p>March 15, 2024</p>
                    </div>
                    <p className="status">Delivered</p>
                    <p className="price ">$999.00</p>
                </div>
        </div>
        <div className="wishlist">
            <div className="titleLink">
                <h6 className="title">Wishlist Items</h6>
                <Link to='/UserPanel/Wishlist' className='link'>view all</Link>
            </div>
            <div className="wishlist_wrapper">
                <div className="wishlist_cart">
                    <img src="/images/user.jpg" alt="" className="img" />
                    <p className="name">AirPods Pro</p>
                    <span className="price">$249.00</span>
                    <button className="btn primary">buy</button>
                </div>
                <div className="wishlist_cart">
                    <img src="/images/user.jpg" alt="" className="img" />
                    <p className="name">AirPods Pro</p>
                    <span className="price">$249.00</span>
                    <button className="btn primary">buy</button>
                </div>
                <div className="wishlist_cart">
                    <img src="/images/user.jpg" alt="" className="img" />
                    <p className="name">AirPods Pro</p>
                    <span className="price">$249.00</span>
                    <button className="btn primary">buy</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard