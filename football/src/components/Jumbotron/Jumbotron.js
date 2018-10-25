import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 150, clear: "both", paddingTop: 40, textAlign: "center", background: "lightgreen" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
