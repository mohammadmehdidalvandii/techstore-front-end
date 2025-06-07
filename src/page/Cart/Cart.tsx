import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import Shopping from '@components/template/cart/Shopping/Shopping'
import React from 'react'

const Cart:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='Shopping Cart'  text='Review your items and proceed to checkout'/>
    <Shopping/>
    <Footer/>
    </>
  )
}

export default Cart