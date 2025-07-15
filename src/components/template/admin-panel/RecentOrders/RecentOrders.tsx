import React from 'react';
import './RecentOrders.css';
import { NavLink } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const RecentOrders:React.FC = ()=>{
  return (
    <section className="recentOrders">
        <div className="title_link">
            <h6 className='title'>Recent Orders</h6>
            <NavLink to='/Admin/Orders' className='link'>View All</NavLink>
        </div>
        <div className="wrapper">
               <table className="admin_table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>John Doe</td>
                                <td>iPhone 15 Pro</td>
                                <td>$999.00</td>
                                <td><span className="status-badge delivered">Delivered</span></td>
                                <td>2024-03-15</td>
                                <td className='buttons'>
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><MdDelete/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#12344</td>
                                <td>Jane Smith</td>
                                <td>MacBook Pro M3</td>
                                <td>$1,299.00</td>
                                <td><span className="status-badge processing">Processing</span></td>
                                <td>2024-03-14</td>
                                <td className='buttons'>
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><MdDelete/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#12343</td>
                                <td>Mike Johnson</td>
                                <td>AirPods Pro</td>
                                <td>$249.00</td>
                                <td><span className="status-badge pending">Pending</span></td>
                                <td>2024-03-13</td>
                                <td className='buttons'>
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><MdDelete/></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    </section>
  )
}

export default RecentOrders