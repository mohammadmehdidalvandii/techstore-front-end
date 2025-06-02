import React from 'react';
import './Brands.css';

const Brands:React.FC = ()=>{
  return (
    <section className="brands">
        <div className="container">
            <h5 className="main_title">Our Trusted Brands</h5>
            <div className="brands_items">
                <span className='text'>Sony</span>
                <span className='text'>Sony</span>
                <span className='text'>Sony</span>
                <span className='text'>Sony</span>
                <span className='text'>Sony</span>
            </div>
        </div>
    </section>
  )
}

export default Brands