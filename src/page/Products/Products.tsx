import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import Newsletter from '@components/module/Newsletter/Newsletter'
import Store from '@components/template/products/Store/Store'
import React from 'react'

const Products:React.FC = ()=>{
  return (
   <>
    <Navbar/>
    <Breadcrumb title='Our Products' text='Products'/>
    <Store/>
    <Newsletter/>
    <Footer/>
   </>
  )
}

export default Products