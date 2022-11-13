import * as React from 'react';
import Person from '../models/person';

import { Input, Button } from '../common/components/form';

interface IProps {
    person: Person;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const PersonForm: React.FunctionComponent<IProps> = (props) => {
    // const token = "666244e529044865601b075f13615d5fcfbb57204aefa31ab016141272cdbe9d"
    return (
        <form>
            <h1>Data User</h1>

            <Input
                name="name"
                label="Nama"
                value={props.person.name}
                onChange={props.onChange}
            />

            {/* <input
                type="hidden"
                name="token"
                value={token}
                onChange={props.onChange}
            /> */}

            <Input
                name="email"
                label="Email"
                value={props.person.email}
                onChange={props.onChange}
            />

            <Input
                name="gender"
                label="Gender"
                value={props.person.gender}
                onChange={props.onChange}
            />

            <Button
                label="Save"
                className="btn btn-success mt-2"
                onClick={props.onSave}
            />
        </form>
    );
};
