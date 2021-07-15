import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

export const MenuItem = withRouter(({ title, imageUrl, size, history }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push()}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
});
