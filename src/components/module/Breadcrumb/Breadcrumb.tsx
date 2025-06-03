import React from 'react';
import './Breadcrumb.css';
import { NavLink } from 'react-router-dom';
import { BreadcrumbType } from 'type';

const Breadcrumb:React.FC<BreadcrumbType> = ({title , text})=>{
  return (
    <div className="breadcrumb">
        <div className="content">
            <h5 className="title">{title}</h5>
            <div className="wrapper">
                <NavLink to='/' className='link'>Home</NavLink>
                
                /
                <span className="text">{text}</span>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb