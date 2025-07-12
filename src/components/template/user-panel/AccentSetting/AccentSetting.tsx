import React from 'react';
import './AccentSetting.css'

const AccentSetting:React.FC = ()=>{
  return (
    <section className="accentSetting">
            <h5 className="title">Accent Setting</h5>
            <form action="#" className="form">
                <div className="group_form">
                    <label htmlFor="" className="label_form">Full Name</label>
                    <input type="text" className="input_form" />
                </div>
                <div className="group_form">
                    <label htmlFor="" className="label_form">Email Address</label>
                    <input type="text" className="input_form" />
                </div>
                <div className="group_form">
                    <label htmlFor="" className="label_form">Phone Password</label>
                    <input type="text" className="input_form" />
                </div>
                <div className="group_form">
                    <label htmlFor="" className="label_form">Change Password</label>
                    <input type="text" className="input_form" />
                </div>
                <button className="btn primary">Save</button>
            </form>
    </section>
  )
}

export default AccentSetting