import React from 'react';
import './Dashboard.css';
import Stats from '../Stats/Stats';
import RecentOrders from '../RecentOrders/RecentOrders';

const Dashboard:React.FC = ()=>{
  return (
    <section className="dashboard_admin">
        <Stats/>
        <RecentOrders/>
    </section>
  )
}

export default Dashboard