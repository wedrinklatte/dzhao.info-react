import React, { Component } from 'react';

class InterestBox extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="content-box">
          <div className="content-box-icon">
            <span><i className={this.props.icon}></i></span>
          </div>
          <div className="content-box-title font-inc font-uppercase">
            {this.props.item}
          </div>
          <div className="content-box-text">
            {this.props.desc}
          </div>
        </div>
      </div>
    );
  }
}

export default InterestBox;
