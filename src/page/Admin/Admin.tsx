import AdminHeader from '@components/template/admin-panel/AdminHeader/AdminHeader'
import Sidebar from '@components/template/admin-panel/Sidebar/Sidebar'
import Dashboard from '@components/template/admin-panel/Dashboard/Dashboard'
import React from 'react'

const Admin:React.FC = ()=>{
  return (
    <div className="container_admin">
        <div className="admin_sidebar">
            <Sidebar/>
        </div>
        <div className="admin_content">
          <AdminHeader/>
          <Dashboard/>
        </div>
    </div>
  )
}

export default Admin