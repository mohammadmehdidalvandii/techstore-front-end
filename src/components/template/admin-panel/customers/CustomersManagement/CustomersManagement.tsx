import React from 'react';
import './CustomersManagement.css'
import { NavLink } from 'react-router-dom';

const CustomersManagement:React.FC = ()=>{
  return (
    <section className="management">
        <div className="wrapper">
            <h5 className="title">Customers Management</h5>
            <NavLink to='' className='btn primary' style={{width:'150px'}}>Export Customers</NavLink>
        </div>
    </section>
  )
}

export default CustomersManagement