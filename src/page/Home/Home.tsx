import React from 'react'
import Navbar from '@components/module/Navbar/Navbar'
import Hero from '@components/template/home/Hero/Hero'
import Categories from '@components/template/home/Categories/Categories'
import FeaturedProducts from '@components/template/home/FeaturedProducts/FeaturedProducts'
import SpecialDeals from '@components/template/home/SpecialDeals/SpecialDeals'
import Trust from '@components/template/home/Trust/trust'
import Products from '@components/template/home/Products/Products'
import Testimonials from '@components/template/home/Testimonials/Testimonials'
import Brands from '@components/template/home/Brands/Brands'
import Articles from '@components/template/home/Articles/Articles'
import Newsletter from '@components/module/Newsletter/Newsletter'

const Home:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <FeaturedProducts/>
    <SpecialDeals/>
    <Trust/>
    <Products/>
    <Testimonials/>
    <Brands/>
    <Articles/>
    <Newsletter/>
    <br /><br /><br /><br /><br />
    </>
  )
}

export default Home