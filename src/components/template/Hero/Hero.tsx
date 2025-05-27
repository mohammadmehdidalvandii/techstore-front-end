import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'

const Hero:React.FC = ()=>{
  return (
    <header className='hero'>
        <div className="container">
            <div className="content">
                <h1>Welcome to TechStore</h1>
                <p>Your Ultimate Destination for Premium Electronics</p>
                <div className="hero_link">
                    <NavLink to='' className='btn primary'>ShOP NOW</NavLink>
                    <NavLink to='' className='btn secondary'>VIEW DEALS</NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hero