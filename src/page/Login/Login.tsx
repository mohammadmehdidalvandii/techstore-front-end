import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import Signin from '@components/template/login/Signin/Signin'
import React from 'react'

const Login:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Signin/>
    <Footer/>
    </>
  )
}

export default Login