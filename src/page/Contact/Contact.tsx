import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import React from 'react'

const Contact:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='Contact Us' text='Wed love to hear from you'/>
    <Footer/>
    </>
  )
}

export default Contact