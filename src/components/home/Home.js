import React, { Component } from 'react';
import homeBackground from './images/home.JPG';
import './css/Home.css';

var homeSection = {
  backgroundImage: `url(${homeBackground})`
};

class Home extends Component {
  render() {
    return (
      <div>
        <section className="started module-hero module-full-height module-fade" style={homeSection}>
          <div className="hs-caption container">
            <div className="caption-content align-left">
              <div className="hs-title-size-2 font-inc text-uppercase m-b-20">
                HELLO & WELCOME
              </div>
              <div className="hs-title-size-2 font-alt">
                I AM A 
                <div className="typing-title">
                  <p> Software Engineer</p>
                  <p> Photography Enthusiast</p>
                </div>
                <span className="typed-title"></span>
              </div>
            </div>
          </div>
          {/* <i className="icon fas fa-chevron-down"></i> */}
          <a href="#" className="mouse-btn"><i className="icon ion ion-chevron-down"></i></a>
        </section>
      </div>
    );
  }
}

export default Home;
