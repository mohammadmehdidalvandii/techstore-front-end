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
                <div className="box">items</div>
            </div>
        </div>
   </section>
  )
}

export default Shopping