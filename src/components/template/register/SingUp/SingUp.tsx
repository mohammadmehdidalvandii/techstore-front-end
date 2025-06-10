import React from 'react'
import './SingUp.css';
import { NavLink } from 'react-router-dom';

const SingUp:React.FC = ()=>{
  return (
    <section className="signup">
        <div className="wrapper">
            <h4 className="title">Create Account</h4>
            <p className="text">Join our tech community</p>
        </div>
         <form action="#" className="form">
            <div className="group_wrapper">
            <div className="group_form">
                <label htmlFor="" className="label_form">First Name</label>
                <input type="text" className="input_form" />
            </div>
            <div className="group_form">
                <label htmlFor="" className="label_form">Last Name</label>
                <input type="text" className="input_form" />
            </div>
            </div>
            <div className="group_form">
                <label htmlFor="" className="label_form">Email Address</label>
                <input type="text" className="input_form"/>
            </div>
            <div className="group_form">
                <label htmlFor="" className="label_form">Phone Number</label>
                <input type="text" className="input_form" />
            </div>
            <div className="group_form">
                <label htmlFor="" className="label_form">Password</label>
                <input type="text" className="input_form" />
            </div>
            <div className="group_form">
                <label htmlFor="" className="label_form">Confirm Password</label>
                <input type="text" className="input_form"/>
            </div>
                <button className="btn primary btn_signup">Sign Up</button>
                <p className='form_account'>Already have an account?
                    <NavLink to='/Login' className='link_signup'>Signin</NavLink>
                </p>
        </form>
    </section>
  )
}

export default SingUp