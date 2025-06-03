import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import Newsletter from '@components/module/Newsletter/Newsletter'
import React from 'react'

const Products:React.FC = ()=>{
  return (
   <>
    <Navbar/>
    <Newsletter/>
    <Footer/>
   </>
  )
}

export default Products