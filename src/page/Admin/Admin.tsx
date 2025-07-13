import Sidebar from '@components/template/admin-panel/Sidebar/Sidebar'
import React from 'react'

const Admin:React.FC = ()=>{
  return (
    <div className="container_admin">
        <div className="admin_sidebar">
            <Sidebar/>
        </div>
        <div className="admin_content">this is content admin</div>
    </div>
  )
}

export default Admin