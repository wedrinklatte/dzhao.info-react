import React, { Component } from 'react';
//import './css/et-line-font.css';

class Contact extends Component {
  render() {
    return (
			<div>
				<hr className="divider-w" />
				<section className="module" id="contact-section">
				<div className="container">
					{/* <h2 className="module-title font-alt">Get in touch</h2> */}
					<div className="row">
						{/* <div className="col-sm-4">
							<div className="content-box">
								<div className="content-box-icon">
									<span className="fas fa-map-pin"></span>
								</div>
								<div className="content-box-title font-inc">
									San Francisco, CA, USA
								</div>
							</div>
						</div> */}
						<div className="col-sm-4">
							<div className="content-box">
								<div className="content-box-icon">
									<span className="icon-laptop"></span>
								</div>
								<div className="content-box-title font-inc">
									Software Engineer
								</div>
							</div>                        
						</div>
						<div className="col-sm-4">
							<div className="content-box">
								<div className="content-box-icon">
									<span className="icon-camera"></span>
								</div>
								<div className="content-box-title font-inc">
									Photography Enthusiast
								</div>
							</div>                        
						</div>
						<div className="col-sm-4">
							<div className="content-box">
								<div className="content-box-icon">
									<span className="icon-envelope"></span>
								</div>
								<div className="content-box-title font-inc">
									jodie.d.zhao@gmail.com
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		</div>
    );
  }
}

export default Contact;
