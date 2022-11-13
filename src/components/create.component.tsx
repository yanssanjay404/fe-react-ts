import React from 'react';
import * as toastr from 'toastr';
import Person from '../models/person';
import Users from '../models/user';
import BaseService from '../service/base.service';
import { PersonPage } from './page.form';



interface IProps {
    history: History;
    //Map properties match
    match: {
        isExact: boolean
        params: {
            id: string
        },
        path: string,
        url: string,
    }
}
interface IState {
    person: Users
}


export default class Create extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            person: {
                // id: '',
                name: '',
                email: '',
                gender: '',
                status: 'active'
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);
    }

    private onFieldValueChange(fieldName: string, value: string) {
        const nextState = {
            ...this.state,
            person: {
                ...this.state.person,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }
    private onSave = () => {
        console.log("coba nih", this.state.person)
        BaseService.create<Person>("users", this.state.person).then(
            (rp) => {
                // if (rp.Status) {
                //     toastr.success('Member saved.');


                //     this.setState({
                //         person: {
                //             name: '',
                //             email: '',
                //             gender: '',
                //             id: '',
                //         }
                //     });

                // } else {
                //     toastr.error(rp.Messages);
                //     console.log("Messages: " + rp.Messages);
                //     console.log("Exception: " + rp.Exception);
                // }

                try {
                    console.log("create success1")
                    toastr.success('Member saved.');
                    this.setState({
                        person: {
                            // id: '',
                            name: '',
                            email: '',
                            gender: '',
                            status: 'active'
                        }
                    });
                } catch (error) {
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                    return new Response("erorr4");
                }

            }
        );

    }

    render() {
        return (
            <PersonPage
                person={this.state.person}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }

}