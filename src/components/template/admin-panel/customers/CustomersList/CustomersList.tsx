import React from 'react';
import './CustomersList.css';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const CustomersList:React.FC = ()=>{
  return (
    <section className="customerList">
          <table >
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Orders</th>
                                <th>Total Spent</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="customer-cell">
                                        {/* <img src="../images/avatars/user3.jpg" alt="Mike Johnson"> */}
                                        <div>
                                            <h4>Mike Johnson</h4>
                                            <p>Member since Jan 2024</p>
                                        </div>
                                    </div>
                                </td>
                                <td>mike.johnson@example.com</td>
                                <td>+1 234 567 892</td>
                                <td>5</td>
                                <td>$567.00</td>
                                <td><span className="status-badge inactive">Inactive</span></td>
                                <td>
                                    <div className="buttons">
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><FaEdit/></button>
                                    <button className="btn primary"><MdDelete/></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
    </section>
  )
}

export default CustomersList