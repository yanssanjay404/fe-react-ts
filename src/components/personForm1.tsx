import * as React from 'react';
import Person from '../models/person';
import Persons1 from '../models/person2';
import { Input1 } from '../common/components/form/input1';

interface IProps {
    person: Person;
    person2: Persons1;
}

export const PersonForm1: React.FunctionComponent<IProps> = (props) => {
    // const token = "666244e529044865601b075f13615d5fcfbb57204aefa31ab016141272cdbe9d"
    return (
        <form>
            <h1>Detail Data User</h1>

            <Input1
                name="name"
                label="Nama"
                value={props.person.name}
            />

            <Input1
                name="email"
                label="Email"
                value={props.person.email}
            />

            <Input1
                name="gender"
                label="Gender"
                value={props.person.gender}
            />
            <br />
            <br />
            <h3>Daftar Post</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.person2.title}</td>
                        <td>{props.person2.body}</td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};
