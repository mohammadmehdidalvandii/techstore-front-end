import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import React from 'react'

const UserPanel:React.FC = ()=>{
  return (
    <>
    <Navbar/>
     <div className="container_userPanel container">
        <div className="userPanel_nav box"></div>
        <div className="userPanel_content box"></div>
     </div>
    <Footer/>
    </>
  )
}

export default UserPanel