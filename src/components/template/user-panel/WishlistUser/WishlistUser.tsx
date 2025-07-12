import React from 'react';
import './WishlistUser.css';

const WishlistUser:React.FC = ()=>{
  return (
    <section className="wishlistUser">
        <h5 className="title">Wishlist</h5>
        <div className="wishlistUsers_items">
            <div className="item">
                <img src="/images/user.jpg" alt="" className="img" />
                <div className="content">
                    <p className="name">iphone 16 pro</p>
                    <span className="price">$999.00</span>
                    <div className="button_wrapper">
                        <button className="btn primary">Add basket</button>
                        <button className="btn primary">Delete</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="/images/user.jpg" alt="" className="img" />
                <div className="content">
                    <p className="name">iphone 16 pro</p>
                    <span className="price">$999.00</span>
                    <div className="button_wrapper">
                        <button className="btn primary">Add basket</button>
                        <button className="btn primary">Delete</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="/images/user.jpg" alt="" className="img" />
                <div className="content">
                    <p className="name">iphone 16 pro</p>
                    <span className="price">$999.00</span>
                    <div className="button_wrapper">
                        <button className="btn primary">Add basket</button>
                        <button className="btn primary">Delete</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="/images/user.jpg" alt="" className="img" />
                <div className="content">
                    <p className="name">iphone 16 pro</p>
                    <span className="price">$999.00</span>
                    <div className="button_wrapper">
                        <button className="btn primary">Add basket</button>
                        <button className="btn primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WishlistUser