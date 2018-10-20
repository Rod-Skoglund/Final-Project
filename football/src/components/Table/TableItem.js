import React from "react";

export const TableItem = props => (
  <tr className="table-group-item">
    <td>
      {props.children}
    </td>
  </tr>
);
