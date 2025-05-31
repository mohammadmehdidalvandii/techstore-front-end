import React from 'react'
import Navbar from '@components/module/Navbar/Navbar'
import Hero from '@components/template/home/Hero/Hero'
import Categories from '@components/template/home/Categories/Categories'

const Home:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <br /><br /><br /><br /><br />
    </>
  )
}

export default Home