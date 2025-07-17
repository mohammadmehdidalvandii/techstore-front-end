import AdminHeader from '@components/template/admin-panel/AdminHeader/AdminHeader'
import FilterProducts from '@components/template/admin-panel/products/FilterProducts/FilterProducts'
import ProductManagement from '@components/template/admin-panel/products/ProductManagement/ProductManagement'
import ProductsList from '@components/template/admin-panel/products/ProductsList/ProductsList'
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
        <ProductManagement/>
        <FilterProducts/>
        <ProductsList/>
        </div>
    </div>
  )
}

export default Products