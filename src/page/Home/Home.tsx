import React from 'react'
import Navbar from '@components/module/Navbar/Navbar'
import Hero from '@components/template/home/Hero/Hero'
import Categories from '@components/template/home/Categories/Categories'
import FeaturedProducts from '@components/template/home/FeaturedProducts/FeaturedProducts'
import SpecialDeals from '@components/template/home/SpecialDeals/SpecialDeals'

const Home:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <FeaturedProducts/>
    <SpecialDeals/>
    <br /><br /><br /><br /><br />
    </>
  )
}

export default Home