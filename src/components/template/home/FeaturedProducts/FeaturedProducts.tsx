import React from 'react'
import './FeaturedProducts.css'
import ProductCart from '@components/module/ProductCart/ProductCart'



const FeaturedProducts:React.FC = ()=>{
  return (
    <section className='featuredProducts'>
        <div className="container">
            <h5 className="main_title">Featured Products</h5>
            <div className="items">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts