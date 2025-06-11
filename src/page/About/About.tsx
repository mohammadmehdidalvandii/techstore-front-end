import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import React from 'react'

const About:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='About TechStore' text='Your Trusted Electronics Partner Since 2010'/>
    <Footer/>
    </>
  )
}

export default About