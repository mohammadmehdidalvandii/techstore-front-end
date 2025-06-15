import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import React from 'react'

const Deals:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='Special Deals & Offers' text='Deals '/>
    <Footer/>
    </>
  )
}

export default Deals