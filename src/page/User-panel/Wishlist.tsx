import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import UserPanelNav from '@components/template/user-panel/UserPanelNav/UserPanelNav'
import WishlistUser from '@components/template/user-panel/WishlistUser/WishlistUser'
import React from 'react'

const Wishlist:React.FC = ()=>{
  return (
      <>
    <Navbar/>
     <div className="container_userPanel container">
        <div className="userPanel_nav box">
            <UserPanelNav/>
        </div>
        <div className="userPanel_content box">
            <WishlistUser/>
        </div>
     </div>
    <Footer/>
    </>
  )
}

export default Wishlist