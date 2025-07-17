import React from 'react';
import './FilterProducts.css';

const FilterProducts:React.FC = ()=>{
  return (
    <section className="filterProducts">
        <div className="wrapper">
            <select name="" id="" className="select">
                <option value="">All Categories</option>
                <option value="">Phones</option>
                <option value="">Laptops</option>
                <option value="">Tablets</option>
                <option value="">Accessories</option>
            </select>
            <select name="" id="" className="select">
                <option value="">All Status</option>
                <option value="">In Stock</option>
                <option value="">Low Stock</option>
                <option value="">Out Of Stock</option>
            </select>
            <select name="" id="" className="select">
                <option value="">Newest</option>
                <option value="">Price: Low to High</option>
                <option value="">Price: High to Low</option>
                <option value="">Name</option>
            </select>
        </div>
    </section>
  )
}

export default FilterProducts