export default class Persons {
    id?: string;
    name: string;
    email: string;
    gender: string;

    constructor(id: string, name: string, email: string, gender: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
}