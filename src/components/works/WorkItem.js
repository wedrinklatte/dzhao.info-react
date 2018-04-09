import React, { Component } from 'react';
import './css/WorkItem.css';

class WorkItem extends Component {
  render() {
    return (
      <li className={"work-item " + this.props.category}>
        <a href={"#" + this.props.name} className="has-popup">
          <div className="work-image">
            <img src={this.props.avatar} alt="" />
          </div>
          <div className="work-caption">
            <h3 className="work-title font-alt">{this.props.title}</h3>
            <div className="work-descr font-inc">
              {this.props.category.split(" ").map(i => {
                    return i==="data"?"data science":i;
              }).join(" | ")}
              {/* {this.props.category.split(" ").join(" | ")} */}
            </div>
          </div>
        </a>
        <div id={this.props.name} className="popup-box mfp-fade mfp-hide">
          <div className="content">
            <div className="image">
              <img src={this.props.fullimg} alt="" />
            </div>
            <div className="desc">
              {/* <h4>{this.props.subtitle}</h4> */}
              <div className="hs-title-size-1 font-alt">
                {this.props.title}
              </div>
              <div className="hs-title-size-0 font-inc">
                {this.props.subtitle}
              </div>
              <br/>
              <div className="hs-title-size-micro font-inc">
                <strong>Tools:</strong>{this.props.tools}
              </div>
              <div className="hs-title-size-micro font-inc">
                <strong>Year:</strong>{this.props.year}
              </div>
              {this.props.repo ? (
                <div className="hs-title-size-micro font-inc">
                  <strong>Code Repo:</strong><a href={this.props.repo} target="_blank"><i className="fa fa-link"></i></a>
                </div>) : 
                ("")
              }
              <br/>
              {/* <p className="align-right">
                <span className="btn btn-g btn-round btn-xs">{this.props.tools}</span>
              </p> */}
              <div className="hs-title-size-0">
                {this.props.desc.split("\\n").map(i => {
                    return <p>{i}</p>;
                })}
              </div>
            </div>
            {this.props.credit ? (
              <div className="hs-title-size-micro font-inc align-right">
                <i className="fas fa-info-circle"></i> Icons made by <a href={this.props.creditLink}>{this.props.credit}</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed under {this.props.creditLicense}
              </div>
              ) : ("")
            }
          </div>
        </div>
      </li>
    );
  }
}

export default WorkItem;
