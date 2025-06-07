import React from 'react';
import './ShoppingCart.css'
import { MdDelete } from 'react-icons/md';

const ShoppingCart:React.FC = ()=>{
  return (
    <div className="shoppingCart">
                        <img src="/images/p.jpg" alt="" />
                        <div className="shoppingCart_content">
                            <h6 className="name">iPhone 15 Pro</h6>
                            <p>256GB, Natural Titanium</p>
                            <span>$999.00</span>
                        </div>
                        <div className="shoppingCart_counter">
                            <button>+</button>
                            <span>0</span>
                            <button>-</button>
                        </div>
                        <button className="shoppingCart_delete"><MdDelete/></button>
     </div>
  )
}

export default ShoppingCart