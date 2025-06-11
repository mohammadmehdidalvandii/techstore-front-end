import React from 'react';
import './Team.css';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Team:React.FC = ()=>{
  return (
    <section className="team">
        <div className="container">
            <h2 className="team_title">Meet Our Team</h2>
            <div className="team_grid">
                <div className="team_card">
                    <img src="/images/user.jpg" alt="user"  className='img'/>
                    <h6 className="name">John Doe</h6>
                    <span className="job">Founder & CEO</span>
                    <div className="media">
                        <NavLink to='/' className='link'><FaLinkedin/></NavLink>
                        <NavLink to='/' className='link'><FaTwitter/></NavLink>
                    </div>
                </div>
                <div className="team_card">
                    <img src="/images/user.jpg" alt="user"  className='img'/>
                    <h6 className="name">John Doe</h6>
                    <span className="job">Founder & CEO</span>
                    <div className="media">
                        <NavLink to='/' className='link'><FaLinkedin/></NavLink>
                        <NavLink to='/' className='link'><FaTwitter/></NavLink>
                    </div>
                </div>
                <div className="team_card">
                    <img src="/images/user.jpg" alt="user"  className='img'/>
                    <h6 className="name">John Doe</h6>
                    <span className="job">Founder & CEO</span>
                    <div className="media">
                        <NavLink to='/' className='link'><FaLinkedin/></NavLink>
                        <NavLink to='/' className='link'><FaTwitter/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team