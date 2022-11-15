import * as React from 'react';
import Person from '../models/person';
import { PersonForm1 } from './personForm1';
import Persons1 from '../models/person2';

interface IProps {
    person: Person;
    person2: Persons1;
}

export const PersonPage1: React.FunctionComponent<IProps> = (props: IProps) => {  
    return (
        <PersonForm1
            person={props.person}
            person2={props.person2}
        />
    );
}