import AdminHeader from '@components/template/admin-panel/AdminHeader/AdminHeader'
import Sidebar from '@components/template/admin-panel/Sidebar/Sidebar'
import React from 'react'

const Products:React.FC = ()=>{
  return (
     <div className="container_admin">
        <div className="admin_sidebar">
            <Sidebar/>
        </div>
        <div className="admin_content">
          <AdminHeader/>
            Products admin
        </div>
    </div>
  )
}

export default Products