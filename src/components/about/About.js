import React, { Component } from 'react';
import profile from './profile.jpg';
import cityuLogo from './cityu_logo.png';
import cmuLogo from './cmu_logo.png';

class About extends Component {
  render() {
    return (
      <section className="module" id="about-section">
				<div className="container">
					<h2 className="module-title font-alt">ABOUT</h2>
					<div className="row">
						<div className="col-sm-12 col-md-8">
							<div className="module-subtitle font-inc">
								I am a San Francisco based software engineer.
							</div>
							<p>Currently working on ETF related research and analytics, my previous experience also include trade processing, newswire text analytics and index equity replication engine. </p>
							<p>I received my Master's degree from Carnegie Mellon University. It has been great experience studying together with the many programmingholics in Pittsburgh (already miss the short commute while typing). I grew up in southeast China and had a Bachelor's degree in Electronic and Communication Engineering from City University of Hong Kong.</p>
							<p><img className="school-logo" src={cmuLogo} /> <img className="school-logo" src={cityuLogo} /></p>
							<p>I keep documenting my coding tips on Twitter.</p>
							<p>I enjoy taking photographs in my free time, checkout my portfolio here. <a href="https://dingzhao.myportfolio.com"><i className="far fa-images"></i></a> </p>
							<ul className="social-list">
								<li><a href="https://www.linkedin.com/in/ding-zhao-56095069/"><i className="fab fa-linkedin"></i></a></li>
								<li><a href="https://www.instagram.com/wedrinklatte/"><i className="fab fa-instagram"></i></a></li>
								<li><a href="https://twitter.com/wedrinklatte/"><i className="fab fa-twitter"></i></a></li>
								<li><a href="https://github.com/wedrinklatte"><i className="fab fa-github"></i></a></li>
								<li><a href="https://www.behance.net/dingzhao"><i className="fab fa-behance"></i></a></li>
								<li><a href="mailto:jodie.d.zhao@gmail.com"><i className="fa fa-envelope"></i></a></li>
							</ul>
						</div>
						<div className="col-sm-12 col-md-4">
							<div className="profile">			
								<img src={profile} alt="" />
							</div>
						</div>
					</div>
				</div>
		</section >
    );
  }
}

export default About;
