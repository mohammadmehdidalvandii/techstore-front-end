import React from 'react';
import './DailyDeal.css'
import ProductCart from '@components/module/ProductCart/ProductCart';

const DailyDeal:React.FC = ()=>{
  return (
    <section className="dailyDeal">
        <div className="container">
            <h5 className="main_title">Daily Deals</h5>
            <div className="dailyDeal_items">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </div>
    </section>
  )
}

export default DailyDeal