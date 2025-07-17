import AdminHeader from '@components/template/admin-panel/AdminHeader/AdminHeader'
import CustomersManagement from '@components/template/admin-panel/customers/CustomersManagement/CustomersManagement'
import Sidebar from '@components/template/admin-panel/Sidebar/Sidebar'
import React from 'react'

const Customers:React.FC = ()=>{
  return (
        <div className="container_admin">
        <div className="admin_sidebar">
            <Sidebar/>
        </div>
        <div className="admin_content">
          <AdminHeader/>
        <CustomersManagement/>
        </div>
    </div>
  )
}

export default Customers