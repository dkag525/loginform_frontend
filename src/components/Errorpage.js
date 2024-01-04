import React from "react";
import { NavLink } from "react-router-dom";

function Errorpage() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Page not Found</h2>
      </div>
      <NavLink to="/">Back to home Page</NavLink>
    </div>
  );
}

export default Errorpage;
