import React from 'react';
import './Store.css';
import ProductCart from '@components/module/ProductCart/ProductCart';

const Store:React.FC = ()=>{
  return (
    <section className="store_container">
        <div className='category'>
            <div className="box">
                <h6 className="box_title">Categories</h6>
                <div className="box_wrapper">
                    <button className="box_btn active">AllProducts(25)</button>
                    <button className="box_btn">SmartPhones(25)</button>
                    <button className="box_btn">Laptops(25)</button>
                    <button className="box_btn">Audio Devices(25)</button>
                    <button className="box_btn">Accessories(25)</button>
                </div>
            </div>
            <div className="box">
                <h6 className="box_title">Brands</h6>
                <div className="box_wrapper">
                    <button className="box_btn">Apple(25)</button>
                    <button className="box_btn">Samsung(25)</button>
                    <button className="box_btn">Sony(25)</button>
                    <button className="box_btn">Dell(25)</button>
                    <button className="box_btn">Lenovo(25)</button>
                </div>
            </div>
        </div>
        <div className='product'>
            <div className="grid_products">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </div>
    </section>
  )
}

export default Store