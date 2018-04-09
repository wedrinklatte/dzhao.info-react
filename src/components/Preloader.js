import React, { Component } from 'react';

class Preloader extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
