export class Customer {
    id: number;
    name: string;
    company?: string;
    username: string;
    email: string;
    address: string;
    zip: string;
    state: string;
    country: string;
    phone: string;
    photo?: string;

    constructor() {
        this.id = 0;
        this.name = '';
        //this.company = '';
        this.username = '';
        this.email = '';
        this.address = '';
        this.zip = '';
        this.state = '';
        this.country = '';
        this.phone = '';
    }
}

export class post {
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor() {
        this.id = 0;
        this.userId = 0;
        this.title = '';
        this.body = '';
    }
}