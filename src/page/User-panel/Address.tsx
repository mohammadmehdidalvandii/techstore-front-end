import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import UserPanelNav from '@components/template/user-panel/UserPanelNav/UserPanelNav'
import React from 'react'

const Address:React.FC = ()=>{
  return (
          <>
    <Navbar/>
     <div className="container_userPanel container">
        <div className="userPanel_nav box">
            <UserPanelNav/>
        </div>
        <div className="userPanel_content box">
            address
        </div>
     </div>
    <Footer/>
    </>
  )
}

export default Address