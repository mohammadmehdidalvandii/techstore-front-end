import React from 'react';
import './Content.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdMail , MdWatchLater  } from "react-icons/md";


const Content:React.FC = ()=>{
  return (
    <section className="content">
        <div className="container">
            <div className="grid_content">
                <div className="content_box">
                    <h6 className="content_title">Get in Touch</h6>
                    <p>Have questions? We're here to help. Send us a message and we'll respond as soon as possible.</p>
                    <ul className="items">
                        <li className='item'>
                            <span className="icon"><FaLocationDot/></span>
                            <div className="item_content">
                                <span>Our Location</span>
                                <p>123 Tech Street, Digital City <br/>Silicon Valley, CA 94043</p>
                            </div>
                        </li>
                        <li className='item'>
                            <span className="icon"><FaPhone/></span>
                            <div className="item_content">
                                <span>Phone Number</span>
                                <p>+1 (555) 123-4567</p>
                                <p>+1 (555) 987-6543</p>
                            </div>
                        </li>
                        <li className='item'>
                            <span className="icon"><MdMail/></span>
                            <div className="item_content">
                                <span>Email Address</span>
                                <p>info@techstore.com</p>
                                <p>support@techstore.com</p>
                            </div>
                        </li>
                        <li className='item'>
                            <span className="icon"><MdWatchLater/></span>
                            <div className="item_content">
                                <span>Working Hours</span>
                                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                                <p>Saturday: 10:00 AM - 6:00 PM</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="content_box">
                    <h6 className="content_title">Send us a Message</h6>
                    <form action="#" className="form">
                        <div className="group_form">
                            <label htmlFor="" className="label_form">Your Name</label>
                            <input type="text" className="input_form" />
                        </div>
                        <div className="group_form">
                            <label htmlFor="" className="label_form">Email Address</label>
                            <input type="text" className="input_form" />
                        </div>
                        <div className="group_form">
                            <label htmlFor="" className="label_form">Phone Number</label>
                            <input type="text" className="input_form" />
                        </div>
                        <div className="group_form">
                            <label htmlFor="" className="label_form">Subject</label>
                            <input type="text" className="input_form" />
                        </div>
                        <div className="group_form">
                            <label htmlFor="" className="label_form">Your Message</label>
                            <textarea  className="text_form" />
                        </div>
                        <button className="btn primary ">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content