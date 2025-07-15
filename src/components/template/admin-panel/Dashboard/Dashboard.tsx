import React from 'react';
import './Dashboard.css';
import Stats from '../Stats/Stats';

const Dashboard:React.FC = ()=>{
  return (
    <section className="dashboard_admin">
        <Stats/>
    </section>
  )
}

export default Dashboard