import React from "react";
import {withRouter} from "react-router-dom"
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, size, history }) => (
  <div
    className={`${size} menu-item`}
  >
  <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} onClick={() => history.push(`${linkUrl}`)}/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
);

export default withRouter(MenuItem);
