import React from 'react';
import './ArticleCart.css';
import { NavLink } from 'react-router-dom';

const ArticleCart:React.FC = ()=>{
  return (
      <div className="articleCart">
                    <img src="/images/p.jpg" alt="" className="image" />
                    <span className="date">10 <br /> May</span>
                    <div className="content">
                        <h6>Best Gaming Laptops of 2024</h6>
                        <p>Our comprehensive review of the top gaming laptops for serious gamers...</p>
                    </div>
                        <NavLink to='' className='more'>Read More</NavLink>
                </div>
  )
}

export default ArticleCart