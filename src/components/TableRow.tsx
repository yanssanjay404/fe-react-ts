import React from "react";
import { Link } from "react-router-dom";
import Person from "../models/person";
import BaseService from "../service/base.service";
import * as toastr from "toastr";

function Del(Id?: string) {
  BaseService.delete("/person/del/", {
    id: Id,
  }).then((rp) => {
    if (rp.Status) {
      toastr.success("Member saved.");
      window.location.reload();
    } else {
      toastr.error(rp.Messages);
      console.log("Messages: " + rp.Messages);
      console.log("Exception: " + rp.Exception);
    }
  });
}

interface IProps {
  person: Person;
  index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => { 
  return (
    <tr>
      {/* <td>{props.index}</td> */}
      <td>{props.person.name}</td>
      <td>{props.person.email}</td>
      <td>{props.person.gender}</td>
      <td>
        <Link to={"/edit/" + props.person.id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button onClick={() => Del(props.person.id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};
export default TableRow;