import React from 'react';
import './Signin.css';
import { NavLink } from 'react-router-dom';

const Signin:React.FC = ()=>{
  return (
    <section className="signin">
        <div className="wrapper">
            <h4 className="title">Welcome Back  </h4>
            <p className="text">Sign in to your account</p>
        </div>
        <form action="#" className="form">
            <div className="group_form">
                <label htmlFor="" className="label_form">Email Address</label>
                <input type="text" className="input_form" placeholder='example@gmail.com' />
            </div>
            <div className="group_form">
                <label htmlFor="" className="label_form">Password</label>
                <input type="text" className="input_form"  placeholder='**********'/>
            </div>
                <NavLink to='/' className='signin_forget'>Forgot Password?</NavLink>
                <button className="btn primary btn_signin">Signin</button>
                <p className='form_account'>Don't have an account?
                    <NavLink to='/Register' className='link_signup'>Sign Up</NavLink>
                </p>
        </form>
    </section>
  )
}

export default Signin