import React from 'react';
import './Popular.css'
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLaptop  , FaHeadphones } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { LiaKeyboardSolid } from "react-icons/lia";


const Popular:React.FC = ()=>{
  return (
    <section className="popular">
        <div className="container">
            <h5 className="main_title">Popular Subcategories</h5>
            <div className="popular_items">
                <div className="popular_item">
                    <span className="icon"><IoMdPhonePortrait/></span>
                    <h6 className="title">Gaming Phone</h6>
                    <span className="text">15 Products</span>
                </div>
                <div className="popular_item">
                    <span className="icon"><FaLaptop/></span>
                    <h6 className="title">Gaming Laptops</h6>
                    <span className="text">20 Products</span>
                </div>
                <div className="popular_item">
                    <span className="icon"><FaHeadphones/></span>
                    <h6 className="title">Wireless Earbuds</h6>
                    <span className="text">25 Products</span>
                </div>
                <div className="popular_item">
                    <span className="icon"><FaTabletScreenButton/></span>
                    <h6 className="title">Tablets</h6>
                    <span className="text">10 Products</span>
                </div>
                <div className="popular_item">
                    <span className="icon"><IoWatch/></span>
                    <h6 className="title">Smart Watch</h6>
                    <span className="text">18 Products</span>
                </div>
                <div className="popular_item">
                    <span className="icon"><LiaKeyboardSolid/></span>
                    <h6 className="title">Mechanical Keyboards</h6>
                    <span className="text">30 Products</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popular