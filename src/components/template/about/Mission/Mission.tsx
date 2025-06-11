import React from 'react'
import './Mission.css';
import { FaHandshake, FaHeart, FaLightbulb, FaStar } from 'react-icons/fa';

const Mission:React.FC = ()=>{
  return (
    <section className="mission">
        <div className="container">
                <h2 className="mission_title">Our Mission & Values</h2>
            <div className="mission_grid">
                <div className="mission_card">
                    <span className="icon"><FaStar/></span>
                    <h3 className="title">Quality First</h3>
                    <p className="text">we only offer products that meet our high standards of quality and reliability.</p>
                </div>
                <div className="mission_card">
                    <span className="icon"><FaHandshake/></span>
                    <h3 className="title">Customer Trust</h3>
                    <p className="text">Building long-term relationships through transparency and honest service.</p>
                </div>
                <div className="mission_card">
                    <span className="icon"><FaLightbulb/></span>
                    <h3 className="title">Innovation</h3>
                    <p className="text">Constantly exploring new technologies to bring you the latest innovation.</p>
                </div>
                <div className="mission_card">
                    <span className="icon"><FaHeart/></span>
                    <h3 className="title">Community</h3>
                    <p className="text">Supporting and growing with our local and global tech community</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission