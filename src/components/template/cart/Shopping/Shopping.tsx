import React from 'react';
import './Shopping.css'
import { MdDelete } from 'react-icons/md';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Shopping:React.FC = ()=>{
  return (
   <section className="shopping">
        <div className="container">
            <div className="grid_shopping">
                <div className="box">
                    <div className="shopping_content">
                        <h6 className="title">Your Cart (3 items)</h6>
                        <button className="btn primary shopping_btn">
                            <span><MdDelete/></span>
                            <span>Clear cart</span>
                        </button>
                    </div>
                   <ShoppingCart/>
                   <ShoppingCart/>
                   <ShoppingCart/>
                </div>
                <div className="box order">
                    <h6 className="title">Order Summary</h6>
                    <ul className="shoppingCart_order">
                        <li className="item">
                            <span className="title">Subtotal</span>
                            <span className="text">$3,747.00</span>
                        </li>
                        <li className="item">
                            <span className="title">Shipping</span>
                            <span className="text">Free</span>
                        </li>
                        <li className="item">
                            <span className="title">Tax</span>
                            <span className="text">$299.76</span>
                        </li>
                    </ul>
                    <div className="cal_order">
                        <span className="title">Total</span>
                        <span className="text">$4,046.76</span>
                    </div>
                    <button className="btn primary btn_checkout">Proceed to Checkout</button>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Shopping