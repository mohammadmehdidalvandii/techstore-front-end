import Footer from '@components/module/Footer/Footer';
import Navbar from '@components/module/Navbar/Navbar';
import AccentSetting from '@components/template/user-panel/AccentSetting/AccentSetting';
import UserPanelNav from '@components/template/user-panel/UserPanelNav/UserPanelNav';
import React from 'react';

const Settings:React.FC = ()=>{
  return (
       <>
    <Navbar/>
     <div className="container_userPanel container">
        <div className="userPanel_nav box">
            <UserPanelNav/>
        </div>
        <div className="userPanel_content box">
            <AccentSetting/>
        </div>
     </div>
    <Footer/>
    </>
  )
}

export default Settings