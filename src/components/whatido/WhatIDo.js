import React, { Component } from 'react';
import InterestBox from './InterestBox';
//import {SectionsContainer, Section} from 'react-fullpage';

//move to css, details refer to https://github.com/wedrinklatte/dzhao.info/tree/react/dzhao.info-react#adding-images-fonts-and-files

class WhatIDo extends Component {
  render() {
    return (
      <section className="module">
			<div className="container">
				<h2 className="module-title font-alt">What I do</h2>
				<div className="row multi-columns-row">
					<InterestBox icon="fa fa-chart-line" item="Analytics" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
					<InterestBox icon="fa fa-desktop" item="Web Dev" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
					<InterestBox icon="fa fa-server" item="Infrastructure" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
					<InterestBox icon="fas fa-mobile-alt" item="Mobile Dev" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
				</div>
				<br/>
				<br/>
				<div className="row multi-columns-row">	
					<InterestBox icon="fa fa-camera-retro" item="Photography" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
					<InterestBox icon="fas fa-cut" item="Video Edits" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
					<InterestBox icon="fa fa-book" item="Reading" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
					<InterestBox icon="fas fa-pencil-alt" item="Drawing" desc="Deliver enterprise level analytics for fund performance and market dynamics."/>
				</div>
			</div>
		</section>
    );
  }
}

export default WhatIDo;
