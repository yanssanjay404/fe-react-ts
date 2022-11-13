export default class Users {
    // id?: string;
    name: string;
    email: string;
    gender: string;
    status: string;
    constructor(name: string, email: string, gender: string, status: string) {
        // this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.status = status;
    }
}