import React from 'react';
import './Newsletter.css';

const Newsletter:React.FC = ()=>{
  return (
    <section className="newsletter">
        <div className="container">
            <div className="content">
                 <h2>Stay Updated</h2>
                <p>Subscribe for exclusive deals and tech news</p>
            </div>
            <form action="#" className="newsletter_form">
                <input type="text" placeholder='Enter your email' />
                <button className='btn primary'>subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter