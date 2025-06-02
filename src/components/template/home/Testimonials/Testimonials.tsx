import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from "react-icons/fa6";


const Testimonials:React.FC = ()=>{
  return (
    <section className="testimonials">
        <div className="container">
            <h5 className="main_title">What Our Customers Say</h5>
            <div className="testimonials_items">
                <div className="commentCart">
                    <span className="icon"><FaQuoteLeft/></span>
                    <p className="text">"Best place to buy electronics online. Great prices and excellent customer support. Highly recommended!"</p>
                    <span className="name">Sarah Johnson</span>
                </div>
                <div className="commentCart">
                    <span className="icon"><FaQuoteLeft/></span>
                    <p className="text">"Amazing service and product quality. The delivery was super fast and the product exceeded my expectations!"</p>
                    <span className="name">Michael Brown</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials