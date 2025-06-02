import React from 'react';
import './Products.css';
import ProductCart from '@components/module/ProductCart/ProductCart';
import { NavLink } from 'react-router-dom';

const Products:React.FC = ()=>{
  return (
    <section className="products">
        <div className="container">
            <h5 className="main_title">Explore More Products</h5>
            <div className="products_btns">
                <button className="product_btn active">All products</button>
                <button className="product_btn">SmartPhone</button>
                <button className="product_btn">Laptops</button>
                <button className="product_btn">Audio</button>
                <button className="product_btn">Accessories</button>
            </div>
            <div className="products_items">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
            <NavLink to='/' className='btn primary products_more'>Load More Products</NavLink>
        </div>
    </section>
  )
}

export default Products