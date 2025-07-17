import React from 'react';
import './OrdersList.css'
import { FaEdit, FaEye, FaPrint } from 'react-icons/fa';

const OrdersList:React.FC = ()=>{
  return (
    <section className="orderList">
           <table >
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12343</td>
                                <td>
                                    <div className="customer-cell">
                                        {/* <img src="../images/avatars/user3.jpg" alt="Mike Johnson"> */}
                                        <div>
                                            <h4>Mike Johnson</h4>
                                            <p>mike.johnson@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>2024-03-13</td>
                                <td>$249.00</td>
                                <td>
                                    <span className="payment-method">
                                        <i className="fab fa-cc-paypal"></i>
                                        PayPal
                                    </span>
                                </td>
                                <td><span className="status-badge pending">Pending</span></td>
                                <td>
                                    <div className="buttons">
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><FaEdit/></button>
                                    <button className="btn primary"><FaPrint/></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
    </section>
  )
}

export default OrdersList