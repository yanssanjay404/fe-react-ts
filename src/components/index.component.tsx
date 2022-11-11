import * as React from "react";
import TableRow from "./TableRow";
import Person from "../models/person";
import BaseService from "../service/base.service";
import * as toastr from "toastr";
interface IProps { }
interface IState {
  listPersons: Array<Person>;
  isReady: Boolean;
  hasError: Boolean;
}

class Index extends React.Component<IProps, IState> {
  public state: IState = {
    listPersons: new Array<Person>(),
    isReady: false,
    hasError: false,
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      isReady: false,
      listPersons: Array<Person>(),
      hasError: false,
    };
  }

  public componentDidMount() {
    BaseService.getAll<Person>("users").then((rp) => {
      if (rp.Status) {
        const data = rp.Data;
        const listPersons = new Array<Person>();

        (data || []).forEach((p: any) => {
          listPersons.push(new Person(p.id, p.name, p.email, p.gender));
        });

        this.setState({ listPersons: listPersons });
        this.setState({ isReady: true });
      } else {
        this.setState({ isReady: true });
        this.setState({ hasError: true });
        console.log("Messages: " + rp.Messages);
        console.log("Exception: " + rp.Exception);
      }
    });

    setTimeout(() => {
      if (!this.state.isReady) {
        toastr.info(
          "Ada kemungkinan sistem sedang dimulai ulang, harap tunggu lebih lama ...",
          "",
          { timeOut: 8000 }
        );
      }

      if (this.state.hasError) {
        toastr.error(
          "Terjadi kesalahan!",
          "",
          { timeOut: 8000 }
        );
      }
    }, 2000);
  }

  public tabRow = () => {
    if (!this.state.isReady) {
      return (
        <tr>
          <td colSpan={6} className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Memuat...</span>
            </div>
          </td>
        </tr>
      );
    }
    if (this.state.hasError) {
      return (
        <tr>
          <td colSpan={6} className="text-center">
            <div className="alert alert-danger" role="alert">
              Terjadi kesalahan!
            </div>
          </td>
        </tr>
      );
    }

    return this.state.listPersons.map(function (object, i) {
      return <TableRow key={i} index={i + 1} person={object} />;
    });
  };

  public render(): React.ReactNode {
    return (
      <div>
        <h3 className="text-center">Users List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              {/* <th>No</th> */}
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th className="text-center" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default Index;
