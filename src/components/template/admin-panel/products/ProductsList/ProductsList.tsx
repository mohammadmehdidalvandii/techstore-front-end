import React from 'react';
import './ProductsList.css';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ProductsList:React.FC = ()=>{
  return (
    <section className="productList">
        <table>
                        <thead>
                            <tr>
    
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-cell">
                                        {/* <img src="../images/products/airpods.jpg" alt="AirPods Pro"> */}
                                        <div>
                                            <h4>AirPods Pro</h4>
                                            <p>SKU: APP-2ND-GEN</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Accessories</td>
                                <td>$249.00</td>
                                <td>0</td>
                                <td><span className="status-badge out-of-stock">Out of Stock</span></td>
                                <td>
                                    <div className="buttons">
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><FaEdit/></button>
                                    <button className="btn primary"><MdDelete/></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-cell">
                                        {/* <img src="../images/products/airpods.jpg" alt="AirPods Pro"> */}
                                        <div>
                                            <h4>AirPods Pro</h4>
                                            <p>SKU: APP-2ND-GEN</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Accessories</td>
                                <td>$249.00</td>
                                <td>0</td>
                                <td><span className="status-badge out-of-stock">Out of Stock</span></td>
                                <td>
                                    <div className="buttons">
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><FaEdit/></button>
                                    <button className="btn primary"><MdDelete/></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-cell">
                                        {/* <img src="../images/products/airpods.jpg" alt="AirPods Pro"> */}
                                        <div>
                                            <h4>AirPods Pro</h4>
                                            <p>SKU: APP-2ND-GEN</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Accessories</td>
                                <td>$249.00</td>
                                <td>0</td>
                                <td><span className="status-badge out-of-stock">Out of Stock</span></td>
                                <td>
                                    <div className="buttons">
                                    <button className="btn primary"><FaEye/></button>
                                    <button className="btn primary"><FaEdit/></button>
                                    <button className="btn primary"><MdDelete/></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-cell">
                                        {/* <img src="../images/products/airpods.jpg" alt="AirPods Pro"> */}
                                        <div>
                                            <h4>AirPods Pro</h4>
                                            <p>SKU: APP-2ND-GEN</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Accessories</td>
                                <td>$249.00</td>
                                <td>0</td>
                                <td><span className="status-badge out-of-stock">Out of Stock</span></td>
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

export default ProductsList