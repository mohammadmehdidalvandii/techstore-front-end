import React from 'react';
import './UserPanelNav.css'
import { Link } from 'react-router-dom';

const UserPanelNav:React.FC = ()=>{
  return (
    <div className='UserPanelNav'>
        <div className="userPanel_info">
            <img src="/images/user.jpg" alt="" />
            <h6>John Doe</h6>
            <span>john.doe@example.com</span>
        </div>
        <ul className="userPanel_menu">
            <li>
                <Link to='/UserPanel' className='link active'>Overview</Link>
            </li>
            <li>
                <Link to='/UserPanel/Orders' className='link'>Orders</Link>
            </li>
            <li>
                <Link to='/UserPanel/Wishlist' className='link'>Wishlist</Link>
            </li>
            <li>
                <Link to='/UserPanel/Address' className='link'>Address</Link>
            </li>
            <li>
                <Link to='/UserPanel/Payment' className='link'>Payment Methods</Link>
            </li>
            <li>
                <Link to='/UserPanel/Setting' className='link'>Setting</Link>
            </li>
        </ul>
    </div>
  )
}

export default UserPanelNav