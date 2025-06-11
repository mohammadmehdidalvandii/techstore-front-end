import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import Mission from '@components/template/about/Mission/Mission'
import Story from '@components/template/about/Story/Story'
import Team from '@components/template/about/Team/Team'
import React from 'react'

const About:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='About TechStore' text='Your Trusted Electronics Partner Since 2010'/>
    <Story/>
    <Mission/>
    <Team/>
    <Footer/>
    </>
  )
}

export default About