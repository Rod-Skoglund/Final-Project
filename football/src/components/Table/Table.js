import React from "react";
import "./Table.css";

export const Table = ({ children }) => {
  return (
    <table className="table-overflow-container">
      <thead className="table-group">
        {children}
      </thead>
      <tbody className="table-group">
        {children}
      </tbody>
    </table>
  );
};
