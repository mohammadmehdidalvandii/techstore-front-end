import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import SingUp from '@components/template/register/SingUp/SingUp'
import React from 'react'

const Register:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <SingUp/>
    <Footer/>
    </>
  )
}

export default Register