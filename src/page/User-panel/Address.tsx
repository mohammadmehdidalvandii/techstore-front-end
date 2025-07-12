import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import AddressList from '@components/template/user-panel/AddressList/AddressList'
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
            <AddressList/>
        </div>
     </div>
    <Footer/>
    </>
  )
}

export default Address