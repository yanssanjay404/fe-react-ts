export default class Persons1 {
    id?: string;
    user_id: string;
    title: string;
    body: string;
    constructor(id: string, user_id: string, title: string, body: string) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.body = body;
    }
}