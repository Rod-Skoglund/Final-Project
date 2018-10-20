import React from "react";

export const TableItem = props => (
  <tr className="table table-striped">
    <td>
      {props.children}
    </td>
  </tr>
);

export const ThItem = props => (
  <th scope="row" className="w-25">
    {props.value}
  </th>
);

export const TdItem = props => (
  <td className="col" className="w-25">
    {props.value}
  </td>
);

export const TdButton = props => (
  <td className="col" className="w-25">
    <button className="btn btn-primary">
      {props.value}
    </button>
  </td>
);

export const SelectPoints = props => (
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Game Points:</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>{props.value}</option>
      <option>
        {props.value}
      </option>
    ))}
  </select>
</div>
);