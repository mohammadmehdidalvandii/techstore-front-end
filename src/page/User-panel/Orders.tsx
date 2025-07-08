import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import OrderList from '@components/template/user-panel/OrderList/OrderList'
import UserPanelNav from '@components/template/user-panel/UserPanelNav/UserPanelNav'
import React from 'react'

function Orders() {
  return (
      <>
    <Navbar/>
     <div className="container_userPanel container">
        <div className="userPanel_nav box">
            <UserPanelNav/>
        </div>
        <div className="userPanel_content box">
            <OrderList/>
        </div>
     </div>
    <Footer/>
    </>
  )
}

export default Orders