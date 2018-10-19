import React from "react";

export const TableHead = props => (
  <tr className="table-group-item">
    <th>
      {props.children}
    </th>
  </tr>
);
