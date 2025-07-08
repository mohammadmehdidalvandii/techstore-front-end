import React from "react";
import "./OrderList.css";

const OrderList: React.FC = () => {
  return (
    <div className="orderList">
      <h5 className="title">My Orders</h5>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Products</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>March 15, 2024</td>
            <td>iPhone 15 Pro</td>
            <td>$999.00</td>
            <td>
              <span>Delivered</span>
            </td>
            <td className="btn_wrapper">
              <button className="btn primary">
                details
              </button>
              <button className="btn primary">
                delete
              </button>
            </td>
          </tr>
          <tr>
            <td>#12345</td>
            <td>March 15, 2024</td>
            <td>iPhone 15 Pro</td>
            <td>$999.00</td>
            <td>
              <span>Delivered</span>
            </td>
            <td className="btn_wrapper">
              <button className="btn primary">
                details
              </button>
              <button className="btn primary">
                delete
              </button>
            </td>
          </tr>
       
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
