import React from 'react';
import * as toastr from 'toastr';
import Person from '../models/person';
import Persons1 from '../models/person2';
import BaseService from '../service/base.service';
import { History } from 'history';
import { PersonPage1 } from './page.form1';
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
    person: Person,
    person2: Persons1
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
            },
            person2: {
                id: '',
                user_id: '',
                title: '',
                body: ''
            }
        }

    }

    public async componentDidMount() {

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

        let res2 = await axios.get(baseURL + 'users/' + this.props.match.params.id + '/posts')
            .then((response: any) => {
                const result_res2 = response.data;
                console.log("result res2", result_res2)
                try {
                    console.log("oke res2")
                    this.setState({ person2: new Persons1(result_res2.id, result_res2.user_id, result_res2.title, result_res2.body) });
                    return new Response(result_res2);
                } catch (error) {
                    throw new Error("error 1")
                }
            })
            .catch(function (error) {
                return new Response("erorr", error);
            });

        let data = {
            res,
            res2
        }
        return data;

    }

    render() {
        return (
            <PersonPage1
                person={this.state.person}
                person2={this.state.person2}
            />
        );
    }
}