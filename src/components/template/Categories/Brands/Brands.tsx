import React from 'react';
import './Brands.css';

const Brands:React.FC = ()=>{
  return (
    <section className="brands">
        <div className="container">
            <h5 className="main_title">Popular Brands</h5>
            <div className="popular_brands">
                <div className="brands_item">
                    <span className="icon">icon</span>
                    <p className="text">Brand Name</p>
                </div>
                <div className="brands_item">
                    <span className="icon">icon</span>
                    <p className="text">Brand Name</p>
                </div>
                <div className="brands_item">
                    <span className="icon">icon</span>
                    <p className="text">Brand Name</p>
                </div>
                <div className="brands_item">
                    <span className="icon">icon</span>
                    <p className="text">Brand Name</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands