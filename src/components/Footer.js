import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
      <section className="module-small">
			<div className="container">
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
								<span className="fas fa-laptop"></span>
							</div>
							<div className="content-box-title font-inc">
								Software Engineer
							</div>
						</div>                        
					</div>
          <div className="col-sm-4">
						<div className="content-box">
							<div className="content-box-icon">
								<span className="fas fa-camera-retro"></span>
							</div>
							<div className="content-box-title font-inc">
                Photography Enthusiast
							</div>
						</div>                        
					</div>
					<div className="col-sm-4">
						<div className="content-box">
							<div className="content-box-icon">
								<span className="fa fa-envelope"></span>
							</div>
							<div className="content-box-title font-inc">
								jodie.d.zhao@gmail.com
							</div>
						</div>
					</div>
				</div>		
			</div>		
		</section>
		<footer className="footer">		
			<div className="container">		
				<div className="row">		
					<div className="col-sm-12 text-center">
						<p className="copyright font-inc m-b-0">© 2018 <a href=".">DING ZHAO</a>, All Rights Reserved.</p>
					</div>		
				</div>		
			</div>		
		</footer>
    </div>
    );
  }
}

export default Footer;
