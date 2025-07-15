import React from 'react';
import './Stats.css';
import { FaShoppingCart  , FaUsers , FaBox} from 'react-icons/fa';
import { FiDollarSign } from "react-icons/fi";


const Stats:React.FC = ()=>{
  return (
    <section className="stats">
        <div className="stats_items">
            <div className="item">
                <span className="icon"><FaShoppingCart/></span>
                <div className="content">
                    <p className="text">Total Orders</p>
                    <h5 className="number">1,234</h5>
                    <span className="percent">+ 12.5%</span>
                </div>
            </div>
            <div className="item">
                <span className="icon"><FiDollarSign/></span>
                <div className="content">
                    <p className="text">Total Revenue</p>
                    <h5 className="number">$45,678</h5>
                    <span className="percent">+ 8.3%</span>
                </div>
            </div>
            <div className="item">
                <span className="icon"><FaUsers/></span>
                <div className="content">
                    <p className="text">Total Customers</p>
                    <h5 className="number">8,901</h5>
                    <span className="percent">+ 5.2%</span>
                </div>
            </div>
            <div className="item">
                <span className="icon"><FaBox/></span>
                <div className="content">
                    <p className="text">Total Products</p>
                    <h5 className="number">531</h5>
                    <span className="percent">+ 3.1%</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats