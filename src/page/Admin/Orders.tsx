import AdminHeader from '@components/template/admin-panel/AdminHeader/AdminHeader'
import Sidebar from '@components/template/admin-panel/Sidebar/Sidebar'
import React from 'react'

const Orders:React.FC = ()=>{
  return (
    <div className="container_admin">
        <div className="admin_sidebar">
            <Sidebar/>
        </div>
        <div className="admin_content">
          <AdminHeader/>
            orders
        </div>
    </div>
  )
}

export default Orders