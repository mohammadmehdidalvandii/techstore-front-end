import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import React from 'react'

const Categories:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='Product Categories' text='Categories'/>
    <Footer/>
    </>
  )
}

export default Categories