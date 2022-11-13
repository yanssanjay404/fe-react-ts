import React from 'react';
import * as toastr from 'toastr';
import Person from '../models/person';
import BaseService from '../service/base.service';
import { History } from 'history';
import { PersonPage } from './page.form';
import axios from "axios";


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
    person: Person
}


export default class Edit extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            person: {
                name: '',
                email: '',
                gender: '',
                id: ''
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


    public async componentDidMount() {
        // BaseService.get<Person>('users/', this.props.match.params.id).then((response: any) => {
        //     // if (rp.Status) {
        //     //     const person = rp.Data;
        //     //     this.setState({ person: new Person(person.id, person.name,person.email, person.gender )});
        //     // } else {
        //     //     toastr.error(rp.Messages);
        //     //     console.log("Messages: " + rp.Messages);
        //     //     console.log("Exception: " + rp.Exception);
        //     // }
        //     try {
        //         console.log('sukses')
        //         const person = response.data;
        //         console.log("dataku", response.data)
        //         this.setState({ person: new Person(person.id, person.name, person.email, person.gender) });
        //     } catch (error) {
        //         console.log('gagal')
        //         toastr.error(response.Messages);
        //         console.log("Messages: " + response.Messages);
        //         console.log("Exception: " + response.Exception);
        //         // throw new Error("error")
        //     }
        // }
        // );

        const baseURL = "https://gorest.co.in/public/v2/"

        let res = await axios.get(baseURL + 'users/' + this.props.match.params.id)
            .then((response: any) => {
                const result = response.data;
                console.log("result 1", result)
                try {
                    console.log("oke 1")
                    this.setState({ person: new Person(result.id, result.name, result.email, result.gender) });
                    return new Response(result);
                } catch (error) {
                    throw new Error("error 1")
                }

            })
            .catch(function (error) {
                return new Response("erorr", error);
            });
        return res;

    }


    private onSave = () => {

        console.log("data person ",this.state.person);
        BaseService.update<Person>("users/", this.props.match.params.id, this.state.person).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Member saved.');
                    this.props.history.goBack();
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
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