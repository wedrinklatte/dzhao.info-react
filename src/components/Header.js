import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="header navbar navbar-custom navbar-transparent navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href=".">Ding Zhao</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="https://dingzhao.myportfolio.com">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;