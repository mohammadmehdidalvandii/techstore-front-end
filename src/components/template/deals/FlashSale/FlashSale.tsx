import React from 'react';
import './FlashSale.css';
import ProductCart from '@components/module/ProductCart/ProductCart';

const FlashSale:React.FC = ()=>{
  return (
    <section className="flashSale">
        <div className="container">
            <h4 className="main_title">Flash Sale</h4>
            <div className="flashSale_items">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </div>
    </section>
  )
}

export default FlashSale