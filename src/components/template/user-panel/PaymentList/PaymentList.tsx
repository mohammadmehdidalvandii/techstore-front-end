import React from 'react';
import './PaymentList.css';

const PaymentList:React.FC = ()=>{
  return (
    <section className="paymentList">
        <div className="title_addCart">
            <h5 className="title">Payment Methods</h5>
            <button className="btn primary">+add cart</button>
        </div>
        <div className="paymentList_items">
            <div className="item">
                <div className="content">
                    <h6 className="title">Visa Cart us</h6>
                    <span className="expires">Expires 12/26</span>
                </div>
                <div className="buttons">
                    <button className="btn primary">Edit</button>
                    <button className="btn primary">Delete</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PaymentList