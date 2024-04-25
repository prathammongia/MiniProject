import React from 'react';
import projectimage1 from './first.jpeg';
import projectimage2 from './second.jpeg';
import projectimage3 from './third.jpeg';
import projectimage4 from './fourth.jpeg';

const PortfolioComponent = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={projectimage1}/>
            <div className="layer">
              <h3>EcoSmart Campus Initiative</h3>
              <p>Implementing sustainable practices to reduce carbon footprint on university grounds.</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
          <div className="work">
            <img src={projectimage2}/>
            <div className="layer">
              <h3>Tech4Kids: Digital Literacy Outreach Program</h3>
              <p>Bridging the digital divide by providing tech education to underprivileged children.</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
          <div className="work">
            <img src={projectimage3}/>
            <div className="layer">
              <h3>HealthEats: Campus Nutrition Awareness Campaign</h3>
              <p> Promoting healthier eating habits among students through education and accessible resources.</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
          <div className="work">
            <img src={projectimage4} />
            <div className="layer">
              <h3>FutureBuilders: Community STEM Workshops</h3>
              <p>Empowering local youth with hands-on STEM activities to foster innovation and curiosity.</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
        </div>
        <a href="portfolio.html" className="btn">See More</a>
      </div>
    </div>
  );
}

export default PortfolioComponent;
