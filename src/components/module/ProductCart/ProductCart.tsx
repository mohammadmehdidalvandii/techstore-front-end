import React from 'react';
import './ProductCart.css';
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { GrTransaction } from "react-icons/gr";

const ProductCart:React.FC = ()=>{
  return (
    <div className="productCart">
                    <div className='btn_img'>
                        <img src="/images/p.jpg" alt="" className='image' />
                        <div className="btn_bg">
                            <button className="addToCart">
                                <span><FaShoppingCart/></span>
                                <span>ADD TO CART</span>
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <h6>iphone 16 pro</h6>
                        <p>latest Apple smartPhone</p>
                        <span>$999.99</span>
                    </div>
                    <div className="allBtn">
                        <button className="btn"><FaHeart/></button>
                        <button className="btn"><FaEye/></button>
                        <button className="btn"><GrTransaction/></button>
                    </div>
                </div>
  )
}

export default ProductCart