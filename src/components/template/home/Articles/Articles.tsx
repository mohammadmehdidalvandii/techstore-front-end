import React from 'react';
import './Articles.css'
import ArticleCart from '@components/module/ArticleCart/ArticleCart';


const Articles:React.FC = ()=>{
  return (
    <section className="articles">
        <div className="container">
            <h5 className="main_title">Latest from Our Blog</h5>
            <div className="articles_items">
              <ArticleCart/>
              <ArticleCart/>    
            </div>
        </div>
    </section>
  )
}

export default Articles