import Breadcrumb from '@components/module/Breadcrumb/Breadcrumb'
import Footer from '@components/module/Footer/Footer'
import Navbar from '@components/module/Navbar/Navbar'
import DailyDeal from '@components/template/deals/DailyDeal/DailyDeal'
import FlashSale from '@components/template/deals/FlashSale/FlashSale'
import React from 'react'

const Deals:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <Breadcrumb title='Special Deals & Offers' text='Deals '/>
    <FlashSale/>
    <DailyDeal/>
    <Footer/>
    </>
  )
}

export default Deals