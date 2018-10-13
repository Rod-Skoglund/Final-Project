import React from "react";
// import "./Table.css";


export const Table = ({ children }) => {
  return (
    <table className="table table-striped table-bordered">
        {children}
    </table>
  );
};
