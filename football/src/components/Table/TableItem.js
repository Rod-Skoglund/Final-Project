import React from "react";

export const TableItem = props => (
  <tr className="table table-striped">
    <td>
      {props.children}
    </td>
  </tr>
);

export const ThItem = props => (
  <th scope="row">
    {props.value}
  </th>
);

export const TdItem = props => (
  <td className="col">
    {props.value}
  </td>
);
