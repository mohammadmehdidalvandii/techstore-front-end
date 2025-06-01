import React from 'react';
import './SpecialDeals.css';
import { NavLink } from 'react-router-dom';

const SpecialDeals:React.FC = ()=>{
  return (
    <section className="specialDeals">
        <div className="container">
            <h5 className="main_title">Special Deals</h5>
            <div className="cart">
                <div>
                    <h4 className='title'>Flash Sale</h4>
                    <p className="text">Up to 50% off on selected items</p>
                    <NavLink to='' className="btn primary">Shop now</NavLink>
                </div>
                <div>
                    <h4 className='title'>Bundle Deals</h4>
                    <p className="text">Save on product bundles</p>
                    <NavLink to='' className="btn primary">Shop now</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialDeals