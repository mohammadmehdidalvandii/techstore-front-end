import React from 'react';
import './AdminHeader.css';
import { MdOutlineExitToApp } from "react-icons/md";


const AdminHeader:React.FC = ()=>{
  return (
    <section className="adminHeader">
        <div className="wrapper">
            <h6 className="adminHeader_title">techstore admin</h6>
            <div className="name_btn">
                <p className="name">hi admin John Doe welcome Back !</p>
                <button className='button'><MdOutlineExitToApp/></button>
            </div>
        </div>
    </section>
  )
}

export default AdminHeader