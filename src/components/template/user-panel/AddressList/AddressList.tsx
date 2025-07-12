import React from 'react';
import './AddressList.css';

const AddressList:React.FC = ()=>{
  return (
    <section className="addressList">
        <div className="titleAddress">
            <h5 className="title">Address List</h5>
            <button className="btn primary">+ address</button>
        </div>
        <div className="addressList_items">
            <div className="item">
                <h6 className="title">Home address</h6>
                <p className="address">123 main street apt4 new york ny 1000</p>
                <div className="buttons">
                    <button className="btn primary">Edit</button>
                    <button className="btn primary">Delete</button>
                </div>
            </div>
            <div className="item">
                <h6 className="title">Home address</h6>
                <p className="address">123 main street apt4 new york ny 1000</p>
                <div className="buttons">
                    <button className="btn primary">Edit</button>
                    <button className="btn primary">Delete</button>
                </div>
            </div>
            <div className="item">
                <h6 className="title">Home address</h6>
                <p className="address">123 main street apt4 new york ny 1000</p>
                <div className="buttons">
                    <button className="btn primary">Edit</button>
                    <button className="btn primary">Delete</button>
                </div>
            </div>
            <div className="item">
                <h6 className="title">Home address</h6>
                <p className="address">123 main street apt4 new york ny 1000</p>
                <div className="buttons">
                    <button className="btn primary">Edit</button>
                    <button className="btn primary">Delete</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddressList