import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import Brands from '@components/template/Categories/Brands/Brands'
import Popular from '@components/template/Categories/Popular/Popular'
import React from 'react'

const Categories:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='Product Categories' text='Categories'/>
    <Popular/>
    <Brands/>
    <Footer/>
    </>
  )
}

export default Categories