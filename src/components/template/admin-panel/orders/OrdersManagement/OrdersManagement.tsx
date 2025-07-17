import React from 'react';
import './OrdersManagement.css';
import { NavLink } from 'react-router-dom';

const OrdersManagement:React.FC = ()=>{
  return (
    <section className="management">
        <div className="wrapper">
            <h5 className="title">Order Recent</h5>
            <NavLink to=''className="btn primary">Export Orders</NavLink>
        </div>
    </section>
  )
}

export default OrdersManagement