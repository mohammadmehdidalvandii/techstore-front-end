import React from "react";
import './Story.css';

const Story: React.FC = () => {
  return (
    <section className="story">
      <div className="container">
  
        <div className="content">
          <h2>Out Story</h2>
          <p>
            Founded in 2010, TechStore began with a simple mission: to make
            cutting-edge technology accessible to everyone. What started as a
            small electronics shop has grown into one of the region's leading
            technology retailers.
          </p>
          <p>
            Over the years, we've built a reputation for quality, innovation,
            and exceptional customer service. Our journey has been marked by
            continuous growth, adaptation to new technologies, and an unwavering
            commitment to our customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
