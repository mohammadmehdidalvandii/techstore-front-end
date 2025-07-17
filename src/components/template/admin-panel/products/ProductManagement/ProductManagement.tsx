import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductManagement:React.FC = ()=>{
  return (
    <section className="management">
        <div className="wrapper">
            <h5 className="title">Products Management</h5>
            <NavLink to='/Admin/Products/AddProduct' className='btn primary'>Add Products</NavLink>
        </div>
    </section>
  )
}

export default ProductManagement