import React from 'react';
import './Categories.css';
import { FiSmartphone } from "react-icons/fi";
import { FaLaptop , FaHeadphones , FaTv } from "react-icons/fa";


const Categories:React.FC = ()=>{
  return (
    <section className="categories">
        <div className="container">
            <div className="categories_title">
                <h5 className="main_title">Shop by Category</h5>
            </div>
            <div className="items">
                <div className="item">
                    <span>
                        <FiSmartphone/>
                    </span>
                    <p className='text'>SmartPhones</p>
                    <p className='paraph'>Latest mobile devices</p>
                </div>
                <div className="item">
                    <span>
                        <FaLaptop/>
                    </span>
                    <p className='text'>Laptops</p>
                    <p className='paraph'>Powerful computing</p>
                </div>
                <div className="item">
                    <span>
                        <FaHeadphones/>
                    </span>
                    <p className='text'>Audio</p>
                    <p className='paraph'>Premium sound devices</p>
                </div>
                <div className="item">
                    <span>
                        <FaTv/>
                    </span>
                    <p className='text'>TV & Displays</p>
                    <p className='paraph'>Stunning visuals</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories